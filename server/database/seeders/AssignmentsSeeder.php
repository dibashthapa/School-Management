<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AssignmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

      DB::table('assignments')->insert([
        [
          "stream"=>"Management",
          "subject"=>"Business Math",
          "task"=>"Solve the Numericals",
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
        ] , 
        [
          "stream"=>"Science",
          "subject"=>"Math",
          "task"=>"Solve the math problems",
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
        ]
      ]
      );
    }

}
