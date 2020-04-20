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

        $query->select("column1, column2")
                ->from("table_name")
                ->where("id", "=", 1)
                ->and("status", "=", 2)
                ->limit(10)
                ->orderBy("id asc")
                ->getText();

        $query->insert("Students")
                ->values("Denis Mikhalev")
                ->getText();

        $query->update("Students", ["FirstName","LastName"], ["Denis", "Mikhalev"])
                ->getText();

        $query->delete("table_name")
                ->where("id", "=", 1)
                ->and("status", "=", 2)
                ->getText();
    ?>
</body>
</html>