<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function allowRestify(User $user = null)
    {
        return $user->isAdmin();
    }

    public function show(User $user, User $model)
    {
        //
    }

    public function store(User $user)
    {
        //
    }

    public function storeBulk(User $user)
    {
        //
    }

    public function update(User $user, User $model)
    {
        //
    }

    public function updateBulk(User $user, User $model)
    {
        //
    }

    public function deleteBulk(User $user, User $model)
    {
        //
    }

    public function delete(User $user, User $model)
    {
        //
    }
}
