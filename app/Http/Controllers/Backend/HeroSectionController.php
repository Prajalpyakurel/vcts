<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreHeroSectionRequest;
use App\Http\Requests\UpdateHeroSectionRequest;
use App\Models\HeroSection;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class HeroSectionController extends Controller
{
    /**
     * Display a listing of the hero slides.
     * @return Response
     */
    public function index(): Response
    {
        $heroSections = HeroSection::query()
            ->orderBy('order_no')
            ->latest()
            ->paginate(10);

        return Inertia::render('backend/hero-section/index/index', [
            'heroSections' => $heroSections,
        ]);
    }

    /**
     * Show the form for creating a new hero slide.
     */
    public function create(): Response
    {
        return Inertia::render('backend/hero-section/create/index');
    }

    /**
     * Store a newly created hero slide in storage.
     */
    public function store(StoreHeroSectionRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = $request->file('image')->store('heroSections', 'public');

            $backgroundImagePath = null;
            if ($request->hasFile('background_image')) {
                $backgroundImagePath = $request->file('background_image')->store('heroSections/backgrounds', 'public');
            }

            HeroSection::query()->create([
                'key' => (string) Str::uuid(),
                'image' => $imagePath,
                'background_image' => $backgroundImagePath,
                'title' => $data['title'],
                'subtitle' => $data['subtitle'] ?? null,
                'description' => $data['description'] ?? null,
                'order_no' => $data['order_no'] ?? 0,
                'status' => $data['status'],
            ]);

            return redirect()->route('hero-sectionindex')->with('success', 'Hero slide created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create hero slide: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Hero slide creation failed.');
        }
    }

    /**
     * Show the form for editing the specified hero slide.
     */
    public function edit(HeroSection $heroSection): Response
    {
        return Inertia::render('backend/hero-section/edit/index', [
            'heroSection' => $heroSection,
        ]);
    }

    /**
     * Update the specified hero slide in storage.
     */
    public function update(UpdateHeroSectionRequest $request, HeroSection $heroSection)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($heroSection->image && Storage::disk('public')->exists($heroSection->image)) {
                    Storage::disk('public')->delete($heroSection->image);
                }

                $imagePath = $request->file('image')->store('heroSections', 'public');
                $data['image'] = $imagePath;
            }

            if ($request->hasFile('background_image')) {
                if ($heroSection->background_image && Storage::disk('public')->exists($heroSection->background_image)) {
                    Storage::disk('public')->delete($heroSection->background_image);
                }

                $backgroundImagePath = $request->file('background_image')->store('heroSections/backgrounds', 'public');
                $data['background_image'] = $backgroundImagePath;
            }

            $heroSection->update([
                'image' => $data['image'] ?? $heroSection->image,
                'background_image' => $data['background_image'] ?? $heroSection->background_image,
                'title' => $data['title'],
                'subtitle' => $data['subtitle'] ?? null,
                'description' => $data['description'] ?? null,
                'order_no' => $data['order_no'] ?? $heroSection->order_no,
                'status' => $data['status'],
            ]);
            return redirect()->route('hero-sectionindex')->with('success', 'Hero slide updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update hero slide: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Hero slide update failed.');
        }
    }

    /**
     * Remove the specified hero slide from storage.
     */
    public function destroy(HeroSection $heroSection)
    {
        try {
            if ($heroSection->image && Storage::disk('public')->exists($heroSection->image)) {
                Storage::disk('public')->delete($heroSection->image);
            }
            if ($heroSection->background_image && Storage::disk('public')->exists($heroSection->background_image)) {
                Storage::disk('public')->delete($heroSection->background_image);
            }
            $heroSection->delete();
            return redirect()->route('hero-sectionindex')->with('success', 'Hero slide deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete hero slide: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Hero slide deletion failed.');
        }
    }
}
