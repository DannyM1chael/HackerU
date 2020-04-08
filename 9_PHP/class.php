<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Class</title>
</head>
<body>
    <?php
        class Book {
            var $title;
            var $author;
            var $pages;

            function __construct($aTitle, $aAuthor, $aPages)
            {
                $this->title = $aTitle;
                $this->author = $aAuthor;
                $this->pages = $aPages;
            }
        }

        // $book1 = new Book();
        // $book1->title = "Harry Potter";
        // $book1->author = "JK Rowling";
        // $book1->pages = 400;

        $book2 = new Book("Lord of the Rings", "Tolkien", "700");
        echo $book2->title;
    ?>
</body>
</html>