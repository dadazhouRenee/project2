<?php
    require "util/dbUtil.php";
    // session_start();
    // $use=$_SESSION["user"];
    // if($user==''){
    //     echo json_encode(array('code'=>'error','msg'=>'该用户还未进行登录，请登录'));
    //     return;
    // }
    $authcode=rand(1000,9999);
    echo json_encode( array('code'=>'success','data'=>$authcode) );