<?php

namespace Database\Seeders;

use App\Models\Faculty;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class FacultySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            // B. Pharmacy & BPH Full Time Faculties
            [
                'name' => 'Mr. Sanjeev Gurung',
                'designation' => 'Principal & HOD (Assistant Professor)',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Pharmacology)',
                'phone_no' => '9861504392',
                'email' => 'sanizv.grg26@gmail.com',
            ],
            [
                'name' => 'Mr. Navraj Upreti',
                'designation' => 'Assistant Professor',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Pharmaceutics)',
                'phone_no' => '98455232679',
                'email' => 'navraj.upreti2679@gmail.com',
            ],
            [
                'name' => 'Mr. Ujjwal Sigdel',
                'designation' => 'Assistant Professor',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Pharmaceutics)',
                'phone_no' => '9862889727',
                'email' => 'sigdellawjju@gmail.com',
            ],
            [
                'name' => 'Mrs. Dikchya Regmi',
                'designation' => 'Assistant Professor',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Pharmaceutical Care)',
                'phone_no' => '9841255616',
                'email' => 'dikchyapyakurel9@gmail.com',
            ],
            [
                'name' => 'Mr. Ram Krishna Giri',
                'designation' => 'Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master in Physical Chemistry',
                'phone_no' => '9841453502',
                'email' => 'girinbsm@gmail.com',
            ],
            [
                'name' => 'Mrs. Anisha Shakya',
                'designation' => 'Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Industrial Pharmacy)',
                'phone_no' => '9841872103',
                'email' => 'kreetanisha@gmail.com',
            ],
            [
                'name' => 'Mrs. Suruchi Godar',
                'designation' => 'HOD (Assistant Professor)',
                'description' => 'Program: BPH | Qualification: MPH',
                'phone_no' => '9803284668',
                'email' => 'suruchi.godarmph2016@gmail.com',
            ],
            [
                'name' => 'Ms. Rojina Regmi',
                'designation' => 'Assistant Professor',
                'description' => 'Program: BPH | Qualification: MPH',
                'phone_no' => '9861588241',
                'email' => 'rojina.regmimph2018@gmail.com',
            ],
            [
                'name' => 'Mr. Rajeev Nepal',
                'designation' => 'Assistant Professor',
                'description' => 'Program: BPH | Qualification: MPH',
                'phone_no' => '9846910910',
                'email' => 'nepalrajeev11@gmail.com',
            ],

            // Guest Lecturers
            [
                'name' => 'Mr. Milan Subedi',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: M. Pharm. (Medicinal Chemistry)',
                'phone_no' => '9843806069',
                'email' => 'milansubedi9@gmail.com',
            ],
            [
                'name' => 'Mr. Yagya Prasad Gaihre',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master of Organic Chemistry',
                'phone_no' => '9849891410',
                'email' => 'gaihreyyagya01@gmail.com',
            ],
            [
                'name' => 'Mr. Dasuram Chapagain',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master of Physical Chemistry',
                'phone_no' => '9841850301',
                'email' => 'drchapagain301@gmail.com',
            ],
            [
                'name' => 'Mr. Shalikram Adhikary',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Anatomy & Physiology',
                'phone_no' => '9844674615',
                'email' => 'adhikarisaroj619@gmail.com',
            ],
            [
                'name' => 'Mr. Bikas Kumar Pandey',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Biochemistry',
                'phone_no' => '9841937267',
                'email' => 'bikaspandey46@gmail.com',
            ],
            [
                'name' => 'Mr. Kedar Prasad Shah',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master of Pharmaceutics',
                'phone_no' => '9841623062',
                'email' => 'mekedarshah01@gmail.com',
            ],
            [
                'name' => 'Mr. Santosh Paudel',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: MBA',
                'phone_no' => '9860185412',
                'email' => null,
            ],
            [
                'name' => 'Mr. Ananda Kumar Gupta',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Microbiology',
                'phone_no' => '9851027948',
                'email' => null,
            ],
            [
                'name' => 'Mr. Bhanubhakta Bhatta',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: PHD',
                'phone_no' => '9848853303',
                'email' => 'bhanubhat70@gmail.com',
            ],
            [
                'name' => 'Mrs. Nil Kumari Tamang',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master of Phr. Care',
                'phone_no' => '9843128953',
                'email' => 'niltamang7@gmail.com',
            ],
            [
                'name' => 'Mrs. Ujwola Suwal',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. | Qualification: Master of Pharmacognosy',
                'phone_no' => '9849931954',
                'email' => 'ujwolasuwal123@gmail.com',
            ],
            [
                'name' => 'Mr. Upendra Raj Dhakal',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: MPH',
                'phone_no' => '9849110689',
                'email' => 'urdhakal@gmail.com',
            ],
            [
                'name' => 'Mr. Mahendra Giri',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: BPH | Qualification: MPH',
                'phone_no' => '9869844306',
                'email' => 'mdr.giri21@gmail.com',
            ],
            [
                'name' => 'Mr. Sudip Khanal',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Biostatics',
                'phone_no' => '9855012487',
                'email' => 'sudipkhanal@gmail.com',
            ],
            [
                'name' => 'Mr. Saurav Paudel',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Computer',
                'phone_no' => '9860673708',
                'email' => null,
            ],
            [
                'name' => 'Mr. Bishowjit Khadka',
                'designation' => 'Guest Lecturer',
                'description' => 'Program: B. Pharm. & BPH | Qualification: Master of Math',
                'phone_no' => '9843148141',
                'email' => 'Bishowkhadka77@yahoo.com',
            ],
        ];

        foreach ($items as $index => $item) {
            Faculty::query()->updateOrCreate(
                ['name' => $item['name']],
                [
                    'slug' => Str::slug($item['name']),
                    'designation' => $item['designation'],
                    'description' => $item['description'],
                    'phone_no' => $item['phone_no'],
                    'email' => $item['email'],
                    'order_no' => $index + 1,
                    'status' => 'active',
                ]
            );
        }
    }
}
