# 1. Giới thiệu

ReactJS là một thư viện JavaScript do Facebook phát triển vào năm 2013, dùng để xây dựng giao diện người dùng (UI) theo hướng component-based. React giúp việc phát triển ứng dụng web nhanh, dễ bảo trì và mở rộng.

Visual Studio Code (VS Code) là một IDE nhẹ, miễn phí, hỗ trợ nhiều extension cho ReactJS (ESLint, Prettier, React Developer Tools), giúp lập trình viên phát triển hiệu quả hơn.

# 2. Yêu cầu hệ thống

- **Hệ điều hành**: Windows, macOS hoặc Linux
- **Môi trường**:
  - Node.js & npm: Node.js ≥ 14.0.0 (npm đi kèm)
  - Visual Studio Code: Phiên bản mới nhất

**Kiểm tra Node.js và npm:**
```bash
node -v
npm -v
```
Nếu hiện số phiên bản (ví dụ: v18.19.0), nghĩa là đã cài thành công.

# 3. Quá trình cài đặt

## 3.1. Cài đặt Node.js

- Truy cập: https://nodejs.org
- Tải phiên bản LTS (ổn định)
- Cài đặt theo hướng dẫn (Next → Next → Finish)
- Chọn “Add to PATH” để dùng Node.js từ terminal

**Kiểm tra sau khi cài:**
```bash
node -v
npm -v
```

## 3.2. Cài đặt Visual Studio Code

- Truy cập: https://code.visualstudio.com
- Tải bản phù hợp hệ điều hành
- Cài đặt với các tùy chọn mặc định

**Extension hữu ích cho ReactJS:**
- ES7+ React/Redux/React-Native snippets
- Prettier – Code formatter
- React Developer Tools

## 3.3. Tạo dự án React

### Cách 1: Dùng Create React App (CRA)

```bash
npx create-react-app my-app
cd my-app
npm start
```
Ứng dụng chạy tại: http://localhost:3000

### Cách 2: Dùng Vite (nhanh hơn, nhẹ hơn)

```bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
```
Ứng dụng chạy tại: http://localhost:5173

## 3.4. Chạy dự án React trên VS Code

- Mở thư mục dự án (File → Open Folder)
- Mở terminal tích hợp (Ctrl + `)
- Gõ lệnh:
  - `npm start`   # nếu dùng CRA
  - `npm run dev` # nếu dùng Vite

**Kết quả:** Trình duyệt hiển thị giao diện mặc định của React.

# 4. Một số lỗi thường gặp & cách khắc phục

- **Lỗi “npm not recognized”**  
  Nguyên nhân: Node.js chưa cài hoặc chưa thêm PATH  
  Khắc phục: Cài lại Node.js, chọn “Add to PATH”

- **Lỗi “Node.js too old”**  
  Khắc phục: Dùng `npm start -- --port 3001`

- **Lỗi “Port 3000 already in use”**  
  Nguyên nhân: Cổng mặc định bị chiếm  
  Khắc phục: Dùng `npm start -- --port 3001`

- **Không mở được dự án trong VS Code**  
  Nguyên nhân: Mở sai thư mục  
  Khắc phục: Dùng Open Folder đúng thư mục dự án

# 5. Demo dự án trên GitHub

Tôi đã xây dựng một ứng dụng React nhỏ và đưa lên GitHub.  
Repository: [https://github.com/086546522github/mycv-react-app](https://github.com/086546522github/mycv-react-app)

## 5.1. Clone dự án

```bash
git clone https://github.com/086546522github/mycv-react-app
cd mycv-react-app
npm install
npm start
```

## 5.2. Cấu trúc thư mục dự án

```
mycv-react-app/
├── node_modules/     # Thư viện cài qua npm
├── public/           # File tĩnh (index.html, favicon, ...)
├── src/              # Code React chính (App.jsx, components, ...)
│   ├── App.jsx       # Component gốc
│   ├── index.js      # Điểm khởi chạy ứng dụng
│   └── components/   # Các component con
├── package.json      # Thông tin dự án & dependencies
└── README.md         # Hướng dẫn dự án
```

# 6. Kết luận

Quá trình cài đặt ReactJS trên VS Code gồm 3 bước: cài Node.js, cài VS Code và khởi tạo project React. Sau khi hoàn thành, bạn có thể dễ dàng xây dựng và phát triển ứng dụng ReactJS.

React kết hợp với VS Code mang lại môi trường lập trình mạnh mẽ, trực quan và tiện lợi cho sinh viên cũng như lập trình viên.
