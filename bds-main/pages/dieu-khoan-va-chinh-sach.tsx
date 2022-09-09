
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '../page';
const PrimaryLayout=  dynamic(() => import('../components/layouts/PrimaryLayout'),{ssr:false})
const qaaPage: NextPageWithLayout = () => {
 
  return (
    <div className="flex flex-col tablet:mt-3 justify-center placeholder-red-500 mb-4 ">
      <div className="home-row py-10 tablet:py-5">
        <div className="w-9/12 tablet:w-full">
          <h2 className="text-xl font-semibold text-gray-600">
            Các điều khoản và điều kiện
          </h2>
          <hr className="my-3" />
          <p className="text-sm text-gray-600">
            Tài liệu này đưa ra các Điều khoản và Điều kiện ("Điều khoản") mà 99
            Pte Ltd (Số đăng ký Công ty 201402361C) của # 05-14 'Block 71', 71
            Ayer Rajah Crescent, Singapore 139951 ("99") cung cấp cho khách hàng
            truy cập vào các dịch vụ quản lí tuyển dụng nhất định thông qua
            trang web www.99.co ("Trang web").
            <br />
            <br />
            Vui lòng đọc kỹ các điều khoản này trước khi sử dụng trang web và 99
            dịch vụ. Bạn xác nhận và đồng ý rằng bằng cách nhấp vào 'Tôi đồng ý
            với các khoản mục', bạn cho biết rằng bạn đã đọc, hiểu và đồng ý bị
            ràng buộc bởi thoả thuận này. Nếu bạn chấp nhận hoặc đồng ý với thoả
            thuận này thay mặt cho công ty hoặc tổ chức được chỉ định ('trong
            Khách hàng'), bạn đồng ý rằng công ty hoặc tổ chức sẽ bị ràng buộc
            bỏi các điều khoản này với tư cách là khách hàng. Bạn đảm bảo và
            tuyên bố rằng bạn có đầy đủ năng lực và thẩm quyền để ký kết thoả
            thuận này thay mặt cho công ty hoặc tổ chức của khách hàng
            <br />
            <br />
            Nếu bạn không chấp nhận với các điều khoản này, bạn sẽ không thể sử
            dụng trang web và các dịnh vụ. Bạn nên in và giữ lại một bản sao của
            các điều khoản này để tham khảo trong tương lại.
          </p>
          <div className="text-sm text-gray-600 py-5">
            <p className="font-semibold">1. Trang web và các dịch vụ</p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.1. Trang web được sở hửu và quản lí bởi 99 Pte Ltd(Số đăng ký
              công ty 201402361C) của # 05-14 'Block 71', 71 Ayer Rajah
              Crescent, Singapore 139951.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.2. Để xem xét việc thanh toán Phí, 99 sẽ cung cấp cho Khách hàng
              các dịch vụ như được mô tả trên Trang web, cho phép Khách hàng
              duyệt, đăng nhập và quản lý danh sách của mình ('Dịch vụ'). Dịch
              vụ thường bao gồm các tính năng chính sau:
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.1. Cơ sở để tạo "Danh sách", có nghĩa là mô tả về tài sản mà
              Khách hàng đang muốn mua hoặc thuê.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.2. Cơ sở để tải lên "Thông tin tài sản", có nghĩa là thông tin
              về tài sản của Khách hàng hoặc bất kỳ danh sách nào.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.3. Cơ sở phân phối hoặc tải lên từ "Phương tiện khác", bao gồm
              nhưng không giới hạn ở tất cả các phương tiện truyền thông in ấn
              và phát sóng, các trang web và cổng thông tin tài sản.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.4. Khả năng xuất bản và xuất Danh sách sang phương tiện khác.
              nơi chúng có thể được hiển thị cho "Người thuê" tiềm năng, nghĩa
              là người đang tìm thuê hoặc "người mua" tiềm năng, nghĩa là người
              đang tìm mua.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.5. Khả năng nhập Danh sách từ phương tiện khác, trong trường
              hợp đó. Khách hàng xác nhận rằng họ là người được uỷ quyền để liệt
              kê các tài sản nói trên và có quyền đối với tất cả nội dung liên
              quan đến Danh sách đó. Và khi làm như vậy cho phép và hướng dẫn 99
              sao chép và phân phối các Danh sách đó và tất cả nội dung liên
              quan, đồng thời chịu trách nhiệm về quá trình sao chép và phân
              phối các Danh sách đó.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.2.6. Bất kỳ tính năng và chức năng nào khác được 99 cung cấp cho
              Khách hàng vào từng thời điểm.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.3. Để tránh nghi nghờ, các nghĩa vụ của 99 sẽ chỉ giới hạn trong
              việc cung cấp các dịch vụ và không bao gồm hành động thay mặt
              Khách hàng theo bất kỳ cách nào. Không có nội dung nào trong các
              Điều khoản này nhằm mục đích hoặc sẽ được coi là thiết lặp bất kỳ
              quan hệ đối tác hoặc liên doanh nào giữa Khách hàng với 99, chỉ
              định một trong hai bên làm đại lý của bên kia, cũng như uỷ quyền
              cho một trong hai bên thực hiện hoặc cam kết bất kỳ yêu cầu nào
              cho hoặc về thay mặt cho bên kia.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.4. 99 đôi khi có thể thêm, sửa đổi, tạm dừng hoặc ngừng (tạm
              thời hoặc vĩnh viễn) việc cung cấp bất kỳ yếu tố nào của Dịch vụ
              khi thông báo cho khách hàng.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.5. 99 sẽ không có nghĩa vụ thông báo cho Khách hàng trong trường
              hợp dịch vụ ngừng hoạt động ngoài kế hoạch. Trong trường hợp dịch
              vụ ngừng hoạt động theo kế hoạch đối với Dịch vụ hoặc Trang web.
              99 sẽ sử dụng những nỗ lực hợp lý của mình để thông báo trước cho
              Khách hàng với điều kiện 99 có thể làm như vậy.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              1.6. Quyền truy cập Trang web và Dịch vụ có thể được cung cấp cho
              Khách hàng trên cơ sở dùng thử hoặc 'miễn phí'(bản dùng thử).
              Khách hàng thừa nhận và đồng ý rằng trong thời gian Dùng thử, các
              điều khoản và điều kiện này sẽ được áp dụng, cũng như các điều
              kiện cụ thể sau:
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.6.1. Quyền truy cập vào Dịch vụ trong thời gian Dùng thử sẽ được
              cung cấp miễn phí cho Khách hàng.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.6.2. Quyền truy cập đó chỉ nhằm mục đích cung cấp cho Khách hàng
              bản trình diễn xem trước về chức năng và tính năng của Dịch vụ.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.6.3. Chức năng và tính năng của dịch vụ trong thời gian dùng thử
              có thể bị giới hạn hoặc hạn chế.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              1.6.4. 99 có thể rút lại hoặc đình chỉ quyền truy cập của khách
              hàng vào Dịch vụ bất kỳ lúc nào trong thời gian Dùng thử khi kết
              thức. Thời gian dùng thử, việc tiếp tục truy cập vào Trang web và
              / hoặc Dịch vụ sẽ phải trả phí hoặc lệ phí.
            </p>
            <p className="font-semibold pt-5">2. Sự đăng ký</p>
            <p className="pl-10 pt-3 tablet:pl-4">
              2.1. Để sử dụng Dịch vụ, trước tiên Khách hàng phải đăng ký bằng
              cách hoàn thành mẫu đăng ký trực tuyến trên Trang web.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              2.2. 99 sẽ gửi cho khách hàng một email xác nhận ("Email xác
              nhận") sau khi nó đã chấp nhận và xác nhận đăng ký của khách hàng.
              Hợp đồng sử dụng Dịch vụ của Khách hàng theo các Điều khoản này
              ("Hợp đồng") bắt đầu vào ngày có Email xác nhận.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              2.3. 99 có quyền tiến hành các thủ tục xác minh và bảo mật với tất
              cả thông tin do Khách hàng cung cấp cho 99. Nếu 99 có lý do để tin
              rằng thông tin do Khách hàng cung cấp để đăng ký và sử dụng bất kỳ
              Dịch vụ nào vi phạm hoặc có khả năng vi phạm bất kỳ quy định trong
              các Điều khoản này. 99 theo quyết định riêng của mình có thể trực
              tiếp thực hiện bất kỳ hành động nào mà mình cho là phù hợp bao gồm
              nhưng không giới hạn, để chấm dứt hợp đồng của Khách hàng.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              2.4. Vào bất kỳ thời điểm nào sau khi thông báo cho Khách hàng. 99
              có thể yêu cầu Khách hàng thực hiện bất kỳ tài liệu nào khác để
              xác nhận việc Khách hàng chấp nhận hoặc có hiệu lực đầy đủ với các
              Điều khoản này.
            </p>
            <p className="font-semibold pt-5">3. Nghĩa vụ của khách hàng</p>
            <p className="pl-10 pt-3 tablet:pl-4">
              3.1. Khách hàng phải luôn sử dụng Dịch vụ và Trang web theo các
              Điều khoản này.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              3.2. Khách hàng phải đảm bảo rằng việc sử dụng các Dịch vụ và /
              hoặc Trang web của mình, bao gồm việc gửi bất kỳ thông tin, dữ
              liệu, hình ảnh, video, âm thanh, tệp tin, liên kết, đến các trang
              web bên ngoài, giao tiếp giữa Khách hàng với Người mua/ Người
              thuê, và tất cả nhưng thứ khác tài liệu ở bất kỳ định dạng nào
              ("Bài nộp"):
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.2.1. Tuân thủ tất cả các luật và quy định hiện hành.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.2.2. Không vi phạm bất kỳ quyền sở hữu trí tuệ hoặc quyền sở hữu
              khác của bất kỳ bên thứ ba nào:
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.2.3. Không hợp lý đươc coi là:{' '}
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.1. Xúc phạm, bất hợp pháp, không phù hợp theo bất kỳ cách
              nào.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.2. Cổ vũ phân biệt chủng tộc, cố chấp, hận thù hoặc tổn hại
              thế chất dưới bất kỳ hình thức nào chống lại bất kỳ nhóm hoặc cá
              nhân nào.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.3. Quấy rối hoặc ủng hộ việc quấy rối người khác.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.4. Hiện thị tài liệu khiêu dâm hoặc tình dục rõ ràng.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.5. Thúc đẩy bất kỳ hành vi lăng mạ, đe doạ, khiêu dâm, nói
              xấu hoặc bôi nhọ.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.6. Thúc đẩy bất kỳ hoạt động bất hợp pháp nào.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.7. Cung cấp thông tin hướng dẫn về các hoạt động bất hợp
              pháp, bao gồm vi phạm quyền riêng tư của người khác.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.8. Tạo vi rút máy tính.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.9. Quảng bá hoặc chứa thông tin mà bạn biết hoặc tin là
              không chính xác, sai sự thật, gây hiểu nhầm.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.10. Tham gia vào việc quảng bá các cuộc thi, rút thăm trúng
              thưởng và các chương trình kim tự tháp mà không có sự đồng ý bằng
              văn bản của chúng tôi.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.11. Bóc lột người khác theo cách tình dục hoặc bạo lực.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.12. Xâm phạm hoặc vi phạm quyền riêng tư của bất kỳ bên thứ
              ba nào.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              3.2.3.13. Truyền "thư rác", hoặc "thư dây chuyền", hoặc gửi thư
              hàng loạt không theo yêu cầu, tin nhắn hoặc "gửi thư rác" và.
            </p>
            <p className="pl-28 pt-3 tablet:pl-12">
              Khách hàng theo đây bồi thường cho 99 đối với tất cả các tổn thất,
              trách nhiệm pháp lý, chi phí và chi phí (bao gồm nhưng không giới
              hạn ở chi phí pháp lí) phải chịu hoặc gánh chịu bởi 99 phát sinh
              trực tiếp hoặc gián tiếp do Khách hàng vị phạm điều khoản 3.3 .
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              3.3. Trừ khi được tuyên bố rõ ràng bởi 99, 99 không kiểm tra, xác
              minh tính chính xác, đúng đắn và đầy đủ, chỉnh sửa hoặc sửa đổi
              bất kỳ Nội dung đệ trình nào hoặc bất kỳ thông tin, dữ liệu và tài
              liệu nào khác được Khách hàng tạo, sử dụng và / hoặc xuất bản trên
              Trang web để xác minh xem chúng có thể dẫn đến bất kỳ trách nhiệm
              pháp lý nào đối với bất kỳ bên thứ ba nào. Khách hàng theo đây đảm
              bảo rằng Khách hàng có quyền sử dụng tất cả các thông tin và tài
              liệu đó.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              3.4. Bất chấp điều khoản 3.3, 99 có quyền từ chới xuất bản bất cứ
              Nội dung nào hoặc xoá hoặc chỉnh sửa Nội dung đệ trình (toàn bộ
              tài liệu hoặc một phần) bất kỳ lúc nào, nếu 99 có lý do để tin vào
              việc Khách hàng sử dụng Dịch vụ và / hoặc Trang web vi phạm các
              Điều khoản này.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">3.5. Khách hàng sẽ không:</p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.5.1. Bất cứ lúc nào sử dụng Dịch vụ và / hoặc Trang web với mục
              đích mạo danh Người dùng hoặc cá nhân khác.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.5.2. Sử dụng thông tin có sẳn cho Khách hàng thông qua việc sử
              dụng Dịch vụ và / hoặc Trang web cho bất kỳ mục địch nào khác
              ngoài mục đích thu được lợi ích từ Dịch vụ và / hoặc Trang web.
            </p>
            <p className="pl-20 pt-3 tablet:pl-8">
              3.5.3. Làm bất cứ điều gì sẽ hoặc có khả năng làm suy yếu, làm
              hỏng hoặc gây tổn hại hoặc đau khổ cho bất kỳ người nào sử dụng
              Dịch vụ và / hoặc Trang web hoặc liên quan đến mạng.
            </p>
            <p className="pl-10 pt-3 tablet:pl-4">
              3.6. 99 Coi trọng việc vi phạm khoản 3 này và do đó có quyền thực
              hiện bất kỳ hành động nào mà 99 cho là cần thiết. Điều này có thể
              bao gồm, nhưng không giới hạn, tạm dừng hoặc chấm dứt việc sử dụng
              Dịch vụ và / hoặc quyền truy cập vào trang web của Khách hàng.
              Trong một số trường hợp nhất định, 99 có thể khợi động các thủ tục
              pháp lý nếu thích hợp nếu có hành vi sử dụng bất hợp pháp Dịch vụ
              và / hoặc Trang web hoặc tiết lộ thông tin cho bất kỳ bên thứ 3
              nào tuyên bố rằng bất kỳ tài liệu nào do bạn đăng hoặc tải lên
              trang web của chúng tôi đều là vi phạm quyền sở hữu trí tuệ của họ
              hoặc quyền riêng tư của họ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
qaaPage.getLayout = (page) => {
  return <PrimaryLayout name="Rule">{page}</PrimaryLayout>;
};
export default qaaPage;
