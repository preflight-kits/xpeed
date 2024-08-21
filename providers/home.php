<?php

/*
Template Name: Home
*/

class HomePage {

    public function render() {

        $context = Timber::context();

        return Timber::render(
            'pages/home/home.twig',
            $context
        );
    }
}

$page = new HomePage();
$page->render();