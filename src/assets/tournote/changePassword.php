<?php
    require "util/dbUtil.php";
    session_start();
    $user=$_SESSION["user"];
    $userId = $user["id"];
    $password=$_REQUEST["password"];
    $repassword=$_REQUEST["repassword"];
    if($user==''){
        echo json_encode(array('code'=>'error','msg'=>'该用户还未进行登录，请登录'));
        return;
    };
    $sql="
    update 
        t_user
    set
        password='{$password}'
    where
        id= '{$userId}'
    ";
    // echo $sql;
    $result=mysqli_query($conn,$sql);
    $selSql ="select 
    id,nikeName,userTel,password,userImgUrl
    from 
    t_user
    where id='{$userId}'
    "; 
    $result = mysqli_query($conn,$selSql); 
    $user = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $_SESSION["user"]=$user;
    echo json_encode(array('code'=>'success','msg'=>'密码修改成功'));