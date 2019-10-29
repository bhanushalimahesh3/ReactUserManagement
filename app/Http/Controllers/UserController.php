<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('id', '!=', \Auth::user()->id)
                            ->get();

       if($users->isEmpty())
            return response()->json(['status' => 'error', 'message' => 'Something looks wrong!!']);
            
	    return response()->json(['status' => 'success', 'message' => 'User fetched successfully', 'data' => $users]);            
        
    }
}
