<?php
    require 'util/dbUtil.php';
    $tid = $_REQUEST["tid"];
    $sql = "
        select 
            t.id tid,title,content,contentImg,type,publishDate,
            nikeName,userImgUrl
        from
            t_tour t
        left join
            t_user u
        on 
            t.userId=u.id
        where
            t.id = '{$tid}'

    ";
    $result = mysqli_query($conn,$sql);
    $tour = mysqli_fetch_array($result,MYSQLI_ASSOC);
    echo json_encode(array('code'=>'success',"data"=> $tour));