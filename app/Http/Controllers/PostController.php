<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $post = Post::paginate(10);
        return successResponse([], $post);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PostRequest $request)
    {
        $validated = $request->validated();
        $validated['user_id'] = auth()->id();
        try {
            Post::create($validated);
        }catch (\Exception $exception){
            return errorResponse($exception->getMessage());
        }
        return successResponse('Post created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return $post->load('user');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(PostRequest $request, Post $post)
    {
        $validated = $request->validated();
        $validated['user_id'] = auth()->id();
        try {
            $post->update($validated);
        }catch (\Exception $exception){
            return errorResponse();
        }
        return successResponse('Post updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        try {
            $post->delete();
        }catch (\Exception $exception){
            return errorResponse();
        }
        return successResponse('Post deleted successfully');
    }
}
