import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))
const postDetail: NextPageWithLayout = () => {
  
  return (
    <div className="flex flex-col tablet:mt-3 justify-center placeholder-red-500 mb-4 ">
      <div className="home-row py-10">
        <div className="w-8/12 tablet:w-full">
          <div className="flex items-center gap-x-1">
            <Link href="/">
              <a  className="text-[#216bfe] text-sm">
                Trang chủ
              </a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.5 3L10.5 8L5.5 13"
                stroke="#454749"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link href="/tin-tuc">
              <a  className="text-[#216bfe] text-sm">
                Tin tức
              </a>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.5 3L10.5 8L5.5 13"
                stroke="#454749"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="" className="text-[#216bfe] text-sm">
              Tin thị trường
            </a>
          </div>
          <h2 className="title pt-5 font-['Time-new-roma'] font-semibold text-2xl">
            Lệch pha cung cầu các phân khúc nhà riêng TPHCM
          </h2>
          <div className="flex gap-x-1 pt-4 text-gray-400 text-sm">
            <div className="relative h-5 w-5 mr-2">
              <Image
                src="/default-user.svg"
                layout="fill"
                className="h-5 w-5"
              />
            </div>
            <p>Hoàng Nguyễn</p>
            <span>-</span>
            <p>08/08/2022</p>
          </div>
          <hr className="my-3" />
          <div className="p-5 bg-[#dbedf9] rounded-md">
            <p className="font-semibold text-sm pb-3">MỤC LỤC</p>
            <ul className="text-sm ">
              <li className="cursor-pointer text-[#216bfe] flex items-center">
                <div className="w-1 h-1 bg-[red] ml-1 mr-3"></div>
                Tình hình thị trường bán nhà riêng TPHCM
              </li>
              <li className="cursor-pointer text-[#216bfe] flex items-center">
                <div className="w-1 h-1 bg-[red] ml-1 mr-3"></div>
                Giải bài toán lệch pha cung - cầu phân khúc bán nhà riêng TPHCM
              </li>
            </ul>
          </div>
          <hr className="my-3" />

          <div className="div-head-content-post ">
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
              <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
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
              <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
            </div>
            <div className="content content3">
              <div className="div1-content3 div-content3">
                <div className="box-content">
                  <p>25/7/2022</p>
                  <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
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
                  <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
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
                  <h2>VinhHomes Grand Park Quận 9 nên đầu tư hay lướt qua</h2>
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
        </div>
      </div>
    </div>
  );
};
postDetail.getLayout = (page) => {
  return <PrimaryLayout name="NewsDetail">{page}</PrimaryLayout>;
};
export default postDetail;
