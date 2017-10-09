<?php
     require "util/dbUtil.php";
     session_start();
     $user = $_SESSION["user"];
     $userId = $user["id"];
     if($user ==""){
         echo json_encode(array('code'=>'error','msg'=>'未登录'));
         return;
     }

     $title = $_REQUEST["title"];
     $tel = $_REQUEST["tel"];
     $qq = $_REQUEST["qq"];
     $weixin = $_REQUEST["weixin"];
     $toCity = $_REQUEST["toCity"];
     $fromCity = $_REQUEST["fromCity"];
     $startDate = $_REQUEST["startDate"];
     $lastDays = $_REQUEST["lastDays"];
     $limitNum = $_REQUEST["limitNum"];
     $intro = $_REQUEST["intro"];
     $coverImg = $_REQUEST["coverImg"]; 
     $sql = "
         insert into t_together
         (title,tel,qq,weixin,toCity,fromCity,startDate,lastDays,limitNum,intro,coverImg,userId)
         values
         ('{$title}','{$tel}','{$qq}','{$weixin}','{$toCity}','{$fromCity}','{$startDate}','{$lastDays}','{$limitNum}','{$intro}','{$coverImg}','{$userId}')
     ";
    //  echo  $sql ;
     $result = mysqli_query($conn,$sql);
     echo json_encode(array('code'=>'success','msg'=>'发布结伴成功'));
     