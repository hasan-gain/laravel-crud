<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::paginate(10);
        return successResponse([], $user);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $validated = $request->validated();
        $validated['password'] = bcrypt($validated['password']);
        $user = User::create($validated);
        return successResponse('User created.', $user);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return $user;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        $validated = array_filter($request->validated(), 'strlen');
        try {
            $user->update($validated);
        }catch (\Exception $exception){
            return errorResponse();
        }
        return successResponse('User updated successfully', $user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        try {
            $user->delete();
        }catch (\Exception $exception){
            return errorResponse();
        }
        return successResponse('User deleted successfully');
    }

    public function me()
    {
        return auth()->user();
    }
}
