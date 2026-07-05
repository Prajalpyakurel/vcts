<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'email' => ['required', 'email:strict'],
            'phone' => ['required', 'digits_between:7,10'],
            'subject' => ['required', 'string'],
            'description' => ['required', 'string'],
            'status' => ['nullable', 'in:new,in_review,contracted,closed,dropped'],
        ];
    }
}
