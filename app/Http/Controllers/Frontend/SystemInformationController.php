<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSystemInformationRequest;
use App\Http\Requests\UpdateSystemInformationRequest;
use App\Models\SystemInformation;

class SystemInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSystemInformationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SystemInformation $systemInformation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SystemInformation $systemInformation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSystemInformationRequest $request, SystemInformation $systemInformation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SystemInformation $systemInformation)
    {
        //
    }
}
