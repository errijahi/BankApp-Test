<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property string $account_number
 * @property string|null $date_of_birth
 * @property string $email
 * @property string $first_name
 * @property string $last_name
 * @property string $phone_number
 */
class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'accountNumber' => $this->account_number,
            'dateOfBirth' => $this->date_of_birth,
            'email' => $this->email,
            'firstName' => $this->first_name,
            'lastName' => $this->last_name,
            'phoneNumber' => $this->phone_number,
        ];
    }
}
