<?php
//1.count
$array = array(10, 'fox', 'bear', 'deer', 'cat', 100, array('blue', 'red'));
echo count($array) . '<br>';
echo count($array, COUNT_RECURSIVE) . '<br>';

//2.is_array
if (is_array($array)){
    for ($i=0; $i < count($array); $i++){
    echo $array[$i] . '<br>';
    }
} else {
    echo "can't loop through the var";
};

//3.substr
$text = "Hello World";
$extract = substr($text, 1, 5);
echo $extract . '<br>';

//4.in_array
if(in_array(100, $array, true)){
    echo "value is found" . '<br>';
};

//5.explode
$colors = "red, yellow, blue, pink";
$names = "Bob|Pam|Oscar|Alex";

$color_array = explode(", ", $colors);
echo "<pre>";
print_r($color_array);
echo "</pre>";

//6.str_replace
$bodytag = str_replace("%body%", "red", "<body text='%body%'></body>");
echo $bodytag;

//7.implode
$gluedarray = implode("_", $array);
echo $gluedarray . "<br>";

//8.strlen
echo strlen($gluedarray) . "<br>";

//9.array_merge
$defines = array(10, 12, 15);
$mergedarray = array_merge($array, $defines);
echo "<pre>";
print_r($mergedarray);
echo "</pre>";

//10.strpos
echo strpos($colors, "blue");
    
