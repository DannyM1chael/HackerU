<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Object Functions</title>
</head>
<body>
    <?php
        class Student {
            var $name;
            var $major;
            var $gpa;

            function __construct($name, $major, $gpa)
            {
                $this->name = $name;
                $this->major = $major;
                $this->gpa = $gpa;
            }
            function hasHonors()
            {
                if($this->gpa >= 3.5){
                    return "true <br>";
                }
                return "false <br>";
            }
        }

        $student1 = new Student("Jim", "Business", 2.8);
        $student2 = new Student("Pam", "Art", 3.6);

        echo $student1->hasHonors();
        echo $student2->hasHonors();
    ?>
</body>
</html>