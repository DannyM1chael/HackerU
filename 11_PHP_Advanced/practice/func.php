<?php

define('SITE_URL',"localhost");

function listFolderFiles($dir){
   $fileFolderList = scandir($dir);
   echo '<ul>';
   foreach($fileFolderList as $fileFolder){
       if($fileFolder != '.' && $fileFolder != '..'){
           if(!is_dir($dir.'/'.$fileFolder)){
               echo '<li><a target="_blank" href="'.SITE_URL.'/'.ltrim($dir.'/'.$fileFolder,'./').'">'.$fileFolder.'</a>';
           } else {
               echo '<li>'.$fileFolder;
           }
           if(is_dir($dir.'/'.$fileFolder)) listFolderFiles($dir.'/'.$fileFolder);
               echo '</li>';
           }
   }
   echo '</ul>';
}
listFolderFiles('uploads/');