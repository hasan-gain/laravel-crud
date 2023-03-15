<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use stdClass;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|string|min:8|max:20|confirmed',
        ]);

        if($validator->fails()){
            return errorResponse('Validation Error', $validator->errors());
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        try {
            User::create($input);
        }catch (\Exception $exception){
            return errorResponse();
        }

        return successResponse('User registered successfully');
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|exists:users',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return errorResponse('Validation failed', $validator->errors());
        }
        try {
            $user = User::where('email', $validator->valid()['email'])->first();
            if (!$user) {
                $object = new stdClass;
                $object->email = 'Email is incorrect!';
                return response()->json(['success' => false, 'errors' => $object], 422);
            }
            if (!Hash::check($validator->valid()['password'], $user->password)) {
                $object = new stdClass;
                $object->password = 'Wrong Password';
                return response()->json(['success' => false, 'errors' => $object], 422);
            }
            $data = [
                'access_token' => $user->createToken('authToken')->plainTextToken,
                'token_type' => 'Bearer',
                'user' =>$user
            ];
        } catch (\Exception $error) {
            return errorResponse('Exception in login');
        }
        return successResponse('Logged in successfully', $data); //default status 200
    }

    public function logout(Request $request)
    {
        try {
            $request->user()->currentAccessToken()->delete();
        }catch (\Exception $exception){
            return errorResponse();
        }
        return successResponse('Logout successfully');
    }
}
