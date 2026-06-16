# Ứng dụng Quản lý Tổ dân phố (TDP) — Giao diện mobile

Bộ giao diện HTML mobile cho ứng dụng nhập liệu của tổ dân phố: quản lý **thông tin hộ gia đình**
và **thu quỹ**. Các trường và danh mục được dựng **theo đúng schema database `tdp_dn`** đã có.

## Công nghệ
- HTML/CSS/JS thuần, không cần build.
- Icon: **Font Awesome 6** (qua CDN — cần internet khi mở; nếu chạy offline cần tải về local).
- Dữ liệu mẫu + danh mục thật nằm trong `js/data.js`.

## Cách xem
Mở `index.html` bằng trình duyệt. Tối ưu cho điện thoại (khung 480px, thanh tab dưới, nút thêm nổi).
Trên máy tính: DevTools → chế độ thiết bị di động để xem đúng nhất.

## Màn hình
| Tệp | Màn hình |
|-----|----------|
| `index.html` | Trang chủ — tổng quan hộ/khẩu, **đối tượng cần quản lý theo độ tuổi**, tiến độ thu quỹ |
| `ho-gia-dinh.html` | Danh sách hộ (tìm kiếm, lọc Dân bản địa / Nhập cư, hiển thị diện chính sách) |
| `ho-gia-dinh-form.html` | Nhập/sửa hộ + đối tượng hộ + nhân khẩu (sheet chi tiết đầy đủ trường) |
| `thu-quy.html` | Chọn quỹ → tiến độ thu, danh sách thu theo hộ (đã/chưa thu) |
| `thu-quy-form.html` | Ghi nhận thu (quỹ, hộ, số tiền, trạng thái, ghi chú, ảnh minh chứng) |

## Ánh xạ DB `tdp_dn` (khóa JS đặt trùng tên cột để dễ nối backend)
- **family**: `DepartmentId` (tổ dân phố), `FamilyTypeId`, `Owner`, `Phone`, `Address`
- **family_policy_object** → `family_policy_object_type`: diện hộ (Hộ nghèo, cận nghèo, chính sách, văn hóa...)
- **family_member** + **user**: `FullName`, `SexId`, `DateOfBirth`, `IdentityId`/`IdentityDate`/`IndetityLocation`,
  `EducationId`, `SpecialisationId`, `BloodTypeId`, `ReligionId`, `RaceId`, `RelationshipId`, nghề (`job`),
  Đảng viên (`user_communist`), đối tượng chính sách cá nhân (`personal_policy_object_type`)
- **fund**: `FundName`, `TotalAmount`, `DepartmentId`, `Deadline`, `IsActive`
- **collect**: `FamilyId`, `FundId`, `SubmittedAmount`, `IsCollected`, `CollectedDate`, `Description`, `ImageCollect`

Danh mục đã nạp đúng nội dung DB: giới tính, loại hộ, quan hệ chủ hộ, học vấn, chuyên môn, nhóm máu,
tôn giáo, dân tộc, nghề nghiệp, diện hộ, đối tượng chính sách, tổ dân phố, quỹ.

> Riêng tỉnh/huyện/xã (provinces/districts/wards — hàng nghìn dòng) hiện chỉ nạp **mẫu**;
> khi nối backend sẽ tải động theo cấp.

## Đối tượng cần quản lý (dashboard)
Mục này tính tự động từ `DateOfBirth` + `SexId` của nhân khẩu (mốc tuổi = hằng `REF` trong `js/data.js`,
khi nối backend đổi sang ngày hệ thống). Các nhóm hiện có: trẻ uống Vitamin A (6–36 tháng), trẻ tiêm chủng
(<12 tháng), trẻ vào lớp 1 (đủ 6 tuổi), nam tuổi nghĩa vụ quân sự (18–25), cử tri (≥18), phụ nữ sinh đẻ
(15–49), người cao tuổi (≥60), mừng thọ (tròn 70/75/.../100).

**Thêm nhóm mới**: chỉ cần thêm một phần tử vào mảng `NHOM_DOI_TUONG` với hàm `test(m)` trả về true/false —
ví dụ "trẻ mẫu giáo 3–5 tuổi", "người trong độ tuổi lao động". Dashboard tự render thêm hàng.

## Khi cần nối database
Hiện các nút Lưu chỉ hiển thị xác nhận, **chưa ghi thật**. Để lưu vào MySQL (`tdp_dn`, port 3306,
user `root`) cần thêm backend (Node.js/Express, PHP hoặc Python) cung cấp API, rồi thay dữ liệu mẫu
trong `js/data.js` bằng `fetch()`. Báo mình khi bạn muốn làm phần này.
