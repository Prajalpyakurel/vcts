<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Models\BoardMemberMessage;
use App\Models\Contact;
use App\Models\Course;
use App\Models\Download;
use App\Models\Event;
use App\Models\Faculty;
use App\Models\Gallery;
use App\Models\HeroSection;
use App\Models\Information;
use App\Models\StudentFeedback;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Laravel\Fortify\Features;
use Symfony\Component\HttpFoundation\StreamedResponse;

class IndexController extends Controller
{
    /**
     * Summary of index
     * @return Response
     */
    public function index(): Response
    {
        $heroSections = HeroSection::query()
            ->where('status', 'active')
            ->orderBy('order_no')
            ->get();

        $studentFeedbacks = StudentFeedback::query()
            ->where('status', 'active')
            ->get();

        $courses = Course::query()
            ->where('status', 'active')
            ->withSum(
                ['courseCurriculum as total_credit_hours' => function ($query) {
                    $query->select(DB::raw('SUM(CAST(credit_hours AS SIGNED))'));
                }],
                'credit_hours'
            )
            ->get();

        $news = Information::query()
            ->where(['type' => 'news', 'status' => 'active'])
            ->latest()
            ->limit(3)
            ->get()
            ->map(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        $notices = Information::query()
            ->where(['type' => 'notice', 'status' => 'active'])
            ->latest()
            ->limit(3)
            ->get()
            ->map(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        $blogs = Information::query()
            ->where(['type' => 'blog', 'status' => 'active'])
            ->latest()
            ->limit(6)
            ->get()
            ->map(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        return Inertia::render('frontend/home/home', [
            'heroSections' => $heroSections,
            'studentFeedbacks' => $studentFeedbacks,
            'courses' => $courses,
            'news' => $news,
            'notices' => $notices,
            'blogs' => $blogs,
        ]);
    }

    /**
     * Summary of index
     * @return Response
     */
    public function boardMembers(): Response
    {
        $boardMemberMessage = BoardMemberMessage::query()->where('status', 'active')->orderBy('order_no')->get();
        return Inertia::render('frontend/board-member/index', [
            'boardMemberMessage' => $boardMemberMessage,
        ]);
    }

    /**
     * @return Response
     */
    public function teacherIndex(): Response
    {
        $faculties = Faculty::query()->where('status', 'active')->orderBy('order_no')->get();
        return Inertia::render('frontend/faculty/index', [
            'faculties' => $faculties,
        ]);
    }
    /**
     * @return Response
     */
    public function programsIndex(): Response
    {
        $programs = Course::query()->where('status', 'active')->withSum(
            ['courseCurriculum as total_credit_hours' => function ($query) {
                $query->select(DB::raw('SUM(CAST(credit_hours AS SIGNED))'));
            }],
            'credit_hours'
        )->get();;
        return Inertia::render('frontend/program/index', [
            'programs' => $programs,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function programShow(string $slug): Response
    {
        $program = Course::query()->where('slug', $slug)
            ->withSum(
                ['courseCurriculum as total_credit_hours' => function ($query) {
                    $query->select(DB::raw('SUM(CAST(credit_hours AS SIGNED))'));
                }],
                'credit_hours'
            )->with('courseCurriculum', 'courseCurriculum.curriculumSyllabus')->firstOrFail();
        return Inertia::render('frontend/program/show', [
            'program' => $program,
        ]);
    }

    /**
     * @return Response
     */
    /**
     * @return Response
     */
    public function downloadIndex(): Response
    {
        $downloads = Download::query()->where('status', 'active')->orderBy('created_at')->get();
        return Inertia::render('frontend/download/index', [
            'downloads' => $downloads,
        ]);
    }

    /**
     * @param int $int
     * @return RedirectResponse|StreamedResponse
     */
    public function downloadFileIndex(int $int)
    {
        try {
            $download = Download::query()->findOrFail($int);
            $path = $download->file;

            if (!Storage::disk('public')->exists($path)) {
                return redirect()
                    ->back()
                    ->with('error', 'File not found.');
            }

            return Storage::disk('public')->download(
                $path,
                basename($path)
            );
        } catch (\Exception $exception) {
            Log::error('Failed to download file: ' . $exception->getMessage());
            return redirect()
                ->back()
                ->with('error', 'File download failed.');
        }
    }

    /**
     * @return Response
     */
    public function aboutUS()
    {
        return Inertia::render('frontend/about/index');
    }

    /**
     * @return Response
     */
    public function noticeIndex()
    {
        $notices = Information::query()->where(['status' => 'active', 'type' => 'notice'])->latest()->paginate(10);
        $recentNotices = Information::query()->where(['status' => 'active'])->latest()->paginate(5);
        return Inertia::render('frontend/notice/index', [
            'notices' => $notices,
            'recentNotices' => $recentNotices,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function noticeShow(string $slug)
    {
        $notice = Information::query()->where('slug', $slug)->firstOrFail();
        $notice->formatted_date = Carbon::parse($notice->created_at)->format('M j, Y');
        $recentNotices = Information::query()->where(['status' => 'active'])->whereNot('slug', $slug)->latest()->paginate(5);
        return Inertia::render('frontend/notice/show', [
            'notice' => $notice,
            'recentNotices' => $recentNotices,
        ]);
    }

    /**
     * @return Response
     */
    public function eventIndex()
    {
        $events = Event::query()->where(['status' => 'active'])->latest()->paginate(10);
        $recentEvents = Information::query()->where(['status' => 'active'])->latest()->paginate(5);
        return Inertia::render('frontend/event/index', [
            'events' => $events,
            'recentEvents' => $recentEvents,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function eventShow(string $slug)
    {
        $event = Event::query()->where('slug', $slug)->firstOrFail();
        $recentEvents = Information::query()->where(['status' => 'active'])->latest()->paginate(5);
        return Inertia::render('frontend/event/show', [
            'event' => $event,
            'recentEvents' => $recentEvents,
        ]);
    }

    /**
     * @return Response
     */
    public function activityIndex()
    {
        $activities = Information::query()
            ->where([
                'status' => 'active',
                'type' => 'activity',
            ])
            ->latest()
            ->paginate(10)
            ->through(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        $recentInformations = Information::query()
            ->where('status', 'active')
            ->latest()
            ->paginate(5);

        return Inertia::render('frontend/activity/index', [
            'activities' => $activities,
            'recentInformations' => $recentInformations,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function activityShow(string $slug)
    {
        $activity = Information::query()->where('slug', $slug)->firstOrFail();
        $activity->formatted_date = Carbon::parse($activity->created_at)->format('M j, Y');
        $recentActivities = Information::query()->where(['status' => 'active'])->whereNot('slug', $slug)->latest()->paginate(5);
        return Inertia::render('frontend/activity/show', [
            'activity' => $activity,
            'recentActivities' => $recentActivities,
        ]);
    }

    /**
     * @return Response
     */
    public function contactIndex()
    {
        return Inertia::render('frontend/contact/index');
    }

    /**
     * @param StoreContactRequest $request
     * @return RedirectResponse
     */
    public function contactStore(StoreContactRequest $request): RedirectResponse
    {
        $data = $request->validated();
        try {
            Contact::query()->create([
                'name' => $data['name'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'subject' => $data['subject'],
                'description' => $data['description'],
            ]);

            return redirect()->back()->with('success', 'Your message has been sent.');
        } catch (\Exception $exception) {
            Log::error('Failed to send message: ' . $exception->getMessage());
            return redirect()->back()->with('error', 'Failed to send message.');
        }
    }

    /**
     * @return Response
     */
    public function facilityIndex()
    {
        $facilities = Information::query()->where(['status' => 'active', 'type' => 'facility'])->latest()->paginate(10);
        return Inertia::render('frontend/facility/index', [
            'facilities' => $facilities,
        ]);
    }

    /**
     * @return Response
     */
    public function galleryIndex()
    {
        $galleries = Gallery::query()->where(['status' => 'active'])->latest()->get();
        return Inertia::render('frontend/gallery/index', [
            'galleries' => $galleries,
        ]);
    }


    /**
     * @return Response
     */
    public function blogIndex()
    {
        $blogs = Information::query()
            ->where([
                'status' => 'active',
                'type' => 'blog',
            ])
            ->latest()
            ->paginate(10)
            ->through(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        $recentBlogs = Information::query()
            ->where('status', 'active')
            ->latest()
            ->paginate(5);

        return Inertia::render('frontend/blog/index', [
            'blogs' => $blogs,
            'recentBlogs' => $recentBlogs,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function blogShow(string $slug)
    {
        $blog = Information::query()->where('slug', $slug)->firstOrFail();
        $blog->formatted_date = Carbon::parse($blog->created_at)->format('M j, Y');
        $recentActivities = Information::query()->where(['status' => 'active'])->whereNot('slug', $slug)->latest()->paginate(5);
        return Inertia::render('frontend/blog/show', [
            'blog' => $blog,
            'recentActivities' => $recentActivities,
        ]);
    }

    /**
     * @return Response
     */
    public function newsIndex()
    {
        $news_s = Information::query()
            ->where([
                'status' => 'active',
                'type' => 'news',
            ])
            ->latest()
            ->paginate(10)
            ->through(function ($item) {
                $item->formatted_date = Carbon::parse($item->created_at)->format('M j, Y');
                return $item;
            });

        $recentNews = Information::query()
            ->where('status', 'active')
            ->latest()
            ->paginate(5);

        return Inertia::render('frontend/news/index', [
            'news_s' => $news_s,
            'recentNews' => $recentNews,
        ]);
    }

    /**
     * @param string $slug
     * @return Response
     */
    public function newsShow(string $slug)
    {
        $news = Information::query()->where('slug', $slug)->firstOrFail();
        $news->formatted_date = Carbon::parse($news->created_at)->format('M j, Y');
        $recentActivities = Information::query()->where(['status' => 'active'])->whereNot('slug', $slug)->latest()->paginate(5);
        return Inertia::render('frontend/news/show', [
            'news' => $news,
            'recentActivities' => $recentActivities,
        ]);
    }
}
