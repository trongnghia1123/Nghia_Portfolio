# Nguyen Trong Nghĩa — Portfolio Data Analyst

Đây là website portfolio cá nhân được xây dựng bằng **HTML5**, **CSS3** và **JavaScript thuần (Vanilla JavaScript)**, không sử dụng bất kỳ framework hay thư viện phụ thuộc nào. Website được thiết kế để có thể **host trực tiếp trên GitHub Pages** mà **không cần build**, **không cần bundler** và **không cần cài đặt npm**.

---

# Tính năng

- Thanh điều hướng (Navigation Bar) cố định ở đầu trang, hỗ trợ **Scroll Spy** (tự động đánh dấu mục đang xem) và menu **Hamburger** trên thiết bị di động.
- Phần giới thiệu (Hero Section) với hiệu ứng **Sparkline** lấy cảm hứng từ lĩnh vực phân tích dữ liệu, đồng thời hỗ trợ chế độ `prefers-reduced-motion` để tăng khả năng truy cập.
- Bốn nút kỹ năng nổi bật gồm:

  - Python
  - SQL
  - Excel
  - Power BI

  Các nút này hoạt động như **bộ lọc dự án**, hỗ trợ chọn nhiều kỹ năng cùng lúc và có hiệu ứng chuyển động mượt mà.
- Danh sách dự án được **tạo tự động từ file `projects.json`**, giúp thêm hoặc chỉnh sửa dự án mà không cần sửa mã HTML.
- Phần Kinh nghiệm làm việc (Experience) và Học vấn (Education) được trình bày dưới dạng **Timeline**.
- Phần Chứng chỉ (Certificates), Thông tin liên hệ (Contact) và nút **Quay về đầu trang (Back To Top)**.
- Giao diện **Responsive**, hoạt động tốt trên máy tính, máy tính bảng và điện thoại.
- Tuân thủ các tiêu chuẩn về khả năng truy cập (Accessibility):

  - HTML Semantic
  - Trạng thái Focus
  - Văn bản thay thế (Alt Text)
  - Lazy Loading hình ảnh
- Tối ưu SEO cơ bản:

  - Tiêu đề trang
  - Meta Description
  - Open Graph
  - Favicon

---

# Cấu trúc thư mục

```text
/
├── index.html
├── style.css
├── script.js
├── projects.json          ← Chỉnh sửa file này để thêm, xóa hoặc cập nhật dự án
├── README.md
└── assets/
    ├── images/
    │   └── profile-placeholder.svg   ← Thay bằng ảnh đại diện của bạn
    ├── icons/
    │   └── favicon.svg               ← Thay bằng biểu tượng riêng của bạn
    └── project-demo/
        ├── rfid-defect.svg           ← Thay bằng ảnh chụp Dashboard thực tế
        ├── iqvia.svg
        ├── djia.svg
        └── mcdonalds.svg
```

---

# Những nội dung cần thay thế trước khi xuất bản

| Nội dung                        | Vị trí                                                                                   | Cách thay thế                                                                                                                                                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ảnh đại diện**       | `assets/images/profile-placeholder.svg`                                                  | Thêm ảnh của bạn (ví dụ:`profile.jpg`) vào thư mục `assets/images/`, sau đó cập nhật thuộc tính `src` của thẻ `<img id="profilePhoto">` trong `index.html`.                 |
| **CV**                     | `assets/Nguyen_Trong_Nghia_CV.pdf`                                                       | Nút**Download CV** sẽ trỏ đến đường dẫn này. Hãy xuất CV thành file PDF và đặt vào thư mục `assets/`.                                                                       |
| **Ảnh minh họa dự án** | `assets/project-demo/*.svg`                                                              | Thay các ảnh mẫu bằng ảnh Dashboard hoặc hình chụp dự án (`.png` hoặc `.jpg`), sau đó cập nhật đường dẫn trong trường `image` của `projects.json`.                       |
| **Liên kết GitHub**      | Trường`github` trong `projects.json` và các liên kết GitHub trong `index.html` | Hiện đang sử dụng repository của`github.com/trongnghia1123`. Nếu tên repository thay đổi thì cập nhật lại.                                                                              |
| **Liên kết LinkedIn**    | `index.html` (Hero, Contact và Footer)                                                  | Tìm chuỗi`linkedin.com/in/trongnghia001123` và thay bằng đường dẫn LinkedIn mới nếu cần.                                                                                                  |
| **Thông tin cá nhân**   | `index.html`                                                                             | Cập nhật Email, Số điện thoại và Địa chỉ trong phần Hero và Contact.                                                                                                                       |
| **Liên kết Live Demo**   | Trường`demo` trong `projects.json`                                                   | Hiện đang để trống nên nút**Live Demo** sẽ tự động ẩn. Thêm URL để hiển thị nút này.                                                                                          |
| **Favicon**                | `assets/icons/favicon.svg`                                                               | Có thể thay bằng favicon của riêng bạn. Nếu muốn hỗ trợ trình duyệt cũ, hãy chuyển sang`.ico` và thêm `<link rel="icon" href="assets/icons/favicon.ico">` trong phần `<head>`. |

