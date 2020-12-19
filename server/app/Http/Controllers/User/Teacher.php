<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Teachers;
use Illuminate\Support\Facades\DB;

class Teacher extends Controller
{

  public function show(){
    return response()->json(Teachers::all());
}
}
