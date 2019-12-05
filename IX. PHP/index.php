<?php

function bubbleSort($array)
{
    for (;;) {
        $swapCount = 0;
        for ($i=0; $i < count($array); $i++) { 
            if (!isset($array[$i+1])) { 
                break;
            }
            if ($array[$i] > $array[$i+1]) {
                $buffer = $array[$i];
                $array[$i] = $array[$i+1];
                $array[$i+1] = $buffer;
                $swapCount++;
            }    
        }
        if ($swapCount == 0) {
            return $array;
        }   
    }
}

$a = [];
for ($i = 0; $i < 10; $i++) {
    $a = random_int(0, 100);
}
print_r($a);
$a = bubbleSort($a);
print_r($a);