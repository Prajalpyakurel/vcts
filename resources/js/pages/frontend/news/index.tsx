import {
    blogShow,
    newsShow,
} from '@/actions/App/Http/Controllers/Frontend/IndexController';
import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { InformationPagination } from '@/pages/backend/information/types';
import { Link, router } from '@inertiajs/react';
import { CalendarIcon } from 'lucide-react';

export default function Index({
    news_s,
    recentNews,
}: {
    news_s: InformationPagination;
    recentNews: InformationPagination;
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'News', href: '/news', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="News"
            breadcrumbs={breadcrumbs}
            pageTitle="News"
        >
            <div className="gap-30px mx-auto flex flex-wrap py-20 md:flex-nowrap">
                {/* Activities List */}
                <div className="gap-30px bg-bodyBg2 flex w-full flex-col divide-y rounded">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {news_s.data.length > 0
                            ? news_s.data.map((item, index) => {
                                  return (
                                      <div
                                          key={index}
                                          className="shadow-blog group overflow-hidden rounded bg-white"
                                      >
                                          {/* Image */}
                                          <div className="overflow-hidden">
                                              <img
                                                  src={
                                                      item.image
                                                          ? `storage/${item.image}`
                                                          : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F017%2F756%2F694%2Fnon_2x%2Fgallery-icon-simple-design-vector.jpg&f=1&nofb=1&ipt=484d0d97736d39dfadc0efc4823099b39857229b64d9476fa8ae8ed3421a993d'
                                                  }
                                                  alt={item.title}
                                                  className="h-20rem w-full object-cover transition duration-300 group-hover:scale-110"
                                              />
                                          </div>

                                          {/* Content */}
                                          <div className="p-5">
                                              <h2 className="text-blackColor mb-3 font-bold">
                                                  {item.title}
                                              </h2>

                                              <p className={'flex gap-2'}>
                                                  {' '}
                                                  <CalendarIcon
                                                      size={23}
                                                  />{' '}
                                                  {item.formatted_date}
                                              </p>

                                              <button
                                                  onClick={() =>
                                                      router.visit(
                                                          newsShow(item.slug)
                                                              .url,
                                                      )
                                                  }
                                                  className="main-button main-button--primary-alternate mt-15px"
                                              >
                                                  View Details
                                              </button>
                                          </div>
                                      </div>
                                  );
                              })
                            : 'No News Found!'}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="max-w-form-xl w-full">
                    <div className="shadow-blog rounded bg-white p-5">
                        <h4 className="mb-4 text-lg font-bold">
                            Recent Information's
                        </h4>

                        <ul className="space-y-3">
                            {recentNews.data.length > 0
                                ? recentNews.data.map((act) => (
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
