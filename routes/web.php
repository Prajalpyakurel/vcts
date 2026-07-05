<?php

// frontend
use App\Http\Controllers\Frontend\IndexController as FrontendIndexController;

// backend
use App\Http\Controllers\Backend\IndexController as BackendIndexController;
use App\Http\Controllers\Backend\HeroSectionController as BackendHeroSectionController;
use App\Http\Controllers\Backend\ContactController as BackendContactController;
use App\Http\Controllers\Backend\StudentFeedbackController as BackendStudentFeedbackController;
use App\Http\Controllers\Backend\CourseController as BackendCourseController;
use App\Http\Controllers\Backend\CurriculumController as BackendCurriculumController;
use App\Http\Controllers\Backend\CurriculumSyllabusController as BackendCurriculumSyllabusController;
use App\Http\Controllers\Backend\FacultyController as BackendFacultyController;
use App\Http\Controllers\Backend\BoardMemberMessageController as BackendBoardMemberMessageController;
use App\Http\Controllers\Backend\EventController as BackendEventController;
use App\Http\Controllers\Backend\DepartmentController as BackendDepartmentController;
use App\Http\Controllers\Backend\DownloadController as BackendDownloadController;
use App\Http\Controllers\Backend\SystemInformationController as BackendSystemInformationController;
use App\Http\Controllers\Backend\InformationController as BackendInformationController;
use App\Http\Controllers\Backend\GalleryController as BackendGalleryController;
use App\Http\Controllers\Backend\CareerController as BackendCareerController;

use Illuminate\Support\Facades\Route;

Route::get('/', [FrontendIndexController::class, 'index'])->name('home');

Route::get('/board-members', [FrontendIndexController::class, 'boardMembers'])->name('board.member');

Route::get('/teachers', [FrontendIndexController::class, 'teacherIndex'])->name('teachers');

Route::get('/departments', [FrontendIndexController::class, 'departmentIndex'])->name('departments');

Route::get('/downloads', [FrontendIndexController::class, 'downloadIndex'])->name('downloads');
Route::get('/downloads/{id}', [FrontendIndexController::class, 'downloadFileIndex'])->name('downloadFileFrontend');

Route::get('/about-us', [FrontendIndexController::class, 'aboutUS'])->name('aboutUS');

Route::get('/facilities', [FrontendIndexController::class, 'facilityIndex'])->name('facilities');

Route::get('/galleries', [FrontendIndexController::class, 'galleryIndex'])->name('galleries');

Route::get('/notices', [FrontendIndexController::class, 'noticeIndex'])->name('notices');
Route::get('/notice/{slug}', [FrontendIndexController::class, 'noticeShow'])->name('notices.show');

Route::get('/events', [FrontendIndexController::class, 'eventIndex'])->name('events');
Route::get('/event/{slug}', [FrontendIndexController::class, 'eventShow'])->name('event.show');

Route::get('/activities', [FrontendIndexController::class, 'activityIndex'])->name('activities');
Route::get('/activity/{slug}', [FrontendIndexController::class, 'activityShow'])->name('activity.show');

Route::get('/blogs', [FrontendIndexController::class, 'blogIndex'])->name('blogs');
Route::get('/blog/{slug}', [FrontendIndexController::class, 'blogShow'])->name('blog.show');

Route::get('/news', [FrontendIndexController::class, 'newsIndex'])->name('news');
Route::get('/news/{slug}', [FrontendIndexController::class, 'newsShow'])->name('news.show');

Route::get('/contacts', [FrontendIndexController::class, 'contactIndex'])->name('contacts');
Route::post('/contacts', [FrontendIndexController::class, 'contactStore'])->name('contactStoreFrontend');

Route::get('/programs/{program_name}', [FrontendIndexController::class, 'programShow'])->name('programShow');
Route::get('/programs', [FrontendIndexController::class, 'programsIndex'])->name('programIndex');


