
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))
const helpPage: NextPageWithLayout = () => {
  

  return (
    <div className="flex flex-col tablet:mt-3 justify-center placeholder-red-500 mb-4 ">
      <div className="home-row bg-slate-100 pb-10 tablet:pb-5">
        <div className="w-9/12 tablet:w-full">
          <h2 className="text-xl text-center font-semibold text-gray-600">
            Trợ giúp & Hướng dẫn
          </h2>
          <p className="text-center text-sm text-gray-500">
            Hướng dẫn chi tiết, dịch vụ và quy định, chính sách của website
          </p>
        </div>
      </div>
      <div className="home-row py-14 tablet:py-7">
        <div className="w-7/12 help-css tablet:w-full">
          <div className="content-help">
            <h2 className="text-gray-900 text-xl font-semibold">Hướng dẫn</h2>
            <ul>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn đăng ký/ đăng nhập tài khoản
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn đăng tin trên máy tính
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn đăng tin trên điện thoại
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn quản lí tin
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn UP tin, gắn nhãn, đăng lại tin
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Hướng dẫn nạp tiền vào tài khoản
                </a>
              </li>
            </ul>
          </div>
          <div className="content-help">
            <h2 className="text-gray-900 text-xl font-semibold">
              Dịch vụ và thanh toán
            </h2>
            <ul>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Bảng phí dịch vụ
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Các phương thức nạp tiền
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Thời gian sử dụng tiền trong tài khoản
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Các tính năng hỗ trợ tin đăng
                </a>
              </li>
            </ul>
          </div>
          <div className="content-help">
            <h2 className="text-gray-900 text-xl font-semibold">
              Quy định về chính sách
            </h2>
            <ul>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Quy định đăng tin
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Quy chế hoạt động
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Chính sách bảo mật thông tin
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Điều khoản thoả thuận
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Giải quyết khiếu nại
                </a>
              </li>
            </ul>
          </div>
          <div className="content-help">
            <h2 className="text-gray-900 text-xl font-semibold">
              Về chúng tôi
            </h2>
            <ul>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Câu hỏi thường gặp
                </a>
              </li>
              <li>
                <a href="" className="text-sm text-[blue] leading-7 underline">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
helpPage.getLayout = (page) => {
  return <PrimaryLayout name="HelpAndRespone">{page}</PrimaryLayout>;
};
export default helpPage;
