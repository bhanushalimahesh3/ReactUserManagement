<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class SignupController extends Controller
{
    
	public function store(Request $request)
	{
		$isSaved = User::insert(['email' => $request->email,
								 'name' => $request->name,
								 'password' => Hash::make($request->password)]);

		if($isSaved)
			return response()->json(['status' => 'success', 'message' => 'User created']);

		return response()->json(['status' => 'error', 'message' => 'Something looks wrong!!']);
	}

	public function authenticate(Request $request)
	{
		$credentials = $request->only('email', 'password');

		if (Auth::attempt($credentials)) {
			return response()->json(['status' => 'success', 'message' => 'User verified successfully']);
		}
		
		return response()->json(['status' => 'error', 'message' => 'Email/Password looks wrong']);
	}
}
