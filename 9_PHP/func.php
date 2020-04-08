<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions</title>
</head>
<body>
    <?php
        function sayHi($name, $age){
            echo "Hello, $name! You are $age<br>";
        }

        sayHi("Denis", 32);
        sayHi("Danny", 40);
        sayHi("Michael", 18);
    ?>
</body>
</html>