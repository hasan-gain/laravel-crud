<?php

use App\Http\Resources\PaginationResource;

function successResponse($message = [], $result = [])
{
    $response = [
        'success' => true,
        'data'    => $result,
        'message' => $message,
    ];


    return response()->json(array_filter($response), 200);
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

function paginateResponse($data, $resource_class_name,$variable_name='data' ,int $perPage = 20, int $statusCode = 200): \Illuminate\Http\JsonResponse
{
    return response()->json(
        array_filter([
                'success'=>true,
                'data' => new PaginationResource($data->paginate($perPage), $resource_class_name, $variable_name)
            ]
        ), $statusCode);
}
