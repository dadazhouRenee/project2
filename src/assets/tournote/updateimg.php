<?php
    require "util/dbUtil.php";
    session_start();
    $user = $_SESSION["user"];
    if($user ==""){
        echo json_encode(array('code'=>'error','msg'=>'未登录'));
        return;
    }
    $userImg = $_REQUEST["userImg"];
    $userId = $user["id"];
    $sql = "
        update t_user 
        set userImgUrl='{$userImg}'
        where id='{$userId}'
    "; 
    $result = mysqli_query($conn,$sql);

    //查询当前用户
    $selSql ="select 
    id,nikeName,userTel,password,userImgUrl
    from 
    t_user
    where id='{$userId}'
    "; 
    $result = mysqli_query($conn,$selSql); 
    $user = mysqli_fetch_array($result,MYSQL_ASSOC);
    $_SESSION["user"]=$user;
    echo json_encode(array('code'=>'success','msg'=>'上传成功'));