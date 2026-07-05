import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import {
    Information,
    InformationPagination,
} from '@/pages/backend/information/types';
import { Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { CalendarIcon } from 'lucide-react';

export default function Index({
    notice,
    recentNotices,
}: {
    notice: Information;
    recentNotices: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Notice', href: '/notices', isActive: false },
        { title: notice.title, href: '#', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Notice Detail"
            breadcrumbs={breadcrumbs}
            pageTitle="Notice"
        >
            <div className="gap-30px mx-auto flex flex-wrap py-20 md:flex-nowrap">
                {/* Notices List */}
                <div className="gap-30px bg-bodyBg2 flex w-full flex-col divide-y rounded">
                    <div className="w-full overflow-hidden bg-white shadow-lg">
                        {/* Notice Image */}
                        <div className="h-72 w-full bg-gray-200">
                            <img
                                src={
                                    notice.image
                                        ? `/storage/${notice.image}`
                                        : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F756%2F694%2Fnon_2x%2Fgallery-icon-simple-design-vector.jpg&f=1&nofb=1&ipt=484d0d97736d39dfadc0efc4823099b39857229b64d9476fa8ae8ed3421a993d'
                                }
                                alt={notice.title}
                                className="max-h-dropdown h-full w-full object-cover"
                            />
                        </div>

                        {/* Notice Content */}
                        <div className="p-5 md:p-8">
                            <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                                {notice.title}
                            </h1>
                            <p className={'flex gap-2'}>
                                <CalendarIcon size={23} />
                                {notice.formatted_date}
                            </p>

                            {/* Description */}
                            <div
                                className="prose mt-5 max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(notice.description),
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
                            {recentNotices.data.length > 0
                                ? recentNotices.data.map((act) => (
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
