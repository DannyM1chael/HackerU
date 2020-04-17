<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tree</title>
</head>
<body>
    <div>
        <?php 
            $path = $_GET["path"];
            $dir = glob($path . '/*');
            echo "<pre>";
            echo print_r($dir);
            echo "</pre>"
        ?>
    </div>
</body>
</html>