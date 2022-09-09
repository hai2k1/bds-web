
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'))
const qaaPage: NextPageWithLayout = () => {

  return (
    <div className="flex flex-col tablet:mt-3 justify-center placeholder-red-500 mb-4 ">
      <div className="home-row py-10">
        <div className="w-9/12 tablet:w-full">
          <h2 className="text-xl font-semibold text-gray-600">
            Câu hỏi thường gặp
          </h2>
          <hr className="my-3" />
          <div className="content pt-10">
            <h2 className="text-gray-900 font-semibold text-sm mb-4">
              I. Các loại hình tin đăng và hướng dẫn đăng tin
            </h2>
            <ul className="text-sm font-semibold text-[#035797]">
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Câu hỏi về các loại hình tin đăng trên Sangnhadat.com
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">Câu hỏi liên quan đến gói tin</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">Tôi muốn đăng tin thì làm thế nào?</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Sangnhadat.com có đăng tin tiếng Anh không? Chi phí và cách
                  thức đăng thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Đăng tin không đăng ký tài khoản thành viên có được không? Lợi
                  ích của việc đăng tin bằng Tài khoản thành viên thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Làm sao để chèn video, ảnh thường và ảnh 360* vào tin đăng?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi đang đăng tin trên website, hệ thống báo lỗi 'có các thông
                  tin bị lỗi' thì phải làm sao?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi có thể sửa và không sửa những trường thông tin nào khi tin
                  rao đang được hiển thị?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  {' '}
                  Tôi có thể đăng tin chọn đăng tin hưởng ưu đãi gói tin và
                  khuyến mại 2 như thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi thêm số điện thoại vào tin đăng sao không được duyệt tin?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi đang tin thời gian 1 tháng trở lên có được khuyến mại gì
                  không?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi có thể tìm tin đã đăng của tôi trên website bằng cách nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="content pt-5">
            <h2 className="text-gray-900 font-semibold text-sm mb-4">
              II. Các tính năng hỗ trợ đăng tin
            </h2>
            <ul className="text-sm font-semibold text-[#035797]">
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Up tin là gì? Điều kiện và chi phí up tin thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi muốn đăng lại tin đã hết hạn phải làm như thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi muốn xoá tin phải làm như thế nào?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Tôi có thể xem lượt hiển thị và lượt xem tin rao ở đâu?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Hạ tin hoặc xoá tin đang hiện thị, tôi có được hoàn tiền
                  không?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Sangnhadat.com có chức năng đăng tin hiển thị luôn không cẩn
                  kiểm duyệt không?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="content pt-5">
            <h2 className="text-gray-900 font-semibold text-sm mb-4">
              III. Quy định đăng tin
            </h2>
            <ul className="text-sm font-semibold text-[#035797]">
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Các vấn đề liên quan đến Quy định đăng tin trên Sangnhadat.com
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
          <div className="content pt-5">
            <h2 className="text-gray-900 font-semibold text-sm mb-4">
              IV. Một số mẹo đăng tin hiệu quả
            </h2>
            <ul className="text-sm font-semibold text-[#035797]">
              <li className="p-3 pl-5 tablet:pr-10 border-solid border relative mt-3 cursor-pointer">
                <h2 className="text-sm">
                  Mách tôi một số mẹo đăng tin hiệu quả
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="absolute top-1/2 right-1 -translate-y-2/4"
                >
                  <path
                    d="M5.5 3L10.5 8L5.5 13"
                    stroke="#454749"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="content pt-12">
            <h2 className="text-gray-900 font-semibold text-sm mb-2 leading-8">
              Cần hỗ trợ, tư vấn thêm thông tin bạn vui lòng liên hệ:
            </h2>
            <p className="text-sm leading-8">
              Tổng đài CSKH:{' '}
              <a className="font-semibold" href="tel:+0888800032">
                0.8888.000.32
              </a>
            </p>
            <p className="text-sm leading-8">
              Email:{' '}
              <a href="mailto:" className="text-[blue]">
                cskh@sangnhadat.com
              </a>{' '}
              -{' '}
              <a href="mailto:" className="text-[blue] ">
                admin@sangnhadat.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
qaaPage.getLayout = (page) => {
  return <PrimaryLayout name="QnA">{page}</PrimaryLayout>;
};
export default qaaPage;
