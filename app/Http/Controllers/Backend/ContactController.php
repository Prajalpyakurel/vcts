<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Requests\UpdateContactRequest;
use App\Models\Contact;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $contacts = Contact::query()->latest()->paginate(10)->through(function ($item) {
            $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
            return $item;
        });
        return Inertia::render('backend/contact/index/index', [
            'contacts' => $contacts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('backend/contact/create/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContactRequest $request)
    {
        $data = $request->validated();
        try {
            Contact::query()->create([
                'name' => $data['name'],
                'email' => $data['email'] ?? null,
                'phone' => $data['phone'] ?? null,
                'description' => $data['description'] ?? null,
                'subject' => $data['subject'] ?? null,
                'status' => $data['status'],
            ]);

            return redirect()->route('contactIndex')->with('success', 'Contact created successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to create contact section:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Contact creation failed.');
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contact $contact)
    {
        return Inertia::render('backend/contact/edit/index', [
            'contact' => $contact,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContactRequest $request, Contact $contact)
    {
        $data = $request->validated();
        try {
            $contact->update([
                'name' => $data['name'],
                'email' => $data['email'] ?? null,
                'phone' => $data['phone'] ?? null,
                'description' => $data['description'] ?? null,
                'subject' => $data['subject'] ?? null,
                'status' => $data['status'],
            ]);
            return redirect()->route('contactIndex')->with('success', 'Contact updated successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to update contact:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Contact update failed.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        try {
            $contact->delete();
            return redirect()->route('contactIndex')->with('success', 'Contact deleted successfully.');
        } catch (Exception $exception) {
            Log::error('Failed to delete contact:  ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Contact deletion failed.');
        }
    }
}
