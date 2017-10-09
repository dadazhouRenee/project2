<?php
    require "util/dbUtil.php";
    session_start();
    $user=$_SESSION["user"];
    $userId=$user["id"]; 
    if($user==''){
        echo json_encode(array('code'=>'error','msg'=>'该用户还未进行登录，请登录'));
        return;
    };

    $tid=$_REQUEST["tid"];
    $male=$_REQUEST["male"];
    $female=$_REQUEST["female"];
    $number=$_REQUEST["number"];
    $tel=$_REQUEST["tel"];
    
    $sql ="
        insert into  t_together_join 
            (userId,togetherId)
        values
            ('{$userId}','{$tid}')   
    ";
    $result=mysqli_query($conn,$sql);
    echo json_encode(array('code'=>'success','msg'=>'结伴报名成功'));