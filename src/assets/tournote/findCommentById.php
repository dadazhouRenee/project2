<?php
    $tid = $_REQUEST["tid"];
    require 'util/dbUtil.php';
    $sql = "
        select 
            t.id,content,pubDate,userId,tourId,
            nikeName,userImgUrl
        from
            t_comment t
        left join 
            t_user u
        on t.userId = u.id
        where
            tourId='{$tid}'
        order by pubDate desc
    ";
    $result = mysqli_query($conn,$sql);
    $resultArr=Array();
    while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
        array_push($resultArr,$row);
    }
    echo json_encode(array('code'=>"success",'data'=>$resultArr));