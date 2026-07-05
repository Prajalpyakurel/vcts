<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreFacultyRequest extends FormRequest
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
            'image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'max:2048'],
            'name' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'designation' => ['nullable', 'string'],
            'order_no' => ['nullable', 'numeric'],
            'phone_no' => ['nullable', 'digits_between:8,11'],
            'email' => ['required', 'email'],
            'message' => ['nullable', 'string'],
            'status' => ['required', 'in:active,inactive'],
        ];
    }
}
