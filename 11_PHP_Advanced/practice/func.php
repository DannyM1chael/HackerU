<?php

class Treeview
{
    private $root;

    public function __construct($path)
    {
        $this->root = $path;
    }

    public function buildTree()
    {
        return $this->createStructure($this->root, true);
    }

    private function createStructure($directory, $root)
    {
        $structure = $root ? '<ul class = "treeview">' : '<ul>';

        $nodes = $this->getNodes($directory);
        foreach($nodes as $node){
            $path = $directory . '/' . $node;
            if(is_dir($path)){
                $structure .= '<li class="treeview-folder">';
                $structure .= '<span>' . $node . '</span>';
                $structure .= self::createStructure($path, false);
                $structure .= '</li>';
            } else {
                $path = str_replace($this->root . '/', null, $path);
                $structure .= '<li class="treeview-file">';
                $structure .= '<a href="#?' . $path . '">' . $node . '</a>';
                $structure .= '</li>';
            }
        }
        return $structure . '</ul>';
    }

    private function getNodes($directory = null)
    {
        $folders = [];
        $files = [];

        $nodes = scandir($directory);
        foreach($nodes as $node){
            if(!$this->exclude($node)){
                if(is_dir($directory . '/' . $node)){
                    $folders[] = $node;
                } else {
                    $files[] = $node;
                }
            }
        }

        return array_merge($folders, $files);
    }

    private function exclude($filename)
    {
        return in_array($filename, ['.', '..', 'index.php', '.htaccess', '.DS_Store']);
    }
}

$treeview = new Treeview('practice');
echo $treeview->buildTree();