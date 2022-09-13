<?php

namespace App\Http\Controllers\Restify\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class RegisterController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $request->validate([
            'email' => ['required', 'email', 'max:255', 'unique:' . Config::get('restify.auth.table', 'users')],
            'phone' => ['required', 'max:11'],
            'password' => ['required', 'confirmed'],
        ]);

        $user = User::forceCreate([
            'username' => $request->input('username'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'password' => Hash::make($request->input('password')),
        ]);

        return data([
            'user' => $user,
            'token' => $user->createToken('login')
        ]);
    }
}
