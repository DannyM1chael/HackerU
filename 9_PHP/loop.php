<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop</title>
</head>
<body>
    <?php
        $index = 1;
        while($index <= 5){
            echo "$index <br>";
            $index++;
        }
        
        for ($i = 1; $i <= 5; $i++) { 
            echo "$i <br>";
        }

        $luckyNumbers = array(4, 8, 7, 3, 48, 353);
        for ($i = 0; $i < count($luckyNumbers); $i++) { 
            echo "$luckyNumbers[$i] <br>";
        }
    ?>
</body>
</html>