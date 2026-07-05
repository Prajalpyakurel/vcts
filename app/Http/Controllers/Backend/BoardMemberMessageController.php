<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBoardMemberMessageRequest;
use App\Http\Requests\UpdateBoardMemberMessageRequest;
use App\Models\BoardMemberMessage;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class BoardMemberMessageController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $boardMemberMessages = BoardMemberMessage::query()->latest()->paginate(10);
        return Inertia::render('backend/boardMemberMessage/index/index', [
            'boardMemberMessages' => $boardMemberMessages,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/boardMemberMessage/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBoardMemberMessageRequest $request)
    {
        $data = $request->validated();
        try {
            $imagePath = null;
            if ($request->hasFile('image')) {
                $imagePath = $request->file('image')->store('boardMemberMessages', 'public');
            }

            BoardMemberMessage::query()->create([
                'image' => $imagePath,
                'name' => $data['name'],
                'designation' => $data['designation'],
                'message' => $data['message'],
                'order_no' => $data['order_no'],
                'status' => $data['status'],
            ]);

            return redirect()->route('boardMemberMessageIndex')->with('success', 'Board member message created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create boardMemberMessage section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Board member message creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BoardMemberMessage $boardMemberMessage)
    {
        return Inertia::render('backend/boardMemberMessage/edit/index', [
            'boardMemberMessage' => $boardMemberMessage,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBoardMemberMessageRequest $request, BoardMemberMessage $boardMemberMessage)
    {
        $data = $request->validated();
        try {
            if ($request->hasFile('image')) {
                if ($boardMemberMessage->image && Storage::disk('public')->exists($boardMemberMessage->image)) {
                    Storage::disk('public')->delete($boardMemberMessage->image);
                }

                $imagePath = $request->file('image')->store('boardMemberMessages', 'public');
                $data['image'] = $imagePath;
            }

            $boardMemberMessage->update([
                'image' => $data['image'] ?? $boardMemberMessage->image,
                'name' => $data['name'],
                'designation' => $data['designation'],
                'message' => $data['message'],
                'order_no' => $data['order_no'],
                'status' => $data['status'],
            ]);
            return redirect()->route('boardMemberMessageIndex')->with('success', 'Board member message updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update boardMemberMessage:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Board member message update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BoardMemberMessage $boardMemberMessage)
    {
        try {
            if ($boardMemberMessage->image && Storage::disk('public')->exists($boardMemberMessage->image)) {
                Storage::disk('public')->delete($boardMemberMessage->image);
            }
            $boardMemberMessage->delete();
            return redirect()->route('boardMemberMessageIndex')->with('success', 'Board member message deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete boardMemberMessage:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Board member message deletion failed.');
        }
    }
}
