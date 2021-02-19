<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      DB::table("users")->insert([
        "name"=>"Dibash",
        "class"=>"eleven",
        "email"=>"dibash@gmail.com",
        "password"=>Hash::make("password"),
        "faculty"=>"Science",
        "role"=>"Student"
      ]);
      DB::table("users")->insert([
        "name"=>"admin",
        "class"=>"none",
        "email"=>"admin@gmail.com",
        "password"=>Hash::make("123456789"),
        "faculty"=>"Science",
        "role"=>"Admin"
      ]);
    }
}
