<?php
    require "util/dbUtil.php";
    session_start();
    $user = $_SESSION["user"];
    if($user ==""){
        echo json_encode(array('code'=>'error','msg'=>'未登录'));
        return;
    }
    $title = $_REQUEST["title"];
    $type = $_REQUEST["type"];
    $content = $_REQUEST["content"];
    $contentImg = $_REQUEST["contentImg"];
    $userId = $user["id"];
    $sql = "
        insert into t_tour
        (title,content,contentImg,type,publishDate,userId)
        values
        ('{$title}','{$content}','{$contentImg}','{$type}',now(),'{$userId}')
    ";
    $result = mysqli_query($conn,$sql);
    echo json_encode(array('code'=>'success','msg'=>'发布成功'));
    
    
    