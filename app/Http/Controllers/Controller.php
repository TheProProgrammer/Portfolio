<?php

namespace App\Http\Controllers;

use App\Models\Experiences;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function home(){
        $experiences = Experiences::all();
        return view('home', ['experiences' => $experiences]);
    }
}
