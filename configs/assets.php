<?php

/* deregister unneccesary styles */
function _xpeed_deregister_assets() {

    wp_dequeue_style( 'wp-emoji-styles' );
    wp_dequeue_style( 'classic-theme-styles' );
    wp_dequeue_style( 'global-styles' );
    wp_dequeue_style( 'wp-block-library' );
}

add_action(
    'wp_print_styles',
    '_xpeed_deregister_assets',
    100
);

remove_action('wp_head', 'print_emoji_detection_script', 7);