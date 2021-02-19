<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\DB;

class Register extends Controller
{
    /**
     *@params name,email,class, subject , role, stream, password
     *@return success: User::all
     *@return error: ["message"=>"Error occured"]
     */
  public function index(Request $request){
    $name = $request->name;
    $email = $request->email;
    $grade = $request->grade;
    $role = $request->role;
    $stream = $request->stream;
    $password = $request->password;

    $newUser = User::create([
      "name"=>$name,
      "email"=>$email,
      "class"=>$grade,
    "role"=>$role,
    "faculty"=>$stream,
    "password"=>$password
    ]);
    try{
    $savedUser= $newUser->save();
    return ["message"=>"Saved Successfully"];
    }catch(Exception $e){
      return $e->getMessage();
    }



  



    return "hello";

  }
}
