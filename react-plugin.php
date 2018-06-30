<?php
/**
 * Plugin Name: React Plugin
 */

namespace ReactPlugin;

if (!defined('ABSPATH')) {
    exit;
}

/*
 * Initialize all the plugin things.
 *
 * @throws \Throwable
 */
function initialize()
{

    try {
        if (is_readable(__DIR__ . '/vendor/autoload.php')) {
            /** @noinspection PhpIncludeInspection */
            require_once __DIR__ . '/vendor/autoload.php';
        }

        (new Plugin)->init();

    } catch (\Throwable $e) {
        if (defined('WP_DEBUG') && WP_DEBUG) {
            throw $e;
        }
        do_action('reactplugin.error', $e);
    }
}

add_action('plugins_loaded', __NAMESPACE__ . '\\initialize');
