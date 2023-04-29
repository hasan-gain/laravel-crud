<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use RecursiveDirectoryIterator;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //language list
        $languages = [];
        $directories = new RecursiveDirectoryIterator(resource_path('lang'));
        while ($directories->valid()) {
            if (!$directories->isDot()){
                array_push($languages, [
                    'key' => $directories->getBasename(),
                    'title' => $this->findLanguage($directories->getBasename())['name'] ?? ''
                ]);
            }
            $directories->next();
        }
        //generate lang file
        $default_lang = \request()->lang ?? 'en';
        $file_path = resource_path().DIRECTORY_SEPARATOR.'lang'.DIRECTORY_SEPARATOR.$default_lang.DIRECTORY_SEPARATOR.'default.php';

        if (!file_exists($file_path)) {
            return response()->json(['success' => false, 'message' => 'Language file not exist']);
        }
        //response for api
        return [
            'company_banner' => '/public/images/readykit-banner.png',
            'company_icon' => '/public/images/icon.png',
            'company_logo' => '/public/images/logo.png',
            'company_name' => 'Gain Solution',
            'time_zone' => 'Asia/Dhaka',
            'time_format' => 'h',
            'thousand_separator' => ',',
            'default_language' => $default_lang,
            'languages' => $languages,
            'date_format' => 'd-m-Y',
            'currency_symbol' => '$',
            'currency_position' => 'prefix_with_space',
            'language_file' => include($file_path),
        ];
    }


    public function languages()
    {
        $data = [];
        $directories = new RecursiveDirectoryIterator(resource_path('lang'));
        while ($directories->valid()) {
            if (!$directories->isDot()){
                array_push($data, [
                    'key' => $directories->getBasename(),
                    'title' => $this->findLanguage($directories->getBasename())['name'] ?? ''
                ]);
            }
            $directories->next();
        }
        return $data;
    }

    public function findLanguage($code)
    {
        return collect(config('language.languages'))
            ->firstWhere('code', $code);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
