<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateSystemInformationRequest;
use App\Models\SystemInformation;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SystemInformationController extends Controller
{
    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        return Inertia::render('backend/system/edit/index', [
            'system' => SystemInformation::query()->first(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSystemInformationRequest $request)
    {
        $data = $request->validated();
        $system = SystemInformation::query()->first() ?? new SystemInformation();
        try {
            if ($request->hasFile('logo')) {
                if ($system->logo && Storage::disk('public')->exists($system->logo)) {
                    Storage::disk('public')->delete($system->logo);
                }

                $logoPath = $request->file('logo')->store('systems', 'public');
                $data['logo'] = $logoPath;
            }

            $system->fill([
                'logo' => $data['logo'] ?? $system->logo ?? null,
                'name' => $data['name'] ?? $system->name ?? null,
                'email' => $data['email'] ?? $system->email ?? null,
                'phone' => $data['phone'] ?? $system->phone ?? null,
                'facebook_link' => $data['facebook_link'] ?? $system->facebook_link ?? null,
                'instagram_link' => $data['instagram_link'] ?? $system->instagram_link ?? null,
                'youtube_link' => $data['youtube_link'] ?? $system->youtube_link ?? null,
                'whatsapp_link' => $data['whatsapp_link'] ?? $system->whatsapp_link ?? null,
                'linkedin_link' => $data['linkedin_link'] ?? $system->linkedin_link ?? null,
                'twitter_link' => $data['twitter_link'] ?? $system->twitter_link ?? null,
                'address' => $data['address'] ?? $system->address ?? null,
                'map_link' => $data['map_link'] ?? $system->map_link ?? null,
            ]);

            $system->save();
            return redirect()->back()->with('success', 'System information updated successfully.');
        } catch (\Exception $exception) {
            Log::error('Failed to update system:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'SystemInformation update failed.');
        }
    }

}
