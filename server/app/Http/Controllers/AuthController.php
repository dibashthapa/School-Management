<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

  public function __construct()
  {
   $this->middleware('auth:api', ['except' =>'login']); 
  }
  public function login(Request $request){
    $credentials=request(['email','password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
  }

 protected function respondWithToken($token)
    {
        return response()->json([
          "message"=>[
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=>auth()->user()
          ]
        ]);
    }

  public function me(){
    return response()->json(auth()->user());
  }

  public function logout(){
    auth()->logout();
    return response()->json(['message'=>'logout successfully']);
  }
}
