<?php
    ini_set('date.timezone','Asia/Shanghai');

    if($_FILES["uploadedfile"]==""){
        echo json_encode(array('code' => 'error','msg' => '无上传文件'));
        return;
    }
    if($_FILES["uploadedfile"]["error"] > 0){
        echo json_encode(array('code' => 'error','msg' => $_FILES["uploadedfile"]["error"]));
        return;
    }

    $tempUrl = $_FILES["uploadedfile"]["tmp_name"];

    $newFile =  "uploads/".strtotime("U").".".end(explode(".",$_FILES["uploadedfile"]["name"]));
    $baseUrl = "img/";
    move_uploaded_file($tempUrl,$baseUrl.$newFile);
    echo json_encode(array('code' => 'success',"imgUrl" => $newFile));