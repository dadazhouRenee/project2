<?php
    require "util/dbUtil.php";
    session_start();
    $user = $_SESSION["user"];
    if($user ==""){
        echo json_encode(array('code'=>'error','msg'=>'未登录'));
        return;
    }
    $nikeName = $_REQUEST["nikeName"];
    $userId = $user["id"];
    $sql = "
        update t_user 
        set nikeName='{$nikeName}'
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
    echo json_encode(array('code'=>'success','msg'=>'修改成功'));