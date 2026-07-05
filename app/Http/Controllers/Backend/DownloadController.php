<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDownloadRequest;
use App\Http\Requests\UpdateDownloadRequest;
use App\Models\Download;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DownloadController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $downloads = Download::query()->latest()->paginate(10);
        return Inertia::render('backend/download/index/index', [
            'downloads' => $downloads,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/download/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDownloadRequest $request)
    {
        $data = $request->validated();
        try {
            $filePath = null;
            if ($request->hasFile('file')) {
                $filePath = $request->file('file')->store('downloads', 'public');
            }

            Download::query()->create([
                'file' => $filePath,
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('downloadIndex')->with('success', 'Download created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create download section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Download creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Download $download)
    {
        return Inertia::render('backend/download/edit/index', [
            'download' => $download,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDownloadRequest $request, Download $download)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('file')) {
                if ($download->file && Storage::disk('public')->exists($download->file)) {
                    Storage::disk('public')->delete($download->file);
                }

                $filePath = $request->file('file')->store('downloads', 'public');
                $data['file'] = $filePath;
            }

            $download->update([
                'file' => $data['file'] ?? $download->file,
                'name' => $data['name'],
                'description' => $data['description'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('downloadIndex')->with('success', 'Download updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update download:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Download update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Download $download)
    {
        try {
            if ($download->file && Storage::disk('public')->exists($download->file)) {
                Storage::disk('public')->delete($download->file);
            }
            $download->delete();
            return redirect()->route('downloadIndex')->with('success', 'Download deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete download:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Download deletion failed.');
        }
    }

    /**
     * @param Download $download
     * @return RedirectResponse|StreamedResponse
     */
    public function download(Download $download): RedirectResponse|StreamedResponse
    {
        try {
            $path = $download->file;

            if (!Storage::disk('public')->exists($path)) {
                return redirect()
                    ->back()
                    ->with('error', 'File not found.');
            }

            return Storage::disk('public')->download(
                $path,
                basename($path)
            );
        } catch (\Exception $exception) {
            Log::error('Failed to download file: ' . $exception->getMessage());
            return redirect()
                ->back()
                ->with('error', 'File download failed.');
        }
    }
}
