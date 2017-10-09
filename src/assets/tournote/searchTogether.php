<?php
     require "util/dbUtil.php";
     $destination = $_REQUEST["destination"];
     $startdate = $_REQUEST["startdate"];
     $resultArr=Array();
     $sql="
         select 
             t.id tid,title,tel,qq,weixin,toCity,fromCity,startDate,lastDays,limitNum,intro,coverImg,
             nikeName,userImgUrl
         from 
             t_together t
         left join
             t_user u
         on
             t.userId=u.id
        where  t.startDate='{$startdate}' and  t.toCity='{$destination}'
     ";
     $result=mysqli_query($conn,$sql);
     while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
         $newStr=preg_replace("/<[^>]+>/","",$row["intro"]);
         $tempStr=mb_substr($newStr,0,20,"utf-8");
         $row["intro"]=$tempStr."......";
         array_push($resultArr,$row);
     };
     echo json_encode(array('code'=>'success','data'=>$resultArr));