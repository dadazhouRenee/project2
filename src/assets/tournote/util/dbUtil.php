<?php 
    define("HOST","127.0.0.1");
    define("USERNAME","root");
    define("PASSWORD","");
    define("DBNAME","tournote");
    define("MYSQL_CHARSET","utf8");
    $conn = mysqli_connect(HOST,USERNAME,PASSWORD,DBNAME);
    if (!$conn){
        $arr = array();
        $arr["code"] = "error";
        $arr["error"] = mysqli_connect_error();
        echo json_encode($arr);
        return;
    }
    mysqli_query($conn,"set names '".MYSQL_CHARSET."'");