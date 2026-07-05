<?php

namespace Database\Seeders;

use App\Models\Information;
use Illuminate\Database\Seeder;

class InformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            // Notices
            [
                'type' => 'notice',
                'slug' => 'admission-open-2026-intake',
                'title' => 'Admission Open for 2026 Intake',
                'image' => 'informations/info-notice-1.jpg',
                'description' => '<p>Valley College is now accepting applications for the 2026 academic intake across all diploma and bachelor programs. Interested students are encouraged to apply early as seats are limited.</p>',
                'show_alert' => true,
                'status' => 'active',
            ],
            [
                'type' => 'notice',
                'slug' => 'final-semester-exam-routine-published',
                'title' => 'Final Semester Examination Routine Published',
                'image' => 'informations/info-notice-2.jpg',
                'description' => '<p>The examination routine for the final semester has been published on the notice board and student portal. Students are advised to check their exam dates and seating arrangements.</p>',
                'show_alert' => true,
                'status' => 'active',
            ],
            [
                'type' => 'notice',
                'slug' => 'scholarship-application-deadline-extended',
                'title' => 'Scholarship Application Deadline Extended',
                'image' => 'informations/info-notice-3.png',
                'description' => '<p>Due to high demand, the deadline for merit-based scholarship applications has been extended by two weeks. Eligible students should submit documents to the administration office.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'notice',
                'slug' => 'college-closed-for-public-holiday',
                'title' => 'College Closed for Public Holiday',
                'image' => 'informations/info-notice-4.jpg',
                'description' => '<p>The college will remain closed in observance of the public holiday. Regular classes will resume the following working day as per the academic calendar.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'notice',
                'slug' => 'new-student-orientation-schedule',
                'title' => 'New Student Orientation Schedule Announced',
                'image' => 'informations/info-notice-5.jpg',
                'description' => '<p>Orientation for newly admitted students will be held at the main auditorium. The session will cover academic policies, campus facilities, and department introductions.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],

            // News
            [
                'type' => 'news',
                'slug' => 'valley-college-signs-mou-with-tech-partner',
                'title' => 'Valley College Signs MoU with Leading Tech Partner',
                'image' => 'informations/info-news-1.jpg',
                'description' => '<p>Valley College has signed a memorandum of understanding with a leading technology company to provide internship and placement opportunities for graduating students.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'news',
                'slug' => 'students-win-national-robotics-competition',
                'title' => 'Students Win National Robotics Competition',
                'image' => 'informations/info-news-2.jpg',
                'description' => '<p>A team of engineering students from Valley College secured first place at the national robotics competition, showcasing an autonomous navigation robot built entirely in-house.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'news',
                'slug' => 'new-computer-lab-inaugurated',
                'title' => 'New Computer Lab Inaugurated on Campus',
                'image' => 'informations/info-news-3.jpg',
                'description' => '<p>A newly upgraded computer laboratory equipped with modern workstations and high-speed internet was inaugurated to support hands-on learning in programming and networking courses.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'news',
                'slug' => 'college-hosts-annual-education-fair',
                'title' => 'Valley College Hosts Annual Education Fair',
                'image' => 'informations/info-news-4.jpg',
                'description' => '<p>The annual education fair welcomed prospective students and parents to explore academic programs, meet faculty members, and tour campus facilities.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'news',
                'slug' => 'faculty-member-honored-with-teaching-excellence-award',
                'title' => 'Faculty Member Honored with Teaching Excellence Award',
                'image' => 'informations/info-news-5.jpg',
                'description' => '<p>A senior faculty member from the Department of Computer Science was recognized with a regional teaching excellence award for outstanding contributions to student learning.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],

            // Blogs
            [
                'type' => 'blog',
                'slug' => 'why-technical-education-matters-in-nepal',
                'title' => 'Why Technical Education Matters in Nepal',
                'image' => 'informations/info-blog-1.jpg',
                'description' => '<p>Technical education equips students with practical, job-ready skills that directly address the evolving needs of Nepal\'s growing industries. In this post, we explore why hands-on learning is more valuable than ever.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'blog',
                'slug' => 'five-tips-for-first-year-students',
                'title' => '5 Tips for First-Year Students to Succeed',
                'image' => 'informations/info-blog-2.jpg',
                'description' => '<p>Starting college can feel overwhelming. Here are five practical tips to help first-year students manage their time, build good study habits, and make the most of campus life.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'blog',
                'slug' => 'the-rise-of-ai-in-technical-curricula',
                'title' => 'The Rise of AI in Technical Curricula',
                'image' => 'informations/info-blog-3.jpg',
                'description' => '<p>Artificial intelligence is reshaping how technical subjects are taught. We look at how Valley College is integrating AI-related coursework into its diploma and bachelor programs.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'blog',
                'slug' => 'building-a-career-after-graduation',
                'title' => 'Building a Career After Graduation',
                'image' => 'informations/info-blog-4.jpg',
                'description' => '<p>Graduation is just the beginning. This post shares guidance on internships, resume building, and networking to help students transition smoothly into the workforce.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'blog',
                'slug' => 'life-on-campus-a-students-perspective',
                'title' => 'Life on Campus: A Student\'s Perspective',
                'image' => 'informations/info-blog-5.jpg',
                'description' => '<p>A current student shares their experience of campus life at Valley College, from lab sessions and group projects to clubs, friendships, and everything in between.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],

            // Activities
            [
                'type' => 'activity',
                'slug' => 'annual-tech-fest-2026',
                'title' => 'Annual Tech Fest 2026',
                'image' => 'informations/info-activity-1.jpg',
                'description' => '<p>Students showcased innovative projects ranging from IoT devices to mobile applications at this year\'s Tech Fest, drawing visitors from partner colleges and local industry.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'activity',
                'slug' => 'blood-donation-drive',
                'title' => 'Student Council Blood Donation Drive',
                'image' => 'informations/info-activity-2.jpg',
                'description' => '<p>The student council organized a blood donation drive in partnership with the local Red Cross chapter, with strong participation from students and staff.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'activity',
                'slug' => 'inter-department-sports-week',
                'title' => 'Inter-Department Sports Week',
                'image' => 'informations/info-activity-3.png',
                'description' => '<p>Departments competed in a week-long sports tournament featuring futsal, badminton, and athletics, fostering healthy competition and campus spirit.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'activity',
                'slug' => 'coding-club-hackathon',
                'title' => 'Coding Club 24-Hour Hackathon',
                'image' => 'informations/info-activity-4.jpg',
                'description' => '<p>The campus coding club hosted a 24-hour hackathon where teams built working prototypes overnight, with mentorship from faculty and industry volunteers.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'activity',
                'slug' => 'community-outreach-program',
                'title' => 'Community Outreach and Digital Literacy Program',
                'image' => 'informations/info-activity-5.jpg',
                'description' => '<p>Volunteer students led a digital literacy program for local community members, teaching basic computer skills to support digital inclusion in Kathmandu.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],

            // Facilities
            [
                'type' => 'facility',
                'slug' => 'central-library',
                'title' => 'Central Library',
                'image' => 'informations/info-facility-1.jpg',
                'description' => '<p>Our central library houses an extensive collection of academic journals, technical references, and digital resources, with quiet study zones available to all students.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'facility',
                'slug' => 'engineering-workshop',
                'title' => 'Engineering Workshop',
                'image' => 'informations/info-facility-2.jpg',
                'description' => '<p>A fully equipped engineering workshop supports hands-on practice in mechanical and electrical coursework, with tools and safety equipment for all skill levels.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'facility',
                'slug' => 'computer-and-networking-lab',
                'title' => 'Computer & Networking Lab',
                'image' => 'informations/info-facility-3.jpg',
                'description' => '<p>Our networking lab is equipped with industry-standard hardware for students to practice system administration, networking, and cybersecurity fundamentals.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'facility',
                'slug' => 'student-hostel',
                'title' => 'Student Hostel',
                'image' => 'informations/info-facility-4.jpg',
                'description' => '<p>On-campus hostel accommodation offers a safe and supportive living environment for out-of-valley students, with shared study lounges and dining facilities.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
            [
                'type' => 'facility',
                'slug' => 'science-laboratory',
                'title' => 'Science Laboratory',
                'image' => 'informations/info-facility-5.jpg',
                'description' => '<p>Our science laboratory provides a controlled environment for practical experiments across physics, chemistry, and applied science coursework.</p>',
                'show_alert' => false,
                'status' => 'active',
            ],
        ];

        foreach ($items as $item) {
            Information::query()->updateOrCreate(['slug' => $item['slug']], $item);
        }
    }
}
