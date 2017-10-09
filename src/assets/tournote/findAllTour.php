<?php
     require 'util/dbUtil.php';
     $sql = "
        select 
            t.id tid,title,content,contentImg,type,publishDate,
            nikeName,userImgUrl
        from t_tour t
        left join 
            t_user u
        on 
            t.userId = u.id
     ";
     $result = mysqli_query($conn,$sql);
     $resultArr = Array();
     while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
        $newStr = preg_replace("/<[^>]+>|&nbsp;/","",$row["content"]);
        //截取部分数据
        $tempStr = mb_substr($newStr,0,50,"utf-8");//指定字符集
        $row["content"] = $tempStr."...";
        array_push($resultArr,$row);
     }
     echo json_encode(array('code'=>"success","data"=>$resultArr));