---

# Thêm hoặc chỉnh sửa dự án

Mở file **`projects.json`** và thêm một đối tượng mới vào mảng dữ liệu:

```json
{
  "id": "unique-id",
  "title": "Tên dự án",
  "description": "Mô tả ngắn gọn về dự án.",
  "problem": "Vấn đề mà dự án giải quyết.",
  "tools": ["Python", "SQL"],
  "tags": ["python", "sql"],
  "insights": [
    "Insight quan trọng thứ nhất",
    "Insight quan trọng thứ hai"
  ],
  "github": "https://github.com/your-username/repository",
  "demo": "",
  "image": "assets/project-demo/your-image.svg"
}
```

### Ý nghĩa các trường

| Trường        | Mô tả                                   |
| --------------- | ----------------------------------------- |
| `id`          | Mã định danh duy nhất của dự án.   |
| `title`       | Tên dự án.                             |
| `description` | Mô tả ngắn gọn về dự án.           |
| `problem`     | Bài toán hoặc mục tiêu của dự án. |
| `tools`       | Danh sách công nghệ sử dụng.         |
| `tags`        | Các nhãn dùng để lọc dự án.       |
| `insights`    | Các insight hoặc kết quả nổi bật.   |
| `github`      | Đường dẫn đến Repository GitHub.    |
| `demo`        | Đường dẫn Live Demo (nếu có).       |
| `image`       | Đường dẫn ảnh minh họa dự án.     |

> **Lưu ý:**
> Trường `tags` phải sử dụng đúng các khóa viết thường sau:

- `python`
- `sql`
- `excel`
- `powerbi`

Các giá trị này được sử dụng để kết nối với bốn nút lọc kỹ năng trong phần **Skills**.

Một dự án có thể chứa nhiều tag cùng lúc.

---

# Triển khai lên GitHub Pages

### Bước 1

Tạo một Repository mới.

Ví dụ:

- `your-username.github.io` (Website cá nhân)
- hoặc bất kỳ tên nào khác (Website dự án)

---

### Bước 2

Đẩy toàn bộ source code lên GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/your-username/your-repository.git
git push -u origin main
```

---

### Bước 3

Truy cập:

**Settings → Pages**

---

### Bước 4

Trong mục **Build and deployment**:

- Source

```
Deploy from a branch
```

- Branch

```
main
```

- Folder

```
/ (root)
```

---

### Bước 5

Nhấn **Save**.

Sau khoảng 1–2 phút, website sẽ hoạt động tại:

```
https://your-username.github.io/your-repository/
```

hoặc

```
https://your-username.github.io/
```

nếu sử dụng repository dạng `your-username.github.io`.

> Website hoàn toàn là **Static Website**, vì vậy **không cần build**, **không cần npm**, **không cần Webpack** và **không cần bất kỳ framework nào**.

---

# Tùy chỉnh giao diện

Toàn bộ các biến giao diện được khai báo ở đầu file **style.css** trong phần `:root`.

Ví dụ:

```css
:root {
  --bg: #FFFFFF;
  --text: #394BA1;
  --accent: #3991DC;
  --accent-2: #F783A3;
}
```

Bạn chỉ cần thay đổi giá trị của các biến này để áp dụng màu sắc mới cho toàn bộ website.

Các biến bao gồm:

- Màu nền
- Màu chữ
- Màu nhấn
- Font chữ
- Khoảng cách
- Bo góc
- Shadow
- Kích thước

---

# Giấy phép

Bạn được phép **tự do sử dụng, chỉnh sửa và tùy biến** website này cho mục đích xây dựng **Portfolio cá nhân**.

Nếu chia sẻ lại hoặc phát triển thêm, hãy ghi nhận nguồn hoặc tác giả gốc nếu phù hợp.
