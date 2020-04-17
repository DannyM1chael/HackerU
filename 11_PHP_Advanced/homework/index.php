<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Querybuilder</title>
</head>
<body>
    <?php include "config.php"; ?>
    <?php 
        include_once "querybuilder.php";
        $queryBuilder = new Querybulder($host, $user, $password, $db);

        echo '<pre>';
        print_r($queryBuilder->select('Students', '*'));
        print_r($queryBuilder->delete('Students', 'id = 1'));
        print_r($queryBuilder->getText());
        print_r($queryBuilder->execute());
        echo '</pre>';
    ?>
</body>
</html>