<?php

ini_set('display errors', 1);
error_reporting(E_ALL);

class a {
    public $startTime = 0;
    public $endTime = 0;
    public function __construct()
    {
        $this->startTime = time();
        echo 'I am constructor of' .get_class($this);
    }
    public function loadFunc()
    {
        $int = random_int(0, PHP_INT_MAX);
        for ($i = 0; $i < $int; $i++){
            sha1($i);
        }
        $this->endTime = time();
    }
}

$a = new a();