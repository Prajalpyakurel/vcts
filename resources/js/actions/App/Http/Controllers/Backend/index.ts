import IndexController from './IndexController'
import ContactController from './ContactController'
import HeroSectionController from './HeroSectionController'
import CourseController from './CourseController'
import StudentFeedbackController from './StudentFeedbackController'
import CurriculumController from './CurriculumController'
import CurriculumSyllabusController from './CurriculumSyllabusController'
import FacultyController from './FacultyController'
import BoardMemberMessageController from './BoardMemberMessageController'
import EventController from './EventController'
import DownloadController from './DownloadController'
import InformationController from './InformationController'
import GalleryController from './GalleryController'
import CareerController from './CareerController'
import SystemInformationController from './SystemInformationController'
import Settings from './Settings'
const Backend = {
    IndexController: Object.assign(IndexController, IndexController),
ContactController: Object.assign(ContactController, ContactController),
HeroSectionController: Object.assign(HeroSectionController, HeroSectionController),
CourseController: Object.assign(CourseController, CourseController),
StudentFeedbackController: Object.assign(StudentFeedbackController, StudentFeedbackController),
CurriculumController: Object.assign(CurriculumController, CurriculumController),
CurriculumSyllabusController: Object.assign(CurriculumSyllabusController, CurriculumSyllabusController),
FacultyController: Object.assign(FacultyController, FacultyController),
BoardMemberMessageController: Object.assign(BoardMemberMessageController, BoardMemberMessageController),
EventController: Object.assign(EventController, EventController),
DownloadController: Object.assign(DownloadController, DownloadController),
InformationController: Object.assign(InformationController, InformationController),
GalleryController: Object.assign(GalleryController, GalleryController),
CareerController: Object.assign(CareerController, CareerController),
SystemInformationController: Object.assign(SystemInformationController, SystemInformationController),
Settings: Object.assign(Settings, Settings),
}

export default Backend