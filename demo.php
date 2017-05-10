<?php

require "vendor/autoload.php";

$banner = new UConn\Banner\Banner();

$banner->name = "University Communications";

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Demo for PHP Banner</title>
        <link rel="stylesheet" href="_site/banner.css">
        <style media="screen">
            body {
                margin:0;
            }
        </style>
        <style media="screen">
            /* Example of outputting the CSS */
            <?php echo $banner->css(); ?>
        </style>

    </head>
    <body>
        <?php echo $banner; ?>
    </body>
</html>
