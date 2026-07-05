import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import {
    Information,
    InformationPagination,
} from '@/pages/backend/information/types';
import { Link } from '@inertiajs/react';
import { CalendarIcon } from 'lucide-react';

export default function Index({
    activity,
    recentActivities,
}: {
    activity: Information;
    recentActivities: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Activity', href: '/activities', isActive: false },
        { title: activity.title, href: '#', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Activity Detail"
            breadcrumbs={breadcrumbs}
            pageTitle="Activity"
        >
            <div className="gap-30px mx-auto flex flex-wrap py-20 md:flex-nowrap">
                {/* Activities List */}
                <div className="gap-30px bg-bodyBg2 flex w-full flex-col divide-y rounded">
                    <div className="w-full overflow-hidden bg-white shadow-lg">
                        {/* Activity Image */}
                        <div className="h-72 w-full bg-gray-200">
                            <img
                                src={
                                    activity.image
                                        ? `/storage/${activity.image}`
                                        : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F756%2F694%2Fnon_2x%2Fgallery-icon-simple-design-vector.jpg&f=1&nofb=1&ipt=484d0d97736d39dfadc0efc4823099b39857229b64d9476fa8ae8ed3421a993d'
                                }
                                alt={activity.title}
                                className="max-h-dropdown h-full w-full object-cover"
                            />
                        </div>

                        {/* Activity Content */}
                        <div className="p-5 md:p-8">
                            <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                                {activity.title}
                            </h1>
                            <p className={'flex gap-2'}>
                                <CalendarIcon size={23} />
                                {activity.formatted_date}
                            </p>

                            {/* Description */}
                            <div
                                className="prose mt-5 max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: activity.description,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="max-w-form-xl w-full">
                    <div className="shadow-blog rounded bg-white p-5">
                        <h4 className="mb-4 text-lg font-bold">
                            Recent Information's
                        </h4>

                        <ul className="space-y-3">
                            {recentActivities.data.length > 0
                                ? recentActivities.data.map((act) => (
                                      <li key={act.id} className={'p-3'}>
                                          <div className={'gap-15px flex'}>
                                              <img
                                                  src={
                                                      act.image
                                                          ? `/storage/${act.image}`
                                                          : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F756%2F694%2Fnon_2x%2Fgallery-icon-simple-design-vector.jpg&f=1&nofb=1&ipt=484d0d97736d39dfadc0efc4823099b39857229b64d9476fa8ae8ed3421a993d'
                                                  }
                                                  alt={act.title}
                                                  className={
                                                      'h-66px w-66px rounded-lg object-cover'
                                                  }
                                              />
                                              <div>
                                                  <Link
                                                      href={`/${act.type}/${act.slug}`}
                                                      className="text-blackColor hover:text-primaryColor text-sm transition"
                                                  >
                                                      {act.title}
                                                  </Link>
                                                  <br />
                                                  <span className="text-primaryColor bg-whitegrey3 py-5px mb-5 inline-block rounded-lg px-2 text-xs font-semibold capitalize">
                                                      {act.type}
                                                  </span>
                                              </div>
                                          </div>
                                      </li>
                                  ))
                                : "No recent information's found."}
                        </ul>
                    </div>
                </aside>
            </div>
        </BannerPageLayout>
    );
}
