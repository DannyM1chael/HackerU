<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <form action="calc.php" method="post">
        First number: <input type="number" step="0.1" name="num1" placeholder="number 1"><br>
        Operation: <input type="text" name="op" placeholder="+, -, /, *"><br>
        Second number: <input type="number" step="0.1" name="num2" placeholder="number 2"><br>
        <input type="submit">
    </form><br>
    <?php
        $num1 = $_POST["num1"];
        $num2 = $_POST["num2"];
        $op = $_POST["op"];

        if($op == "+"){
            echo $num1 + $num2;
        }elseif($op == "-"){
            echo $num1 - $num2;
        }elseif($op == "/"){
            echo $num1 / $num2;
        }elseif($op == "*"){
            echo $num1 * $num2;
        }else{
            echo "Choose operation +, -, /, *";
        }
    ?>
    
</body>
</html>