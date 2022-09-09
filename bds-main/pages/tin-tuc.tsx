import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))
const postPage: NextPageWithLayout = () => {

 
  return (
    <div className="flex flex-col mt-5 tablet:mt-3 justify-center placeholder-red-500 mb-4 ">
      <div className="home-row pt-3">
        <div className="w-9/12 tablet:w-full">
          <h2 className="text-xl font-semibold text-gray-600 tablet:hidden">
            TIN MỚI
          </h2>
          <div className="navLink">
            <ul className="list-none uppercase flex flex-row flex-wrap gap-x-12 whitespace-nowrap overscroll-none gap-y-5 ul-menu-post tablet:overflow-x-scroll tablet:flex-nowrap tablet:gap-x-4 tablet:w-screen tablet:pb-3">
              <li>
                <a href="#" className="active inline-block">
                  Tin mới
                </a>
              </li>
              <li>
                <a href="#" className="inline-block">
                  Khuyến mãi
                </a>
              </li>
              <li>
                <a href="#">Tin thị trường</a>
              </li>
              <li>
                <a href="#">Phong thuỷ</a>
              </li>
              <li>
                <a href="#">Không gian đẹp</a>
              </li>
              <li>
                <a href="#">Luật nhà đất</a>
              </li>
              <li>
                <a href="#">Mẫu hợp đồng</a>
              </li>
            </ul>
          </div>
          <div className="div-head-content-post tablet:hidden">
            <div className="content content1">
              <div className="image-content">
                <Image
                  className="img"
                  layout="fill"
                  width="100%"
                  height="100%"
                  src="/image_post1.png"
                  alt="..."
                />
              </div>
              <p>25/7/2022</p>
              <Link href="/tin-chi-tiet">
                <h2 className="cursor-pointer">
                  VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua
                </h2>
              </Link>
            </div>
            <div className="content content2">
              <div className="image-content">
                <Image
                  className="img"
                  layout="fill"
                  width="100%"
                  height="100%"
                  src="/image_post2.png"
                  alt="..."
                />
              </div>
              <p>25/7/2022</p>
              <Link href="/tin-chi-tiet">
                <h2 className="cursor-pointer">
                  VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua
                </h2>
              </Link>
            </div>
            <div className="content content3">
              <div className="div1-content3 div-content3">
                <div className="box-content">
                  <p>25/7/2022</p>
                  <Link href="/tin-chi-tiet">
                    <h2 className="cursor-pointer">
                      VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua
                    </h2>
                  </Link>
                </div>
                <div className="image-content">
                  <Image
                    className="img"
                    layout="fill"
                    width="100%"
                    height="100%"
                    src="/image_post1.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="div2-content3 div-content3">
                <div className="box-content">
                  <p>25/7/2022</p>
                  <Link href="/tin-chi-tiet">
                    <h2 className="cursor-pointer">
                      VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua
                    </h2>
                  </Link>
                </div>
                <div className="image-content">
                  <Image
                    className="img"
                    layout="fill"
                    width="100%"
                    height="100%"
                    src="/image_post2.png"
                    alt="..."
                  />
                </div>
              </div>
              <div className="div3-content3 div-content3">
                <div className="box-content">
                  <p>25/7/2022</p>
                  <Link href="/tin-chi-tiet">
                    <h2 className="cursor-pointer">
                      VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua
                    </h2>
                  </Link>
                </div>
                <div className="image-content">
                  <Image
                    className="img"
                    layout="fill"
                    width="100%"
                    height="100%"
                    src="/image_post1.png"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="div-content-content-post">
            <div className="content1">
              <div className="box-content1">
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post3.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <Link href="/tin-chi-tiet">
                      <h2 className="cursor-pointer">
                        Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                      </h2>
                    </Link>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post2.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <Link href="/tin-chi-tiet">
                      <h2 className="cursor-pointer">
                        Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                      </h2>
                    </Link>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post1.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <Link href="/tin-chi-tiet">
                      <h2 className="cursor-pointer">
                        Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                      </h2>
                    </Link>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post2.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <Link href="/tin-chi-tiet">
                      <h2 className="cursor-pointer">
                        Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                      </h2>
                    </Link>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post3.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <h2>
                      Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                    </h2>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
                <div className="card-post-content">
                  <div className="image-card-content-post">
                    <Image
                      className="img rounded-lg"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post2.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-content-post">
                    <h2>
                      Nguy cơ vỡ nợ vì mua đất Hà Nội ven đô chờ quy hoạch
                    </h2>
                    <p className="day-card-content-post">25/7/2022</p>
                    <p className="tablet:hidden">
                      Tăng nhanh và cũng nhanh hạ nhiệt, hiện đất ở những khu
                      sốt đất ven Thủ Đô đang tụt giảm liên tục cả về giá và
                      tính ...
                    </p>
                  </div>
                </div>
              </div>
              <div className="paginate">
                <li className="active">
                  <svg className="icon" width="18" height="18">
                    <defs>
                      <symbol
                        viewBox="0 0 16 26"
                        id="icon-chevron-left"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.003.983A1.5 1.5 0 0013 .8l-.118.098-11.74 10.825A1.985 1.985 0 00.5 13.19a2.003 2.003 0 00.524 1.35l.117.117 11.742 10.825a1.5 1.5 0 002.141-2.096l-.107-.11L3.976 13.189l10.94-10.086a1.5 1.5 0 00.185-2.002l-.098-.118z"></path>
                      </symbol>
                    </defs>
                    <use href="#icon-chevron-left" fill="blueviolet"></use>
                  </svg>
                </li>
                <li className="active">
                  <p>1</p>
                </li>
                <li>
                  <p>2</p>
                </li>
                <li>
                  <p>3</p>
                </li>
                <li>
                  <p>4</p>
                </li>
                <li>
                  <p>5</p>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    width="18"
                    height="18"
                  >
                    <defs>
                      <symbol
                        viewBox="0 0 16 26"
                        id="icon-chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.897.983A1.5 1.5 0 012.9.8l.118.098 11.74 10.825a1.985 1.985 0 01.643 1.469 2.003 2.003 0 01-.524 1.35l-.117.117L3.017 25.483a1.5 1.5 0 01-2.141-2.096l.107-.11 10.941-10.088L.984 3.103A1.5 1.5 0 01.798 1.1L.897.983z"></path>
                      </symbol>
                    </defs>
                    <use href="#icon-chevron-right" fill="blueviolet"></use>
                  </svg>
                </li>
              </div>
            </div>
            <div className="content2">
              <div className="box-content2">
                <p className="title">Có thể bạn quan tâm</p>
                <div className="card-box-content2">
                  <div className="images-card-box-content2">
                    <Image
                      className="img"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post3.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-box-content2">
                    <p>25/7/2022</p>
                    <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
                  </div>
                </div>
                <div className="card-box-content2">
                  <div className="images-card-box-content2">
                    <Image
                      className="img"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post2.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-box-content2">
                    <p>25/7/2022</p>
                    <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
                  </div>
                </div>
                <div className="card-box-content2">
                  <div className="images-card-box-content2">
                    <Image
                      className="img"
                      layout="fill"
                      width="100%"
                      height="100%"
                      src="/image_post1.png"
                      alt="..."
                    />
                  </div>
                  <div className="content-card-box-content2">
                    <p>25/7/2022</p>
                    <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

postPage.getLayout = (page) => {
  return <PrimaryLayout name="post">{page}</PrimaryLayout>;
};
export default postPage;
