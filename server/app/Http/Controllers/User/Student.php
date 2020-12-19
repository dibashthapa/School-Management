<?php

namespace App\Http\Controllers\User;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Models\Students;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class Student extends Controller
{
    //

  public function show(Request $request){
    return response()->json(Students::all());
  }

  public function create(Request $request){

    $validator = Validator::make($request->all(), [
      "name" => "required",
      "grade" =>"required",
      "stream"=>"required"
    ]);

    if ($validator->fails()){
      return response()->json(["errors"=>$validator->errors()]);
    }
  
    try{
    $newStudent = new Students([
      "name"=>$request->name , 
      "grade"=>$request->grade,
      "stream"=>$request->stream
    ]);
    $newStudent->save();
    return response()->json(["message"=>"Saved Successfully"]);
    }catch(Exception $e){
    return response()->json(["error"=>$e->getMessage()]);
    }
    
  }
}
