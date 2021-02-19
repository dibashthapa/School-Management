<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $file = fopen("students.csv", "r");
    while (($row = fgetcsv($file, 0, ',')) !=FALSE){
      DB::table("students")->insert(array(
        "name"=>$row[0],
        "grade"=>$row[1],
        "stream"=>$row[2],
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
      ));
        }
    }
}
