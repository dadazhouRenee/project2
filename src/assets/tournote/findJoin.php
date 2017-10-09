<?php
    require "util/dbUtil.php";
    $resultArr=Array();

    $tid=$_REQUEST["tid"];

    $sql="
        select 
            t.id,userId,togetherId,
            nikeName,userImgUrl
        from
            t_together_join t
        left join 
            t_user u
        on
            t.userId=u.id
        where 
            togetherId = '{$tid}'
    ";
    $result=mysqli_query($conn,$sql);
    while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
        array_push($resultArr,$row);
    }
    echo json_encode(array('code' => "success", "data" => $resultArr ));
