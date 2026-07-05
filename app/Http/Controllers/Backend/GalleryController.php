<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Models\Gallery;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class GalleryController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $galleries = Gallery::query()->latest()->paginate(10);
        return Inertia::render('backend/gallery/index/index', [
            'galleries' => $galleries,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/gallery/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('galleries', 'public');
            }

            Gallery::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'status' => $data['status'],
            ]);

            return redirect()->route('galleryIndex')->with('success', 'Gallery created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create gallery section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Gallery creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        return Inertia::render('backend/gallery/edit/index', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, Gallery $gallery)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
                    Storage::disk('public')->delete($gallery->image);
                }

                $imagePath = $request->file('image')->store('galleries', 'public');
                $data['image'] = $imagePath;
            }

            $gallery->update([
                'image' => $data['image'] ?? $gallery->image,
                'name' => $data['name'],
                'status' => $data['status'],
            ]);
            return redirect()->route('galleryIndex')->with('success', 'Gallery updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update gallery:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Gallery update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        try {
            if ($gallery->image && Storage::disk('public')->exists($gallery->image)) {
                Storage::disk('public')->delete($gallery->image);
            }
            $gallery->delete();
            return redirect()->route('galleryIndex')->with('success', 'Gallery deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete gallery:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Gallery deletion failed.');
        }
    }
}
