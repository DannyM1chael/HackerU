<?php
    include "config.php";
    
    class Querybulder
    {   
        private $queryText = [];
        protected $connection = null;

        public function __construct($host, $user, $password, $db)
        {
            $this->host = $host;
            $this->user = $user;
            $this->password = $password;
            $this->db = $db;
        }

        protected function getConnection(){
            $this->connection = new mysqli($this->host, $this->user, $this->password, $this->db);
            if($this->connection->connect_error){
                echo "Failed connection" . $this->connection->connect_error; 
            }
        }

        public function select(string $table, $fields = '*'){
            $queryText[] = 'SELECT ';
            $queryText[] .= is_array($fields) ? implode(',', $fields) : $fields;
            $queryText[] .= 'FROM ' . $table;
            return $queryText;
        }

        public function insert(){
            
        }
        public function delete(string $table){
            $queryText[] = 'DELETE FROM ' . $table;
            return $queryText;
        }

        public function update(){
            
        }

        public function where($where = []){
            $queryText[] = '';
            if(is_array($where) && !empty($where)){
                $whereQuery = [];
                foreach($where as $field=> $value){
                    $whereQuery[] = $field . '=' . $value;
                }
                if(!empty($whereQuery)){
                    $queryText[] .= 'WHERE ' . implode('AND ', $whereQuery);
                }
            }
            return $queryText;
        }

        public function getText(){
            echo 'getText';
        }
        public function execute(){
            echo $this->getText();
        }
    }