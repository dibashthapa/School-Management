<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Routine;
class Routines extends Controller
{
  public function get() {
    $routines = Routine::all();
    return json_encode($routines);
  }

  public function create(Request $request){
    $newRoutine = new Routine([
      "class"=>$request->class,
      "section"=>$request->section,
      "day"=>$request->day,
      "subject"=>$request->subject,
      "teacher"=>$request->teacher
    ]);

    $newRoutine->save();
  }
}
