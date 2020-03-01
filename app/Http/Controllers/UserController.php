<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('id', '!=', \Auth::user()->id)
                            ->get();

       if($users->isEmpty())
            return response()->json(['status' => 'error', 'message' => 'No users found']);
            
	    return response()->json(['status' => 'success', 'message' => 'User fetched successfully', 'data' => $users]);            
        
    }

    public function getProfile(Request $request, $id = null)
    {
        $userId = $id ?? Auth::user()->id;
        
        if($userDetails = User::where('id', $userId)->first())
            return response()
                ->json(['status' => 'success', 'message' => 'User fetched successfully', 'data' => ['user' => $userDetails]]); 
        
        return response()->json(['status' => 'error', 'message' => 'No user found']);         

    }

    public function delete(Request $request, $id = null)
    {
        if(is_null($id))
            return response()->json(['status' => 'error', 'message' => 'No user found']); 
        
        if(User::where('id', $id)->delete())
            return response()
                ->json(['status' => 'success', 'message' => 'User deleted successfully']); 
        
        return response()->json(['status' => 'error', 'message' => 'No user found']);         

    }
}
