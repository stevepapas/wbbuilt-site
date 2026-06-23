<?php
// Set this secret in GitHub webhook settings AND here
define('SECRET', 'wbbuilt2026krem%&');

// Path to your web root where the site should live
define('WEB_ROOT', '/home/krem/public_html/wbbuilt/');

// Path to git binary (find with: which git)
define('GIT', '/usr/bin/git');

// ── Verify GitHub signature ──────────────────────────────────
$payload = file_get_contents('php://input');
$sig     = 'sha256=' . hash_hmac('sha256', $payload, SECRET);

if (!hash_equals($sig, $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '')) {
    http_response_code(403);
    exit('Forbidden');
}

// ── Only act on push to deploy branch ───────────────────────
$data   = json_decode($payload, true);
$branch = $data['ref'] ?? '';

if ($branch !== 'refs/heads/deploy') {
    http_response_code(200);
    exit('Ignored — not deploy branch');
}

// ── Pull latest files ────────────────────────────────────────
$repo = 'https://github.com/stevepapas/wbbuilt-site.git';

if (!is_dir(WEB_ROOT . '.git')) {
    // First run — clone the deploy branch
    $cmd = GIT . ' clone --branch deploy --single-branch ' . $repo . ' ' . WEB_ROOT . ' 2>&1';
} else {
    // Subsequent runs — pull latest
    $cmd = 'cd ' . WEB_ROOT . ' && ' . GIT . ' pull origin deploy 2>&1';
}

$output = shell_exec($cmd);

http_response_code(200);
echo "OK\n" . $output;
