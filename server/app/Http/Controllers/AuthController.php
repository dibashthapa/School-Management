<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => 'login']);
    }

    public function login(Request $request): \Illuminate\Http\JsonResponse
    {
        $credentials = request(['email', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            "message" => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60,
                'user' => auth()->user()
            ]
        ]);
    }

    public function me(): \Illuminate\Http\JsonResponse
    {
        return response()->json(auth()->user());
    }

    public function logout(): \Illuminate\Http\JsonResponse
    {
        auth()->logout();
        return response()->json(['message' => 'logout successfully']);
    }
}
