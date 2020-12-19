<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;

use Illuminate\Support\Facades\DB;
class TeacherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    $file = fopen("/home/dibash/School-Management/server/teachers.csv", "r");
    while (($row = fgetcsv($file, 0, ',')) !=FALSE){
      DB::table("teachers")->insert(array(
        "name"=>$row[1],
        "subject"=>$row[2],
        "stream"=>$row[3],
        "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
        "updated_at" => Carbon::now()->format('Y-m-d H:i:s')
      ));
        }
    }
}
