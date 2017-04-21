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
    </head>
    <body>

        <?php

        require "vendor/autoload.php";

        $banner = new UConn\Banner\Banner();

        $banner->name = "University Communications";

        echo $banner;

        ?>


    </body>
</html>
