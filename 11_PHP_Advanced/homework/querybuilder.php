<?php
    include "config.php";
    
    class Querybulder
    {   
        private $queryText = [];
        private $result;
        protected $connection = null;

        public function __construct($host, $user, $password, $db, $prefix = null)
        {
            $this->host = $host;
            $this->user = $user;
            $this->password = $password;
            $this->db = $db;
            $this->prefix = (!is_null($prefix)) ? $prefix : '';
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
            $queryText[] .= ' FROM ' . $table;
            return implode('', $queryText);
        }

        public function insert(string $table, array $data){
            $queryText[] = 'INSERT INTO ' . $table;
            $insertQueryFields = [];
            $insertQueryValues = [];
            foreach($data as $field => $value){
                $insertQueryFields[] = $field;
                $insertQueryValues[] = $value;
            }
            $queryText[] .= '(' . implode(',', $insertQueryFields) . ') VALUES (' . implode(',', $insertQueryValues) . ')';
            return implode('', $queryText);
        }
        public function delete(string $table){
            $queryText[] = 'DELETE FROM ' . $table;
            return implode('', $queryText);
        }

        public function update(string $table, array $data){
            $queryText[] = 'UPDATE ' . $table . ' SET ';
            $updateData = [];
            foreach($data as $field=>$value){
                $updateData[] = $field . '=' . $value; 
            }
            $queryText[] .= implode(',', $updateData);
            return implode('', $queryText);
        }

        public function where($where = []){
            $queryText[] = '';
            $whereQuery = [];
            foreach($where as $field=> $value){
                $whereQuery[] = $field . '=' . $value;
            }
            $queryText[] .= 'WHERE ' . implode(',', $whereQuery);
            return implode('', $queryText);
        }

        public function getText(){
        }
        public function execute(){
            echo $this->getText();
        }
    }