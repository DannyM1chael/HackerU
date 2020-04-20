<?php
    
    class Querybulder
    {   
        protected $getText = [];
        protected $values = [];
        protected $query = "";
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

        public function select(...$args){
           $this->query = "SELECT " . implode(", ", $args);
           return $this;
        }

        public function insert(string $table, array $columns = []){
            $columnString = "";
            if(is_array($columns)){
                $columnString = "(" . implode(", ", $columns) . ")";
            }
            $this->query = "INSERT INTO $table $columnString ";
            return $this;
        }

        public function values(...$args){
            $string = " VALUES (";
            for($i = 0; $i < count($args); $i++){
                $string .= "?, ";
                array_push($this->values, $args[$i]);
            }
            $string = rtrim($string, ", ") .")";
            $this->query .= $string;
            return $this;
        }

        public function update(string $table, array $columns = [], array $newData = []){
            $this-> query = "UPDATE $table SET ";
            $string = "";
            for($i = 0; $i < count($columns); $i++){
                $string .= "$columns[$i] = $newData[$i], ";
            }
            $this->query .= rtrim($string, ", ");
            return $this;
        }
        
        public function delete(string $table){
            $this->query = "DELETE FROM $table";
            return $this;
        }

        public function from(string $table){
            $this->query .= " FROM $table";
            return $this;
        }

        public function where($someValue, string $sign = "", $anotherValue = ""){
            $this->query .= " WHERE $someValue $sign $anotherValue ";
            return $this;
        }

        public function and($someValue, string $sign = "", $anotherValue = ""){
            $this->query .= " AND $someValue $sign $anotherValue ";
            return $this;
        }

        public function or($someValue, string $sign = "", $anotherValue = ""){
            $this->query .= " OR $someValue $sign $anotherValue ";
            return $this;
        }

        public function orderBy(...$args){
            $this->query .= " ORDER BY";
            for($i = 0; $i <count($args); $i++){
                if(preg_match("/^(desc|asc$/i", $args[$i])){
                    $this->query .= " $args[$i], ";
                }else {
                    $this->query .= " $args[$i] ";
                }
            }
            $this->query = rtrim($this->query, ", ");
            return $this;
        }

        public function limit(int $value, int $value2 = 0){
            if($value2 === 0){
                $this->query .= " LIMIT $value";
                return $this;
            }else {
                $this->query .= " LIMIT $value, $value2";
                return $this;
            }
        }

        public function in(...$args){
            $this->query .= " IN (" . implode(", ", $args) . ")";
            return $this;
        }

        public function getText(){
        }

        public function execute(){
            $stmt = $this -> connection->prepare($this->query);
        }
    }