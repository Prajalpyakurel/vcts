<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('backend/dashboard');
    }
}
