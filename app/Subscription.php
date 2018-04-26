<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $fillable = ['name', 'lastName', 'email', 'phone', 'dateOfBirth', 'address', 'countOfPeople', 'totalPrice', 'comment' ];
}
