
import Image from 'next/image';
import type { IFooter } from '../../interfaces/interfaces';
const Footer: React.FC<IFooter> = ({ ...footerProps }) => {

  return (
    <footer
      {...footerProps}
      className={`w-full py-5 bg-slate-100 px-10 tablet:p-0 tablet:pb-8 `}
    >
      <div className="flex justify-center ">
        <div className="w-9/12 bigger:w-7/12 flex flex-row justify-between space-x-3 tablet:w-full tablet:px-8 tablet:py-5 tablet:grid  gap-2 ">
          <div className="  flex-[2_1_0%] flex flex-col  space-y-6 tablet:col-start-1 tablet:mb-4 tablet:cols-end-3 col-span-2">
            <div>
              <h3 className="font-bold mb-4">Chào mừng bạn đến với 99.co!</h3>
              <p className="text-base">99.co là cổng thông tin bất động sản phát triển nhanh nhất Singpore. i chúng tôi, bạn sẽ cảm thấy như đang ở nhà khi tìm kiếm nhà ở, chung cư, căn hộ, và bán và cho thuê tại Singapore</p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-row">
                <div className="w-5 h-5 relative mr-3">
                  <Image layout='fill' src="/mail-footer.svg" />
                </div>
                <p>Yêu cầu</p>
              </div>
              <div>
                <p className="ml-8">Tổng hợp: helol@99.co</p>
              </div>
              <div>
                <p className="ml-8">Quảng cáo: ads@99.co</p>
              </div>
              <div className="flex flex-row">
                <div className="w-5 h-5 mr-3 relative">
                  <Image layout='fill' src="/phone-footer.svg" />
                </div>

                <p>+65 646 0552 (10 giờ sáng - 6 giờ tối, Thứ Hai - Thứ Sáu)</p>
              </div>
              <div className="flex flex-row">
                <div className="w-5 h-5 mr-3 relative">
                  <Image layout='fill' src="/facebook-footer.svg" />
                </div>
                <p>Nhóm facebook Đại lý 99.co</p>
              </div>

            </div>
          </div>
          <div className=" space-y-4  flex-1 tablet:col-start-1 tablet:cols-end-2">
            <div>
              <h3 className="font-bold  mb-4">Công ty</h3>
            </div>
            <div>
                Về chúng tôi
            </div>
            <div>
                Hỏi chúng tôi bất cứ điều gì
            </div>
            <div>
                Nhóm (chúng tôi đang tuyển dụng)
            </div>
            <div>
                Blog
            </div>
            <div>
                Nhận xét
            </div>
            <div>
                Các điều khoản và điều kiện
            </div>
            <div>
                Chính sách bảo mật
            </div>
          </div>
          <div className="space-y-4  flex-1 tablet:col-start-2 tablet:cols-end-3">
            <div>
              <h3 className="font-bold  mb-4">Phát hiện</h3>
            </div>
            <div>
                Nhà nghiên cứu
            </div>
            <div>
                Báo cáo trang chủ cho đại lý
            </div>
            <div>
                Bán đất
            </div>
            <div>
                Quảng cáo với 99 Group
            </div>
            <div>
                Các vùng lân cận
            </div>
            <div>
                Tài sản gần ga tàu điện ngầm
            </div>
            <div>
                Danh mục chung cư
            </div>
            <div>
                Ứng dụng di động cho người tìm nhà
            </div>
            <div>
                Sơ đồ trang web
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
