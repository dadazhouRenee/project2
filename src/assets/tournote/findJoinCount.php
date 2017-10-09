<?php
    require "util/dbUtil.php";
    $resultArr=Array();
    session_start();
    $tid = $_REQUEST["tid"];
    $user = $_SESSION["user"];
    $userId = $user["id"];
    if($user ==""){
        echo json_encode(array('code'=>'error','msg'=>'未登录'));
        return;
    }
    $sql = "
        select 
            count(*) tc
        from 
            t_together_join t
        where 
            togetherId='{$tid}'
        group by
            togetherId
    ";
    $result = mysqli_query($conn,$sql);
    $count = mysqli_fetch_array($result,MYSQL_ASSOC);
    echo json_encode(array('code'=>'success','data'=>$count));