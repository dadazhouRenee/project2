<?php
    require "util/dbUtil.php";
    $tid = $_REQUEST["tid"];
    session_start();
    $user=$_SESSION["user"];
    $userId=$user["id"];
    if($user==''){
        echo json_encode(array('code'=>'error','msg'=>'该用户还未进行登录，请登录'));
        return;
    };

    $sql = "
        select 
            t.id tid,title,tel,qq,weixin,toCity,fromCity,startDate,lastDays,limitNum,intro,coverImg,
            nikeName,userImgUrl
        from 
            t_together t
        left join
            t_user u
        on
            t.userId=u.id
        where
            t.id='{$tid}'
    ";
    $result = mysqli_query($conn,$sql);
    $together = mysqli_fetch_array($result,MYSQLI_ASSOC);
    echo json_encode( array('code'=>'success','data'=>$together) );