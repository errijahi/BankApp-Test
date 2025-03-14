<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Resources\ProfileResource;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class ApiController extends Controller
{
    public function balance(UserRequest $request): JsonResponse
    {
        try {
            $user = User::findOrFail($request->id);

            return response()->json([
                $user->current_balance ?? 0.0,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong.',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function averageDeposit(UserRequest $request): JsonResponse
    {
        try {
            $averageDeposit = (float) Transaction::where('user_id', $request->id)
                ->where('type', 'deposit')
                ->avg('amount');

            return response()->json([
                $averageDeposit,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong.',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function averageWithdraw(UserRequest $request): JsonResponse
    {
        try {
            $averageWithdraw = (float) Transaction::where('user_id', $request->id)
                ->where('type', 'Withdrawal')
                ->avg('amount');

            return response()->json([
                $averageWithdraw,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong.',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    /**
     * @return array<mixed>|JsonResponse
     */
    public function transactions(UserRequest $request): array|JsonResponse
    {
        try {
            $transactions = Transaction::where('user_id', $request->id)
                ->take(7)
                ->get()
                ->toArray();

            return response()->json($transactions);
        } catch (ValidationException $e) {
            return response()->json([
                'error' => 'Invalid request data.',
                'messages' => $e->errors(),
            ], 422);
        }
    }

    public function user(UserRequest $request): JsonResponse
    {
        try {
            $user = User::findOrFail($request->id);

            return response()->json(new ProfileResource($user));
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Something went wrong.',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
