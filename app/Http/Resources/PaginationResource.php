<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PaginationResource extends ResourceCollection
{
    public function __construct($resource, $resource_class, $variable_name)
    {
        $this->collects = $resource_class;
        $this->variable = $variable_name;
        parent::__construct($resource);
    }

    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            $this->variable => $this->collection,
            'links' => [
                'base' => $this->url(1),
                'prev' => $this->previousPageUrl(),
                'next' => $this->nextPageUrl(),
            ],
            'meta' => [
                'current_page' => $this->currentPage(),
                'last_page_number' => $this->lastPage(),
                'per_page' => $this->perPage(),
                'total' => $this->total()
            ]
        ];
    }
}
