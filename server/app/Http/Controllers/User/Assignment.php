<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Assignments;

class Assignment extends Controller
{
    public function get(){
      $assignment = Assignments::all();
      return json_encode($assignment);
    }
}
