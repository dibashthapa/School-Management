<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class RoutineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      DB::table('routines')->insert([
        [
          "class"=>"seven",
          "section"=>"A",
          "day"=>"Sunday",
          "subject"=>"Math",
         "teacher"=>"Dibash Thapa",
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
        ] , 
        [
          "class"=>"11",
          "section"=>"A",
          "day"=>"monday",
          "subject"=>"Account",
          "teacher"=>"Anju Bogati",
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
        ]
      ]
      );
    }
}
