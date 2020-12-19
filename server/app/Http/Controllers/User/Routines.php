<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Routine;
use Symfony\Component\Routing\Route;

class Routines extends Controller
{
  public function get() {
    $routines = Routine::all();
    return json_encode($routines);
  }
}
