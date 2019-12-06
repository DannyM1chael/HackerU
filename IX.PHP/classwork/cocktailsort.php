<?php

function cocktailSort($array) {
    $left = 0;
    $right = count($array) - 1;

    do {
        for ($i=$left; $i < $right; $i++) { 
            if ($array[$i] > $array[$i+1]) {
                list($array[$i], $array[$i+1]) = array($array[$i+1], $array[$i]);
            }
        }
        $right -= 1;
        for ($i=$right; $i > $left; $i--) { 
            if ($array[$i] < $array[$i-1]) {
                list($array[$i], $array[$i-1]) = array($array[$i-1], $array[$i]);
            }
        }
        $left += 1;
    } while ($left <= $right);
}

$a = [];
for ($i = 0; $i < 10; $i++) {
    $a = random_int(0, 100);
}
print_r($a);
$a = cocktailSort($a);
print_r($a);