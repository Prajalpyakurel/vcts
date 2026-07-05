import BannerPageLayout from '@/layouts/frontend/app/banner-page-layout';
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedinIn, FaPhone,
    FaWhatsapp,
    FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export default function Show() {
    const breadcrumbs = [
        { title: 'Home', href: '/', isActive: false },
        { title: 'About', href: '', isActive: false },
        { title: 'Teacher Details', href: '/teachers/teacher_details', isActive: true },
    ];

    return (
        <BannerPageLayout
            title="Teachers Details"
            breadcrumbs={breadcrumbs}
            pageTitle="Teachers Details"
        >
            <div className="team-single pt-120 pb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="team-single-img">
                                <img src={'/assets/team/01.jpg'} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="team-details">
                                <h3>Carson S. Stuckey</h3>
                                <strong>Senior Teacher</strong>
                                <p className="mt-3">
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters
                                    packages and web page editors now packages
                                    and web page editors now use. All the Lorem
                                    Ipsum generators on the Internet tend to
                                    repeat predefined chunks.
                                </p>
                                <div className="team-details-info">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <FaLocationDot/>{' '}
                                                25/B Milford Road, New York
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaEnvelope/>{' '}
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="44272536372b2a04213c25293428216a272b29"
                                                >
                                                    [email&#160;protected]
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <FaPhone/>{' '}
                                                +2 123 456 7892
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team-details-social">
                                    <a href="#" target={'_blank'}>
                                        <FaFacebook />
                                    </a>
                                    <a href="#" target={'_blank'}>
                                        <FaWhatsapp />
                                    </a>
                                    <a href="#" target={'_blank'}>
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="#" target={'_blank'}>
                                        <FaYoutube />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="biography-skil pb-120">
                <div className="container">
                    <div className="row">
                        <div className="biography">
                            <h4 className="mb-3">Message</h4>
                            <p className="mb-10">
                                Sed ut perspiciatis unde omnis totam rem
                                chitecto beatae vitae dicta sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed quia non
                                numquam eius modi tempora incidunt ut labore et
                                dolore magnam aliquam quaerat voluptatem. If you
                                are going to use a passage of you need to hidden
                                in the middle of text.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </BannerPageLayout>
    );
}
