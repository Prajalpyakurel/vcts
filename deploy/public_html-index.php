<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// This file replaces public_html/index.php on hosts where the domain's
// document root is fixed to public_html (i.e. it cannot be pointed at the
// Laravel app's /public folder directly). The Laravel app itself lives one
// level up, in a sibling folder next to public_html — rename APP_FOLDER_NAME
// below to match whatever you named that folder on the server.

const APP_FOLDER_NAME = 'valleycollege_app';

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../'.APP_FOLDER_NAME.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__.'/../'.APP_FOLDER_NAME.'/vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once __DIR__.'/../'.APP_FOLDER_NAME.'/bootstrap/app.php';

$app->handleRequest(Request::capture());
