## Frontend

No changes were made to the frontend.

### Steps:
1. npm install
2. npm run dev

## Backend

- PHP 8.4.1
- Laravel 12
- MySQL

### Steps:

1. Copy the contents from `env.example` to `.env`.
2. Run `composer install`.
3. Run `php artisan migrate` and then import your database dump
4. Start the server with `php artisan serve --port=8080`. If you start the server on this port, it should work with the frontend without requiring any additional configuration.

### To run tests:

Run `php artisan test`.
