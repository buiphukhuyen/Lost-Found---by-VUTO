//Để sửa thông báo, thì thay đổi nội dung trong dấu "". Ví dụ MAINTENANCE: "[🤖] Server hiện đang bảo trì..." => MAINTENANCE: "[🤖] Đang bảo trì rồi! Bạn vui lòng đợi thông báo nhé!"
//Để phân biệt giữa bot và tin nhắn của người chat thì thêm keyword [BOT] trước thông báo đó! Ở đây do anh dùng ICON mà bên máy em không thấy. Giờ anh đổi lại thành BOT
export default {
  //Được Edit (Thông báo khi bảo trì)
  MAINTENANCE: "[BOT] Server hiện đang bảo trì...",
  //Được Edit (Thông báo mở đầu)
  FIRST_COME:
    "[BOT] Chào mừng bạn đến với Lost Found - By Vuto. Trước khi bắt đầu, hãy chắc chắn rằng bạn đã chọn đúng giới tính người muốn chat cùng.\n\nẤn trợ giúp (hoặc gửi Trợ giúp) để xem thêm.",
  //Được Edit (Thông báo đầu tiên sau mở đầu)
  INSTRUCTION:
    '[BOT] Gửi "À nhon xê dô, hello các bạn bắt đầu chat nha',
  //Được Edit (Thông báo khi ấn vào nút "Trợ giúp")
  HELP_TXT:
    "[BOT] Danh sách các lệnh:\n" +
    "- Bắt đầu chat: Bắt đầu tìm bạn chat\n" +
    "- Kết thúc: Kết thúc chat\n" +
    "- Trợ giúp: Xem trợ giúp\n" +
    " Các lệnh có thể dùng khi đang không chat:\n" +
    "- Chat ngẫu nhiên: Tìm bạn ngẫu nhiên\n" +
    "- Nam - Nữ: Nam tìm Nữ chat cùng\n" +
    "- Nữ - Nam: Nữ tìm Nam chat cùng\n" +
    "- Nam - Nam: Nam tìm Nam chat cùng\n" +
    "- Nữ - Nữ: Nữ tìm Nữ chat cùng",

  //Được Edit (Thông báo khi ấn vào nút "Tìm" (Nam, Nữ, Ngẫu nhiên))
  START_OKAY:
    "[BOT] Đợi xíu nhé! Hệ thống sẽ thông báo ngay cho bạn khi tìm được 💓",
  
  //Được Edit (TB trường hợp chat ngẫu nhiên - không chọn giới tính)
  START_WARN_GENDER:
    "[BOT] Lưu ý: Bạn không chọn Giới tính. Có thể bạn sẽ phải đợi lâu hơn.",
  
  //Được Edit (TB khi đã vào trò chuyện mà ấn vào nút "Tìm" - chỉ khi nào kết thúc mới tìm mới được_
  START_ERR_ALREADY:
    "[BOT] Bạn không thể Bắt đầu Cuộc trò chuyện mới khi chưa Kết thúc...",

  //Được Edit (TB trường hợp đang Tìm bạn chat)
  WAITING:
    '[BOT] Đang tìm bạn Chat... Nếu bạn muốn đổi Giới tính, gửi "Kết thúc" sau đó Chọn Giới tính mới.',
  
  //Được Edit (TB khi đã tìm thấy bạn chat)
  CONNECTED: "[BOT] Ping Ping! Đã tìm thấy bạn rồi! Gửi lời chào với nhau nào!",

  //Được Edit (TB khi kết thúc chat)
  END_CHAT:
    '[BOT] Kết thúc Chat!\nGửi "Bắt đầu chat" hoặc Chọn nút bên dưới để tìm bạn chat. \n[Bổ sung]Hãy Gửi yêu cầu trong trường hợp phát hiện lỗi hay bị quấy rối',
  
  END_CHAT_CONFIRM:
    '[BOT] Bạn có chắc chắn muốn kết thúc?',
      
  //Được Edit (TB khi kết thúc chat - ở phía bên được kết thúc)
  END_CHAT_PARTNER:
    '[BOT] Hic! Bạn ý đã ngắt kết nối rồi \nGửi "Bắt đầu chat" hoặc bấm vào nút để Tìm bạn Chat mới nha!',
  
  //Được Edit (TB khi không tìm ra bạn chat - khi 15 phút)
  END_CHAT_FORCE:
    "[BOT] Hiện tại không tìm thấy được bạn chat phù hợp. Bạn hãy thử lại nhé!",
  
  //Được Edit (TB khi gửi 1 số file k hỗ trợ - chỉ hình ảnh, âm thanh, tin nhắn, icon là hỗ trợ thôi)
  ERR_ATTACHMENT: "[BOT] Lỗi: Chatbot chưa hỗ trợ gửi dạng dữ liệu này!",
  ATTACHMENT_LINK: "[BOT] Bạn ý đã gửi 1 đường Link: ",

  //Được Edit (TB thêm)
  GENDER_ERR:
    "[BOT] Lỗi: Giới tính nhập vào không hợp lệ!\n\nẤn trợ giúp (hoặc gửi Trợ giúp) để xem thêm.",
  GENDER_WRITE_OK: "[BOT] Bạn đã chọn Giới tính mong muốn tìm được là: ",
  GENDER_WRITE_WARN:
    "\n[Thông tin thêm] Like Page và Join Group để xem các tính năng mới nha!",
  
  //Phần này TUYỆT ĐỐI không được Edit (Vì đây là Keyword)
  GENDER_ARR_UNKNOWN: "Cả hai",
  GENDER_ARR_MALE: "Nam-Nữ",
  GENDER_ARR_FEMALE: "Nữ-Nam",
  GENDER_ARR_GAY: "Nam-Nam",
  GENDER_ARR_LES: "Nữ-Nữ",
  
  //Phần này cũng TUYỆT ĐỐI không được Edit
  KEYWORD_START: "batdau",
  KEYWORD_END: "ketthuc",
  KEYWORD_CONFIRM: 'xacnhan',
  KEYWORD_GENDER: "tim",
  KEYWORD_FIND_BOTH: "timnamnu",
  KEYWORD_FIND_MALE: "timnam",
  KEYWORD_FIND_FEMALE: "timnu",
  KEYWORD_FIND_GAY: "timgay",
  KEYWORD_FIND_LES: "timles",
  KEYWORD_GENDER_MALE: "nam",
  KEYWORD_GENDER_FEMALE: "nu",
  KEYWORD_GENDER_BOTH: "namnu",
  KEYWORD_GENDER_GAY: "gay",
  KEYWORD_GENDER_LES: "les",
  KEYWORD_HELP: "trogiup",

  //Được Edit
  ERR_FAKE_MSG: "[BOT] Lỗi: Bạn không được giả mạo tin nhắn của BOT!",
  ERR_DATABASE: "[BOT] Lỗi: Không thể kết nối với Database. Hãy báo cho Admin!",
  ERR_TOO_LONG:
    "[BOT] Lỗi: Tin nhắn quá dài (nhiều hơn 2000 ký tự). Hãy chia nhỏ tin nhắn và gửi dần.",
  ERR_200:
    "[BOT] Bạn Chat không thể nhận tin nhắn do đã xóa Inbox hoặc Block page.",
  ERR_10:
    '[BOT] Bạn Chat không thể nhận tin nhắn do 2 bạn không nói chuyện trong 24h. Gửi "Kết thúc" để kết thúc chat.',
  ERR_SERVER:
    "[BOT] Có lỗi xảy ra với Chatbot. Tin nhắn của bạn chưa được xử lý. Bạn hãy thử lại sau 1 phút nữa nhé.",
  ERR_UNKNOWN:
    '[BOT] Server xảy ra lỗi nhưng không nghiêm trọng lắm\nHãy gửi "Kết thúc" để thoát ra và thử lại',
};
