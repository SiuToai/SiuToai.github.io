# SmallTap Studio website

Website chính thức của SmallTap Studio, đồng thời là nền tảng portfolio dành cho nhà phát triển đứng sau thương hiệu. Website gồm trang giới thiệu, sản phẩm Prank Studio, hỗ trợ, Chính sách quyền riêng tư, Điều khoản sử dụng và `app-ads.txt`.

## Những chỗ thường cần cập nhật

- Nội dung thương hiệu, email, ứng dụng, câu hỏi thường gặp: `app/site-content.ts`
- Nội dung xác minh AdMob: `public/app-ads.txt`
- Ảnh chụp ứng dụng: `public/screenshots/`
- Ảnh hiển thị khi chia sẻ website: `public/og.png`
- Nội dung chính sách: `app/privacy/page.tsx` và `app/terms/page.tsx`

Khi thay ảnh, có thể giữ nguyên tên file hiện tại để không cần sửa mã nguồn. Khi thêm ứng dụng mới, thêm dữ liệu vào `products` trong `app/site-content.ts`, rồi tạo một trang mới trong `app/apps/` dựa trên trang Prank Studio hiện có.

## Chạy thử trên máy

Yêu cầu Node.js 22.13 trở lên và pnpm.

```bash
pnpm install
pnpm dev
```

Mở địa chỉ được hiển thị trong cửa sổ dòng lệnh.

Kiểm tra bản hoàn chỉnh:

```bash
pnpm build
```

## Xuất bản bằng GitHub Pages

Repository người dùng `SiuToai.github.io` được cấu hình để tự động dựng và xuất bản website sau mỗi lần cập nhật nhánh `main`. Quy trình nằm tại `.github/workflows/deploy-pages.yml`.

Địa chỉ mặc định:

- Website: `https://siutoai.github.io`
- app-ads.txt: `https://siutoai.github.io/app-ads.txt`

Nếu sau này dùng tên miền riêng, đổi `NEXT_PUBLIC_SITE_URL` trong workflow, `.env.example`, `app/layout.tsx`, `app/robots.ts` và `app/sitemap.ts`.

## Thiết lập app-ads.txt

File đã chứa dòng AdMob do chủ tài khoản cung cấp:

```text
google.com, pub-5004912680468079, DIRECT, f08c47fec0942fa0
```

Sau khi gắn tên miền, hãy kiểm tra `https://ten-mien-cua-ban/app-ads.txt`. Đường dẫn này phải mở trực tiếp và chỉ hiển thị dòng trên. Sau đó đặt chính tên miền đó vào mục website nhà phát triển trên Google Play Console và chờ Google thu thập lại dữ liệu.

## Tên miền và thông tin liên hệ

- Đổi URL mẫu trong `.env.example` hoặc cấu hình biến môi trường trên nơi lưu trữ.
- Đổi email hỗ trợ một lần trong `app/site-content.ts`; các nút liên hệ trên website sẽ cập nhật theo.
