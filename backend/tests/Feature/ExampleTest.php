<?php

declare(strict_types=1);

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_balance_endpoint(): void
    {
        $response = $this->get('/api/balance?id=1');
        $response->assertStatus(200);
        $response->assertJsonStructure([0]);
    }

    public function test_average_deposit_endpoint(): void
    {
        $response = $this->get('/api/average-deposit?id=1');
        $response->assertStatus(200);
        $response->assertJsonStructure([0]);
    }

    public function test_average_withdraw_endpoint(): void
    {
        $response = $this->get('/api/average-withdraw?id=1');
        $response->assertStatus(200);
        $response->assertJsonStructure([0]);
    }

    public function test_transactions_endpoint(): void
    {
        $response = $this->get('/api/transactions?id=1');
        $response->assertStatus(200);
        $response->assertJsonStructure([[]]);
    }

    public function test_user_endpoint(): void
    {
        $response = $this->get('/api/user?id=1');
        $response->assertStatus(200);
        $response->assertJsonStructure([]);
    }

    public function test_balance_endpoint_with_invalid_id(): void
    {
        $response = $this->get('/api/balance?id=');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID is required.'],
            ],
        ]);

        $response = $this->get('/api/balance?id=invalid');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID must be an integer.'],
            ],
        ]);
    }

    public function test_average_deposit_endpoint_with_invalid_id(): void
    {
        $response = $this->get('/api/average-deposit?id=');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID is required.'],
            ],
        ]);

        $response = $this->get('/api/average-deposit?id=invalid');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID must be an integer.'],
            ],
        ]);
    }

    public function test_average_withdraw_endpoint_with_invalid_id(): void
    {
        $response = $this->get('/api/average-withdraw?id=');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID is required.'],
            ],
        ]);

        $response = $this->get('/api/average-withdraw?id=invalid');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID must be an integer.'],
            ],
        ]);
    }

    public function test_transactions_endpoint_with_invalid_id(): void
    {
        $response = $this->get('/api/transactions?id=');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID is required.'],
            ],
        ]);

        $response = $this->get('/api/transactions?id=invalid');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID must be an integer.'],
            ],
        ]);
    }

    public function test_user_endpoint_with_invalid_id(): void
    {
        $response = $this->get('/api/user?id=');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID is required.'],
            ],
        ]);

        $response = $this->get('/api/user?id=invalid');
        $response->assertStatus(422);
        $response->assertJsonFragment([
            'error' => 'Validation failed.',
        ]);
        $response->assertJsonFragment([
            'messages' => [
                'id' => ['The user ID must be an integer.'],
            ],
        ]);
    }
}
