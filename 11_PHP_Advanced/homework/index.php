<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Querybuilder</title>
</head>
<body>
    <?php 
        include_once "querybuilder.php";
        include "config.php";
        $query = new Querybulder($host, $user, $password, $db);

        $query->select("*")->execute();

    ?>
</body>
</html>