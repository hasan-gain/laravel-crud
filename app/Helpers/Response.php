<?php

 function successResponse($message = [], $result = [])
{
    $response = [
        'success' => true,
        'data'    => $result,
        'message' => $message,
    ];


    return response()->json($response, 200);
}

function errorResponse(string $message = 'Something went wrong!', $errors = null, array $data = null, int $statusCode = 422): \Illuminate\Http\JsonResponse
{
    return response()->json(
        array_filter([
                'success' => false,
                'errors' => $errors,
                'message' => $message,
                'data' => $data
            ]
            , static function ($value){
                return $value!== null;
            }), $statusCode);
}
