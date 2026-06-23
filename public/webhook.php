<?php
// GitHub webhook secret — must match repo → Settings → Webhooks
define('SECRET', 'wbbuilt2026krem%&');

// Where the live site is served from (subdomain docroot)
define('WEB_ROOT', '/home/krem/public_html/wbbuilt/');

// Git working copy (kept outside public_html)
define('GIT_CACHE', '/home/krem/wbbuilt-deploy/');

define('GIT', '/usr/bin/git');
define('REPO', 'https://github.com/stevepapas/wbbuilt-site.git');
define('BRANCH', 'deploy');
define('LOG_FILE', '/home/krem/wbbuilt-deploy.log');

function deploy_log(string $message): void
{
    file_put_contents(LOG_FILE, gmdate('c') . ' ' . $message . "\n", FILE_APPEND);
}

function run_cmd(string $command): array
{
    deploy_log('$ ' . $command);
    $output = [];
    $exitCode = 0;
    exec($command . ' 2>&1', $output, $exitCode);
    $text = implode("\n", $output);
    deploy_log($text !== '' ? $text : '(no output)');
    deploy_log('exit ' . $exitCode);
    return [$exitCode, $text];
}

function respond_and_continue(string $message): void
{
    http_response_code(200);
    header('Content-Type: text/plain; charset=utf-8');
    echo $message . "\n";

    if (function_exists('fastcgi_finish_request')) {
        fastcgi_finish_request();
        return;
    }

    ignore_user_abort(true);
    if (function_exists('ob_get_level')) {
        while (ob_get_level() > 0) {
            ob_end_flush();
        }
    }
    flush();
}

// ── Verify GitHub signature ──────────────────────────────────
$payload = file_get_contents('php://input');
$signature = 'sha256=' . hash_hmac('sha256', $payload, SECRET);

if (!hash_equals($signature, $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '')) {
    http_response_code(403);
    exit('Forbidden');
}

// ── Only act on push to deploy branch ───────────────────────
$data = json_decode($payload, true);
$branch = $data['ref'] ?? '';

if ($branch !== 'refs/heads/deploy') {
    http_response_code(200);
    exit('Ignored — not deploy branch');
}

$commit = $data['after'] ?? 'unknown';
deploy_log('Webhook received for deploy @ ' . $commit);

// Reply immediately so GitHub does not time out waiting for git
respond_and_continue('Deploy started for ' . $commit);

if (!is_dir(GIT_CACHE) && !mkdir(GIT_CACHE, 0755, true) && !is_dir(GIT_CACHE)) {
    deploy_log('ERROR: could not create git cache directory');
    exit;
}

if (!is_dir(WEB_ROOT) && !mkdir(WEB_ROOT, 0755, true) && !is_dir(WEB_ROOT)) {
    deploy_log('ERROR: could not create web root directory');
    exit;
}

$cache = escapeshellarg(GIT_CACHE);
$webRoot = escapeshellarg(rtrim(WEB_ROOT, '/'));
$repo = escapeshellarg(REPO);
$git = escapeshellarg(GIT);

if (!is_dir(GIT_CACHE . '.git')) {
    [$code, $output] = run_cmd("$git clone --branch " . BRANCH . " --single-branch $repo $cache");
    if ($code !== 0) {
        deploy_log('ERROR: initial clone failed');
        exit;
    }
} else {
    // deploy branch is force-pushed by GitHub Actions — never use plain git pull
    [$code] = run_cmd("cd $cache && $git fetch origin " . BRANCH);
    if ($code !== 0) {
        deploy_log('ERROR: git fetch failed');
        exit;
    }

    [$code] = run_cmd("cd $cache && $git reset --hard origin/" . BRANCH);
    if ($code !== 0) {
        deploy_log('ERROR: git reset failed');
        exit;
    }
}

$rsync = trim((string) shell_exec('which rsync 2>/dev/null'));
if ($rsync !== '') {
    $rsyncBin = escapeshellarg($rsync);
    [$code] = run_cmd("$rsyncBin -a --delete --exclude .git/ $cache/ $webRoot/");
} else {
    [$code] = run_cmd("cd $cache && /bin/cp -R . $webRoot/");
}

if ($code !== 0) {
    deploy_log('ERROR: copy to web root failed');
    exit;
}

deploy_log('Deploy complete for ' . $commit);
