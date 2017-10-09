<?php
    require "util/dbUtil.php";
    //获取手机号
    $userTel = $_REQUEST["tel"];
    $resultArr = Array();
    //初始化姓名和头像 
    $nikeName = "无名氏";
    $userImgUrl ="user/user.jpeg";
    //随机产生6位数
    $password = rand(100000,999999);
    //如果手机号为空
    if($userTel==""){
        $resultArr["code"]="error";
        $resultArr["msg"]="手机号为空!";
        echo json_encode($resultArr);
        return;
    }
    $selSql ="select 
        id,nikeName,userTel,password,userImgUrl
        from 
        t_user
        where userTel='{$userTel}'
    ";
    //result是数据库中执行SQL语句返回的结果集
    $result = mysqli_query($conn,$selSql);
    //num_rows是结果集中有多少伊奥返回集
    if($result->num_rows>0){
        $resultArr["code"]="error";
        $resultArr["msg"]="手机号已存在!";
        echo json_encode($resultArr);
        return;
    }
    //将用户信息放入数据库中
    $sql="
        insert into t_user
        (nikeName,userTel,password,userImgUrl)
        values
        ('{$nikeName}','{$userTel}','{$password}','{$userImgUrl}')
    ";
    $result = mysqli_query($conn,$sql);


    $resultArr["code"]="success";
    $resultArr["msg"]="注册成功!";
    $resultArr["password"]="$password";
    echo json_encode($resultArr);