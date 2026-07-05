import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import { Information } from '@/pages/backend/information/types';

export default function Index({
    informations,
}: {
    informations: Information[];
}) {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'Information', href: '/informations', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Information"
            breadcrumbs={breadcrumbs}
            pageTitle="Information"
        >
            <div className="gap-30px mx-auto flex flex-wrap py-20 md:flex-nowrap">
                {/* Information List */}
                <div className="gap-30px bg-bodyBg2 flex w-full flex-col divide-y rounded">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {informations.length > 0
                            ? informations.map((information, index) => {
                                  return (
                                      <div
                                          className="shadow-dropdown-secodary bg-transparent"
                                          key={index}
                                      >
                                          <div className="group relative">
                                              <img
                                                  src={`/storage/${information.image}`}
                                                  alt={information.title}
                                                  className="h-150 w-full"
                                              />
                                          </div>
                                          <div className="pl-30px lg:pr-10px 2xl:pl-30px pr-5 pb-10 md:px-10 md:py-5 lg:pb-10 lg:pl-5 2xl:pr-5 2xl:pb-10">
                                              <div
                                                  className={
                                                      'flex items-center justify-between'
                                                  }
                                              >
                                                  <p className="text-primaryColor mb-15px mt-5 text-base font-bold uppercase md:mt-0">
                                                      {
                                                          information.formatted_date
                                                      }
                                                  </p>
                                                  <p className="text-primaryColor mb-15px mt-5 text-base font-bold uppercase md:mt-0">
                                                      <span className="text-primaryColor bg-whitegrey3 py-5px mb-5 inline-block px-2 text-xs font-semibold">
                                                          { information.type }
                                                      </span>
                                                  </p>
                                              </div>
                                              <h5>
                                                  <a
                                                      href="#"
                                                      className="text-blackColor dark:text-blackColor-dark hover:text-primaryColor dark:hover:text-primaryColor mb-15px leading-8 font-bold md:text-xl md:leading-7 2xl:leading-8"
                                                      style={{
                                                          display:
                                                              '-webkit-box',
                                                          WebkitLineClamp: 2,
                                                          WebkitBoxOrient:
                                                              'vertical',
                                                          overflow: 'hidden',
                                                      }}
                                                  >
                                                      {information.title}
                                                  </a>
                                              </h5>

                                              <button className="main-button main-button--primary-alternate">
                                                  Read More
                                              </button>
                                          </div>
                                      </div>
                                  );
                              })
                            : 'No Informations Found!'}
                    </div>
                </div>
            </div>
        </BannerPageLayout>
    );
}
