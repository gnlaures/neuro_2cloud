<?php
    $siteConfig = [
        'title' => '2 Cloud',
        'title_spacer' => ' | ',
        'keywords' => 'front end, boilerplate, css, html, js, scss, smacss, bem, gulp, node',
        'description' => 'Boilerplate Front-end',
        'base_folder' => 'boilerplate',
        'body_class' => '',
        'active_page' => 'pages/home.php',
        'author' => '@gnlaureano',
        'creator' => '@gnlaureano',
        'language' => 'pt-br',
        'publisher' => '@gnlaureano',
        'url' => 'https://www.urldosite.dominio/',
        'theme_color' => '#112c69',
        'mask_icon_color' => '#112c69',
        'tile_color' => '#112c69',
        'min_viewport_width' => '320',
        'scale_min' => '1',
        'scale_max' => '1.5',
        'scalable' => 'yes',
    ];

    $pageRender = [
        'local' => explode('/', $_SERVER['REQUEST_URI']),
        'public_html' => explode($siteConfig['base_folder'], $_SERVER['REQUEST_URI'])
    ];

    switch ($pageRender['local'][1]) {
        case '' :
        case 'home' :
            $siteConfig['active_page'] = 'pages/home.php';
            $siteConfig['title'] = $siteConfig['title'].$siteConfig['title_spacer'].'Página Inicial';
            $siteConfig['body_class'] = 'p-home';
            break;

        // inner
//        case 'about' :
//            $siteConfig['active_page'] = 'pages/about.php';
//            $siteConfig['title'] = $siteConfig['title'].$siteConfig['title_spacer'].'Sobre';
//            $siteConfig['body_class'] = 'p-inner p-about';
//            break;

        // 404
        default :
            $siteConfig['active_page'] = 'pages/home.php';
            $siteConfig['title'] = $siteConfig['title'].$siteConfig['title_spacer'].'Página Inicial';
            $siteConfig['body_class'] = 'p-home';
            break;
//            header("HTTP/1.0 404 Not Found");
//            $siteConfig['title'] = $siteConfig['title'].$siteConfig['title_spacer'].'Erro';
//            $siteConfig['body_class'] = 'p-inner p-error';
//            break;
    }
?>