Route::prefix("admin")->middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [BackendIndexController::class, 'index'])->name('dashboard');

    Route::controller(BackendContactController::class)->prefix('contact')->name('contact')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{contact}', 'edit')->name('Edit');
        Route::post('update/{contact}', 'update')->name('Update');
        Route::delete('delete/{contact}', 'destroy')->name('Destroy');
    });

    // hero-section
    Route::controller(BackendHeroSectionController::class)->prefix('hero-section')->name('hero-section')->group(function () {
        Route::get('/', 'index')->name('index');
        Route::get('create', 'create')->name('create');
        Route::post('store', 'store')->name('store');
        Route::get('edit/{heroSection}', 'edit')->name('edit');
        Route::post('update/{heroSection}', 'update')->name('update');
        Route::delete('delete/{heroSection}', 'destroy')->name('destroy');
    });

    // student-feedback-section
    Route::controller(BackendCourseController::class)->prefix('course')->name('course')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{course}', 'edit')->name('Edit');
        Route::post('update/{course}', 'update')->name('Update');
        Route::delete('delete/{course}', 'destroy')->name('Destroy');
    });

    // course-section
    Route::controller(BackendStudentFeedbackController::class)->prefix('studentFeedback')->name('studentFeedback')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('/create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{studentFeedback}', 'edit')->name('Edit');
        Route::post('update/{studentFeedback}', 'update')->name('Update');
        Route::delete('delete/{studentFeedback}', 'destroy')->name('Destroy');
    });

    // curriculum-section
    Route::controller(BackendCurriculumController::class)->prefix('curriculum')->name('curriculum')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{curriculum}', 'edit')->name('Edit');
        Route::put('update/{curriculum}', 'update')->name('Update');
        Route::delete('delete/{curriculum}', 'destroy')->name('Destroy');
    });

    // curriculum-syllabus-section
    Route::controller(BackendCurriculumSyllabusController::class)->prefix('curriculum-syllabus')->name('curriculumSyllabus')->group(function () {
        Route::post('store', 'store')->name('Store');
        Route::put('update/{curriculumSyllabus}', 'update')->name('Update');
        Route::delete('delete/{curriculumSyllabus}', 'destroy')->name('Destroy');
    });

    // faculty-section
    Route::controller(BackendFacultyController::class)->prefix('faculty')->name('faculty')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{faculty}', 'edit')->name('Edit');
        Route::post('update/{faculty}', 'update')->name('Update');
        Route::delete('delete/{faculty}', 'destroy')->name('Destroy');
    });

    // board-member-message-section
    Route::controller(BackendBoardMemberMessageController::class)->prefix('boardMemberMessage')->name('boardMemberMessage')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{boardMemberMessage}', 'edit')->name('Edit');
        Route::post('update/{boardMemberMessage}', 'update')->name('Update');
        Route::delete('delete/{boardMemberMessage}', 'destroy')->name('Destroy');
    });

    // event-section
    Route::controller(BackendEventController::class)->prefix('event')->name('event')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{event}', 'edit')->name('Edit');
        Route::post('update/{event}', 'update')->name('Update');
        Route::delete('delete/{event}', 'destroy')->name('Destroy');
    });

    // department-section
    Route::controller(BackendDepartmentController::class)->prefix('department')->name('department')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{department}', 'edit')->name('Edit');
        Route::post('update/{department}', 'update')->name('Update');
        Route::delete('delete/{department}', 'destroy')->name('Destroy');
    });

    // download-section
    Route::controller(BackendDownloadController::class)->prefix('download')->name('download')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{download}', 'edit')->name('Edit');
        Route::post('update/{download}', 'update')->name('Update');
        Route::delete('delete/{download}', 'destroy')->name('Destroy');
        Route::get('file/{download}', 'download')->name('File');
    });

    // information section
    Route::controller(BackendInformationController::class)->prefix('information')->name('information')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{information}', 'edit')->name('Edit');
        Route::get('show/{information}', 'show')->name('Show');
        Route::post('update/{information}', 'update')->name('Update');
        Route::delete('delete/{information}', 'destroy')->name('Destroy');
    });

    // gallery-section
    Route::controller(BackendGalleryController::class)->prefix('gallery')->name('gallery')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{gallery}', 'edit')->name('Edit');
        Route::post('update/{gallery}', 'update')->name('Update');
        Route::delete('delete/{gallery}', 'destroy')->name('Destroy');
    });

    // career-section
    Route::controller(BackendCareerController::class)->prefix('career')->name('career')->group(function () {
        Route::get('/', 'index')->name('Index');
        Route::get('create', 'create')->name('Create');
        Route::post('store', 'store')->name('Store');
        Route::get('edit/{career}', 'edit')->name('Edit');
        // using post for update to handle file upload
        Route::post('update/{career}', 'update')->name('Update');
        Route::delete('delete/{career}', 'destroy')->name('Destroy');
    });

    Route::controller(BackendSystemInformationController::class)->prefix('systemInformation')->name('systemInformation')->group(function () {
        Route::get('edit', 'edit')->name('Edit');
        Route::post('update', 'update')->name('Update');
    });
});

require __DIR__ . '/settings.php';
