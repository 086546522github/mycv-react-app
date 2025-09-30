#1. Giới thiệu
ReactJS là một thư viện JavaScript do Facebook phát triển vào năm 2013, được sử dụng để xây dựng giao diện người dùng (User Interface – UI) theo hướng component-based (dựa trên thành phần). Nhờ cơ chế Virtual DOM, React giúp ứng dụng chạy nhanh, mượt và dễ mở rộng.
Visual Studio Code (VS Code) là một IDE nhẹ, miễn phí, có nhiều extension hỗ trợ ReactJS (như ESLint, Prettier, React Developer Tools), nhờ đó giúp lập trình viên phát triển ứng dụng nhanh chóng, trực quan và hiệu quả.
#2. Yêu cầu hệ thống
Trước khi cài đặt, máy tính cần đáp ứng các yêu cầu sau:
Hệ điều hành: Windows, macOS hoặc Linux.
Môi trường: 	
•	Node.js & npm: Node.js ≥ 14.0.0 (npm đi kèm).
•	Visual Studio Code: Phiên bản mới nhất.
Kiểm tra Node.js và npm đã cài bằng lệnh:
•	node -v
•	npm -v
Nếu hiển thị số phiên bản (ví dụ: v18.19.0), nghĩa là Node.js và npm đã cài thành công.
#3. Quá trình cài đặt
#3.1. Cài đặt Node.js
•	Truy cập: https://nodejs.org.
•	Tải phiên bản LTS (ổn định).
•	Cài đặt theo hướng dẫn (Next → Next → Finish).
•	Chọn tùy chọn “Add to PATH” để có thể dùng Node.js từ terminal.
Kiểm tra sau khi cài:
•	node -v
•	npm -v
#3.2. Cài đặt Visual Studio Code
•	Truy cập: https://code.visualstudio.com.
•	Tải bản phù hợp hệ điều hành.
•	Cài đặt với các tùy chọn mặc định.
Một số extension hữu ích cho ReactJS:
•	ES7+ React/Redux/React-Native snippets.
•	Prettier – Code formatter.
•	React Developer Tools
#3.3. Tạo dự án React
Có 2 cách tạo project React:
#Cách 1: Dùng Create React App (CRA)
npx create-react-app my-app
cd my-app
npm start
Ứng dụng chạy tại: http://localhost:3000
#Cách 2: Dùng Vite (nhanh hơn, nhẹ hơn)
npm create vite@latest my-app
cd my-app
npm install
npm run dev
Ứng dụng chạy tại: http://localhost:5173
#3.4. Chạy dự án React trên VS Code
•	Mở thư mục dự án (File → Open Folder).
•	Mở terminal tích hợp (Ctrl + `).
•	Gõ lệnh:
o	npm start   # nếu dùng CRA
o	npm run dev # nếu dùng Vite
Kết quả: trình duyệt hiển thị giao diện mặc định của React.
#4. Một số lỗi thường gặp & cách khắc 
•	Lỗi “npm not recognized”→ Node.js chưa cài hoặc chưa thêm PATH
Khác phục: Cài lại Node.js, chọn “Add to PATH” 
•	Lỗi “Node.js too old”
Khác phục: Dùng npm start -- --port 3001
•	Lỗi “Port 3000 already in use”→ Cổng mặc định bị chiếm
Khác phục: Dùng npm start -- --port 3001
•	Không mở được dự án trong VS Code→Mở sai thư mục
Khắc phục: Dùng Open Folder đúng thư mục dự án.
#5. Demo dự án trên GitHub
Để minh họa, tôi đã xây dựng một ứng dụng React nhỏ và đưa lên GitHub.
Repository: https://github.com/086546522github/mycv-react-app
#5.1. Clone dự án
git clone https://github.com/086546522github/mycv-react-app
cd mycv-react-app
npm install
npm start
#5.2. Cấu trúc thư mục dự án
mycv-react-app/
├── node_modules/     # Thư viện cài qua npm
├── public/           # File tĩnh (index.html, favicon, ...)
├── src/              # Code React chính (App.jsx, components, ...)
│   ├── App.jsx       # Component gốc
│   ├── index.js      # Điểm khởi chạy ứng dụng
│   └── components/   # Các component con
├── package.json      # Thông tin dự án & dependencies
└── README.md         # Hướng dẫn dự án
#6. Kết luận
Quá trình cài đặt ReactJS trên VS Code bao gồm 3 bước chính: cài Node.js, cài VS Code, và khởi tạo project React. Sau khi hoàn thành, chúng ta có thể dễ dàng xây dựng và chạy ứng dụng web hiện đại với giao diện thân thiện.
React kết hợp với VS Code mang lại môi trường lập trình mạnh mẽ, trực quan và tiện lợi cho sinh viên cũng như lập trình viên.
