<?php

/**
 * Routing
 */

 /**
 * Configuration
 */

include('settings.php');
$pdo = new PDO('mysql:host='.BDD_SERVER.'; dbname='.BDD_DATABASE.'; charset=utf8', BDD_LOGIN , BDD_PASSWORD);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

$liste_url = $pdo->query('SELECT title FROM articles ORDER BY id DESC');
$info_url = $liste_url->fetch();

// Get 'URL' domain's url
define('URL', "https://".$_SERVER['HTTP_HOST']."/");

// Get 'q' parameter (default is home)
$q = !empty($_GET['q']) ? $_GET['q'] : 'home';

// Set '404' as default controller
$controller = '404'; 

// Home
if($q === 'home')
{
    $controller = 'home';
}

// Studio
else if($q === 'studio')
{
    $controller = 'studio';
}
// Publication
else if($q === 'publications')
{
    $controller = 'publications';
}
// Working on
else if($q === 'working_on')
{
    $controller = 'working_on';
}
// Thanks newsletter
else if($q === 'thanks_mail') {
    $controller = 'thanks_mail';
}

// Create article
else if($q === 'create_article') {
    $controller = 'create_article';
}

// Articles
else if(preg_match('/^article\/\S+$/', $q)) //max 99 /!\
{
    $controller = 'article';
}

// Leave newsletter
else if($q === 'leave_newsletter')
{
    $controller = 'leave_newsletter';
}

// Legal notices
else if($q === 'legal_notices') 
{
    $controller = 'full_text';
}

// End-user license agreement
else if($q === 'cgu') 
{
    $controller = 'full_text';
}

// Include the right controller
include 'views/pages/'.$controller.'.php';