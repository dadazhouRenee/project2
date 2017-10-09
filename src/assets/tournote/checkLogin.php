<?php
    // 校验用户是否登录
    session_start();
    $user = $_SESSION["user"];
    $resultArr = Array();
    if($user == ""){
        $resultArr["status"]= false;
        echo json_encode($resultArr);
        return;
    }
    $resultArr["status"]= true;
    $resultArr["user"]= $user;
    echo json_encode($resultArr);