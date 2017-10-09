<?php
    session_start();
    $user = $_SESSION["user"];
    $userId = $user["id"];
    $content = $_REQUEST["content"];
    $tid = $_REQUEST["tid"];
    require 'util/dbUtil.php';
    $sql = "
        insert into t_comment
            (content,pubDate,userId,tourId)
        values
            ('{$content}',now(),'{$userId}','{$tid}')
    ";
    // echo $sql;
    mysqli_query($conn,$sql);
    
    echo json_encode(array('code'=>'success','msg'=>'添加成功'));