import React from "react";
import "./App.css";
import avatar from "./assets/anh.jpg";

function App() {
  return (
    <div className="cv-container">
      {/* Cột trái */}
      <div className="cv-left">
        <div className="profile">
         <img src={avatar} alt="Avatar" className="avatar" />
          <h2>Lê Văn Thuần</h2>
          <p className="job-title">Lập trình viên phần mềm</p>
        </div>

        <div className="section">
          <h3>Thông tin cá nhân</h3>
          <ul>
            <li>📞 0865 654 228</li>
            <li>📧 levanthuan491@gmail.com</li>
            <li>🎂 08/01/2004</li>
            <li>📍 Triệu Phong,Quảng Trị, Việt Nam</li>
          </ul>
        </div>

        <div className="section">
          <h3>Học vấn</h3>
          <p>Đại học Khoa Học University<br />2022 - 2025</p>
          <p>Ngàng: Công nghệ thông tin</p>
          <p>Chuyên ngành: Công nghệ phần mềm</p>
          <p>Xếp loại: Khá (GPA: 3.00)</p>
        </div>

        <div className="section">
          <h3>Kỹ năng</h3>
          <ul>
            <li>Kỹ năng giao tiếp</li>
            <li>Kỹ năng làm việc nhóm</li>
            <li>Kỹ năng giải quyết vấn đề</li>
            <li>Quản lý thời gian</li>
            <li>Thích nghi nhanh</li>
            <li>Chịu áp lực công việc</li>
            <li>Tiếng Anh giao tiếp cơ bản</li>
          </ul>
        </div>

        <div className="section">
          <h3>Sở thích</h3>
          <p>Đọc sách, nghe nhạc, thể thao</p>
        </div>
      </div>

      {/* Cột phải */}
      <div className="cv-right">
        <div className="section">
          <h3>Mục tiêu nghề nghiệp</h3>
          <p>
            Mong muốn trở thành lập trình viên phần mềm chuyên nghiệp, được học
            hỏi và phát triển trong môi trường năng động. Định hướng trở thành
            chuyên gia phát triển ứng dụng web hiện đại.
          </p>
        </div>

        <div className="section">
          <h3>Kinh nghiệm làm việc</h3>
          <p><strong>Thực tập sinh lập trình</strong> – Hybrid Technologies Đà Nẵng (06/2023 - 09/2023)</p>
          <ul>
            <li>Hỗ trợ phát triển module quản lý sản phẩm bằng Java Spring Boot.</li>
            <li>Tham gia fix bug, viết test case và tối ưu database.</li>
            <li>Làm việc nhóm với GitHub, Agile/Scrum.</li>
            <li>Hỗ trợ nhóm phát triển trong việc triển khai các dự án phát triển phần mềm.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Hoạt động</h3>
          <p><strong>Câu lạc bộ CNTT</strong> – Trường Đại học Khoa Học (2022 - 2025)</p>
          <ul>
            <li>Tham gia tổ chức các buổi workshop về lập trình web.</li>
            <li>Chia sẻ kiến thức cho sinh viên năm nhất.</li>
            <li>Tham gia câu lạc bộ hỗ trợ sinh viên.</li>
          </ul>
        </div>

        <div className="section">
          <h3>Chứng chỉ</h3>
          <ul>
            <li>Tiếng Anh B1 - CERP</li>
            <li>Chứng chỉ Lập trình Web cơ bản</li>
            <li>Chứng chỉ Java nâng cao</li>  
            <li>Thành thạo tin học văn phòng</li>
          </ul>
        </div>

        <div className="section">
          <h3>Giải thưởng</h3>
          <ul>
            <li>Học sinh giỏi 12 năm liền</li>
            <li>Học bổng khuyến khích học tập Đại học Khoa Học (2024-2025)</li>
            <li>Giải Nhì cuộc thi Tin học trẻ tỉnh Quảng Trị (2021)</li>    
            <li>Nhân viên xuất sắc năm công ty  Hybrid Technologies (2025)</li>


          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
