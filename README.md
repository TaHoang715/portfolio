# 🌌 3D Portfolio - Tạ Minh Hoàng (TaHoang715)

Trang web **3D Portfolio cá nhân** được xây dựng từ con số 0 với chủ đề **Deep Space Galaxy (Vũ trụ huyền bí)** kết hợp nhân vật **Arlecchino (Genshin Impact)**, hiệu ứng hạt sao 3D lấp lánh và khả năng tương tác xoay theo con trỏ chuột.

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-0.168-black?style=for-the-badge&logo=threedotjs)](https://threejs.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)

---

## ✨ Tính Năng Nổi Bật

* **🌌 Deep Space Galaxy Canvas (Three.js):** Hệ thống hơn 3,200 hạt sao lấp lánh (vàng kim, trắng sáng và xanh vũ trụ) chuyển động xoay hữu cơ kết hợp hiệu ứng chiều sâu Parallax theo chuyển động chuột.
* **⚔️ Tương Tác Nhân Vật 3D Arlecchino:** Nhân vật 3D ở Hero Section tự động xoay ánh mắt và góc nghiêng cơ thể mượt mà theo vị trí con trỏ chuột (`lerp / damp`).
* **🔮 Cơ Chế Model Tự Động & Chống Lỗi:** Trang web tích hợp sẵn Avatar 3D tạo hình theo phong cách Arlecchino (áo khoác dạ hội, vầng trăng huyết sắc Balemoon Halo, đá quý đỏ phát sáng và hạt năng lượng Pyro). Khi bạn đặt file `public/models/arlecchino.glb`, hệ thống sẽ tự động chuyển sang mô hình 3D chi tiết.
* **🎓 Hồ Sơ Học Vấn & Bằng Cấp:** Thể hiện bằng Kỹ Sư Phần Mềm Đại học FPT (GPA 7.0/10), chứng chỉ tiếng Anh chuẩn CEFR B2 & trọn bộ Cambridge English Suite (Starters, Movers, Flyers, KET, PET).
* **💼 Dòng Thời Gian Sự Nghiệp:** Quá trình làm việc tại Trung tâm Tiếng Anh Thần Đồng Việt Úc (TDV - 2 năm), thực tập tại Công ty Kỷ Nguyên Số (KNS - 6 tháng) và các hoạt động phát triển game độc lập.
* **💻 Bản Đồ Kỹ Năng (System Stack & Tools):** Tái hiện 100% chuẩn xác giao diện Terminal gồm 6 phân hệ công nghệ:
  1. *Core Languages & Backend:* C#, .NET, .NET Core, ASP.NET Core, Java, Spring Boot, TypeScript, JavaScript, Node.js
  2. *Web Frameworks & UI:* Next.js, React, Tailwind CSS
  3. *Mobile App Development:* Kotlin, Flutter, Dart, Swift
  4. *Databases, Cloud & Infrastructure:* Vercel, Koyeb, Convex, Render, PostgreSQL, Azure, Docker, GitHub Actions, MySQL, MongoDB, Git
  5. *Payments, Mail & Third-Party APIs:* Stripe, PayPal, PayOS, Resend, SendGrid, Firebase, Supabase, Redis, Postman, Swagger
  6. *AI & Agentic Engineering:* Claude, DeepSeek, Antigravity, Google Gemini, Qwen, Kimi AI, OpenAI, Ollama
* **🚀 Dự Án Tiêu Biểu:** Trưng bày trò chơi phòng không *DBP Air Defense*, game trí tuệ *LSD Word Guess* và teaser dự án cờ đầu thế hệ mới.
* **🎉 Hiệu Ứng Pháo Hoa & Sao Chép Email 1-Chạm:** Tương tác sống động khi nhấn nút xem hồ sơ năng lực hoặc copy địa chỉ email.

---

## 🛠️ Cài Đặt & Chạy Cục Bộ (Local Development)

Yêu cầu: Node.js >= 18.0.0

```bash
# 1. Cài đặt các thư viện phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm run dev

# 3. Biên dịch bản đóng gói Production
npm run build
```

Trang web sẽ chạy tại địa chỉ: `http://localhost:3000/`

---

## 📁 Cách Thêm Model 3D Arlecchino (.glb)

Nếu bạn có file 3D `.glb` hoặc `.gltf` của Arlecchino:
1. Sao chép file model của bạn vào thư mục `public/models/`.
2. Đổi tên file thành: `arlecchino.glb`.
3. Khởi động lại hoặc reload trang web, Three.js sẽ tự động nạp model này!

---

## 🌐 Triển Khai Hosting Lên Vercel (Miễn Phí 100%)

Dự án đã được cấu hình tối ưu để deploy tự động lên **Vercel**:
1. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub của bạn.
2. Nhấn nút **"Add New Project"** ➔ chọn repository **`TaHoang715/portfolio`**.
3. Giữ nguyên toàn bộ cấu hình mặc định (Framework Preset: `Vite`, Root Directory: `./`).
4. Nhấn **"Deploy"**. Trong vòng 1 phút, bạn sẽ có ngay đường link hosting tốc độ cao `https://tahoang715-portfolio.vercel.app`!
5. Kể từ đó, mỗi lần bạn `git push` lên GitHub, Vercel sẽ tự động build và cập nhật phiên bản mới nhất.

---

Designed & Engineered with ❤️ by **Tạ Minh Hoàng (TaHoang715)**
