<?php
    require "util/dbUtil.php";
    session_start();
    $telPhone = $_REQUEST["telPhone"];
    $password = $_REQUEST["password"];
    $resultArr = Array();
    if($telPhone==""){
        $resultArr["code"]="error1";
        $resultArr["msg"]="手机号为空!";
        echo json_encode($resultArr);
        return;
    }
    $selSql ="select 
        id,nikeName,userTel,password,userImgUrl
        from 
        t_user
        where userTel='{$telPhone}'
    ";
    $result = mysqli_query($conn,$selSql);
    if($result->num_rows==0){
        $resultArr["code"]="error2";
        $resultArr["msg"]="用户名不存在!请先注册";
        echo json_encode($resultArr);
        return; 
    }



    $selSql ="select 
        id,nikeName,userTel,password,userImgUrl
        from 
        t_user
        where userTel='{$telPhone}' and password='{$password}'
    "; 
    $result = mysqli_query($conn,$selSql); 
    if($result->num_rows==0){
        
        $resultArr["code"]="error3";
        $resultArr["msg"]="密码错误!";
        echo json_encode($resultArr);
        return; 
    }

    $user = mysqli_fetch_array($result,MYSQL_ASSOC);
    $_SESSION["user"]=$user;

    $resultArr["code"]="success";
    $resultArr["msg"]="登录成功!";
    echo json_encode($resultArr);
    