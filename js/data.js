/* ===== Dữ liệu & danh mục lấy theo schema thật của DB tdp_dn =====
   Khóa đối tượng đặt trùng tên cột trong DB để dễ nối backend sau này.
   Hiện là mockup: dữ liệu nạp sẵn, các nút Lưu chưa ghi vào MySQL. */

const TDP_INFO = {
  ten: "Tổ dân phố số 1",
  phuong: "Phường Cầu Tre · Quận Hải An",
  thanhPho: "TP. Hải Phòng",
  toTruong: "Tổ trưởng 1 TDP",
  departmentId: 1,
};

/* ---------- DANH MỤC (đúng nội dung bảng danh mục trong tdp_dn) ---------- */
const DM = {
  // sex
  gioiTinh: [
    { id: 1, ten: "Nữ" }, { id: 2, ten: "Nam" }, { id: 3, ten: "Không xác định" },
  ],
  // family_type
  loaiHo: [
    { id: 1, ten: "Dân bản địa" }, { id: 2, ten: "Nhập cư" },
  ],
  // department (Type = 1: Tổ dân phố/Thôn)
  toDanPho: [
    { id: 1, ten: "Tổ dân phố số 1" }, { id: 2, ten: "Tổ dân phố số 2" },
    { id: 14, ten: "Thôn Hoành" }, { id: 15, ten: "Thôn Đông Lĩnh" },
    { id: 17, ten: "Tổ dân phố Lực Hành" }, { id: 18, ten: "Tổ dân phố Trung Hành" },
    { id: 19, ten: "Tổ dân phố 9" }, { id: 20, ten: "Tổ dân phố 10" },
    { id: 22, ten: "Tổ dân phố 51" }, { id: 23, ten: "Tổ dân phố 17" },
    { id: 29, ten: "Thôn Lộc Mỹ" },
  ],
  // relationship (chọn lọc các quan hệ phổ biến)
  quanHe: [
    { id: 1, ten: "Chủ hộ" }, { id: 2, ten: "Vợ" }, { id: 3, ten: "Chồng" },
    { id: 39, ten: "Con trai" }, { id: 18, ten: "Con gái" }, { id: 4, ten: "Con" },
    { id: 5, ten: "Bố đẻ" }, { id: 6, ten: "Mẹ đẻ" }, { id: 7, ten: "Bố vợ" },
    { id: 8, ten: "Mẹ vợ" }, { id: 51, ten: "Mẹ chồng" }, { id: 9, ten: "Anh ruột" },
    { id: 10, ten: "Chị ruột" }, { id: 11, ten: "Em ruột" }, { id: 12, ten: "Cháu nội" },
    { id: 13, ten: "Cháu ngoại" }, { id: 16, ten: "Con dâu" }, { id: 45, ten: "Con rể" },
    { id: 14, ten: "Cháu" },
  ],
  // education
  hocVan: [
    { id: 1, ten: "Tiểu học" }, { id: 2, ten: "Trung học cơ sở" },
    { id: 3, ten: "Trung học phổ thông" }, { id: 4, ten: "Cao đẳng" },
    { id: 5, ten: "Đại học" }, { id: 6, ten: "Sau đại học" }, { id: 7, ten: "Khác" },
  ],
  // specialisation
  chuyenMon: [
    { id: 1, ten: "Cử nhân" }, { id: 2, ten: "Kỹ sư" }, { id: 3, ten: "Thạc sỹ" },
    { id: 4, ten: "Tiến sỹ" }, { id: 5, ten: "Trung học" }, { id: 6, ten: "Tiểu học" },
    { id: 7, ten: "Khác" },
  ],
  // blood_type
  nhomMau: [
    { id: 1, ten: "A" }, { id: 2, ten: "B" }, { id: 3, ten: "AB" }, { id: 4, ten: "O" },
  ],
  // religion
  tonGiao: [
    { id: 1, ten: "Không" }, { id: 2, ten: "Thiên chúa" }, { id: 3, ten: "Phật giáo" },
    { id: 4, ten: "Hòa Hảo" }, { id: 5, ten: "Cao Đài" },
  ],
  // race
  danToc: [
    { id: 1, ten: "Kinh" }, { id: 2, ten: "H'mông" }, { id: 3, ten: "Thái" },
    { id: 4, ten: "Tày" }, { id: 5, ten: "Nùng" },
  ],
  // job (chọn lọc)
  ngheNghiep: [
    { id: 1, ten: "Giáo viên/Giảng viên" }, { id: 2, ten: "Công nhân" },
    { id: 3, ten: "Nông dân" }, { id: 4, ten: "Kỹ sư" }, { id: 5, ten: "Bộ đội" },
    { id: 6, ten: "Công an" }, { id: 9, ten: "Buôn bán" }, { id: 12, ten: "Học sinh" },
    { id: 16, ten: "Sinh viên" }, { id: 14, ten: "Nội trợ" }, { id: 18, ten: "Kế toán" },
    { id: 20, ten: "Lái xe" }, { id: 48, ten: "Kinh doanh" }, { id: 49, ten: "Viên chức" },
    { id: 52, ten: "Công chức" }, { id: 50, ten: "Lao động tự do" }, { id: 46, ten: "Hưu trí" },
    { id: 21, ten: "Không" },
  ],
  // family_policy_object_type (đối tượng hộ gia đình)
  doiTuongHo: [
    { id: 1, ten: "Hộ nghèo" }, { id: 2, ten: "Hộ cận nghèo" },
    { id: 3, ten: "Hộ gia đình chính sách" }, { id: 4, ten: "Hộ gia đình là người dân tộc thiểu số" },
    { id: 5, ten: "Hộ gia đình có công với cách mạng" }, { id: 6, ten: "Không" },
    { id: 7, ten: "Hộ gia đình văn hóa" }, { id: 8, ten: "Hộ gia đình có thương binh liệt sĩ" },
  ],
  // personal_policy_object_type (đối tượng chính sách cá nhân)
  doiTuongCaNhan: [
    { id: 1, ten: "Người có công với cách mạng" }, { id: 2, ten: "Người dân tộc thiểu số" },
    { id: 3, ten: "Thương binh, bệnh binh" }, { id: 4, ten: "Con liệt sỹ" },
  ],
  // provinces (mẫu) - đầy đủ lấy từ DB khi nối backend
  tinh: [
    { id: 1, ten: "Thành phố Hà Nội" }, { id: 31, ten: "Thành phố Hải Phòng" },
    { id: 48, ten: "Thành phố Đà Nẵng" }, { id: 79, ten: "TP. Hồ Chí Minh" },
  ],
  // districts (mẫu)
  huyen: [
    { id: 1, ten: "Quận Ba Đình", tinhId: 1 }, { id: 2, ten: "Quận Hoàn Kiếm", tinhId: 1 },
    { id: 7, ten: "Quận Hai Bà Trưng", tinhId: 1 },
  ],
  // wards (mẫu)
  xa: [
    { id: 1, ten: "Phường Phúc Xá", huyenId: 1 }, { id: 7, ten: "Phường Cống Vị", huyenId: 1 },
    { id: 8, ten: "Phường Liễu Giai", huyenId: 1 },
  ],
};

/* ---------- QUỸ (bảng fund) ---------- */
const FUND = [
  { Id: 1, FundName: "Quỹ đền ơn đáp nghĩa 2023", TotalAmount: 1000000, DepartmentId: 22, Deadline: "2023-12-31", IsActive: 1 },
  { Id: 2, FundName: "Quỹ phòng chống thiên tai 2023", TotalAmount: 350000, DepartmentId: 22, Deadline: "2023-12-26", IsActive: 1 },
  { Id: 3, FundName: "Quỹ khuyến học 2023", TotalAmount: 100000, DepartmentId: 22, Deadline: "2023-12-27", IsActive: 1 },
  { Id: 7, FundName: "Quỹ người cao tuổi 2023", TotalAmount: 500000, DepartmentId: 1, Deadline: "2024-07-03", IsActive: 1 },
  { Id: 8, FundName: "Quỹ người nghèo 2023", TotalAmount: 1000000, DepartmentId: 2, Deadline: "2024-07-02", IsActive: 1 },
  { Id: 9, FundName: "Quỹ bảo trợ trẻ em 2023", TotalAmount: 1200000, DepartmentId: 3, Deadline: "2024-07-08", IsActive: 1 },
  { Id: 10, FundName: "Quỹ khuyến học 2023", TotalAmount: 1500000, DepartmentId: 5, Deadline: "2024-07-01", IsActive: 0 },
];

/* ---------- HỘ GIA ĐÌNH (bảng family + family_member/user + family_policy_object) ----------
   Dữ liệu nhân khẩu trải đều nhiều độ tuổi để dashboard thống kê đối tượng có ý nghĩa. */
const FAMILY = [
  {
    Id: 1, DepartmentId: 1, FamilyTypeId: 1, Owner: "Trần Minh Tâm",
    Phone: "0123456783", Address: "74 Phạm Văn Nghị", policyTypeIds: [3],
    members: [
      { FullName: "Trần Minh Tâm", SexId: 2, DateOfBirth: "1983-06-01", IdentityId: "031083001234", RelationshipId: 1, RaceId: 1, ReligionId: 3, EducationId: 5, JobId: 4 },
      { FullName: "Lê Thị Hằng", SexId: 1, DateOfBirth: "1986-02-14", IdentityId: "031086005678", RelationshipId: 2, RaceId: 1, ReligionId: 3, EducationId: 5, JobId: 1 },
      { FullName: "Trần Gia Bảo", SexId: 2, DateOfBirth: "2010-09-20", IdentityId: "", RelationshipId: 39, RaceId: 1, ReligionId: 3, EducationId: 2, JobId: 12 },
      { FullName: "Trần Bảo Hân", SexId: 1, DateOfBirth: "2024-03-10", IdentityId: "", RelationshipId: 18, RaceId: 1, ReligionId: 3, EducationId: null, JobId: null },
      { FullName: "Trần Văn Phúc", SexId: 2, DateOfBirth: "1948-02-20", IdentityId: "030948000111", RelationshipId: 5, RaceId: 1, ReligionId: 3, EducationId: 2, JobId: 46 },
    ],
  },
  {
    Id: 2, DepartmentId: 1, FamilyTypeId: 2, Owner: "Phan Thị Thuận",
    Phone: "0936435466", Address: "68 Phạm Văn Nghị", policyTypeIds: [1],
    members: [
      { FullName: "Phan Thị Thuận", SexId: 1, DateOfBirth: "1968-11-30", IdentityId: "031068004321", RelationshipId: 1, RaceId: 1, ReligionId: 1, EducationId: 3, JobId: 46 },
      { FullName: "Nguyễn Quốc Huy", SexId: 2, DateOfBirth: "2002-05-18", IdentityId: "031002012345", RelationshipId: 39, RaceId: 1, ReligionId: 1, EducationId: 5, JobId: 16 },
      { FullName: "Nguyễn Thị Quỳnh", SexId: 1, DateOfBirth: "2006-08-02", IdentityId: "031006054321", RelationshipId: 18, RaceId: 1, ReligionId: 1, EducationId: 3, JobId: 16 },
    ],
  },
  {
    Id: 3, DepartmentId: 2, FamilyTypeId: 1, Owner: "Đặng Quốc Thắng",
    Phone: "0123456787", Address: "32/36 Lê Thanh Nghị", policyTypeIds: [5],
    members: [
      { FullName: "Đặng Quốc Thắng", SexId: 2, DateOfBirth: "1979-04-12", IdentityId: "031079003456", RelationshipId: 1, RaceId: 1, ReligionId: 1, EducationId: 5, JobId: 48 },
      { FullName: "Vũ Thị Mai", SexId: 1, DateOfBirth: "1982-07-08", IdentityId: "031082007890", RelationshipId: 2, RaceId: 1, ReligionId: 1, EducationId: 4, JobId: 14 },
      { FullName: "Đặng Minh Khôi", SexId: 2, DateOfBirth: "2005-11-25", IdentityId: "031005067890", RelationshipId: 39, RaceId: 1, ReligionId: 1, EducationId: 3, JobId: 16 },
      { FullName: "Đặng Bảo Ngọc", SexId: 1, DateOfBirth: "2020-05-10", IdentityId: "", RelationshipId: 18, RaceId: 1, ReligionId: 1, EducationId: 1, JobId: 12 },
    ],
  },
  {
    Id: 4, DepartmentId: 2, FamilyTypeId: 2, Owner: "Trịnh Thị Thi",
    Phone: "0909090909", Address: "17 Tạ Quang Bửu", policyTypeIds: [2],
    members: [
      { FullName: "Trịnh Thị Thi", SexId: 1, DateOfBirth: "1990-03-25", IdentityId: "031090009012", RelationshipId: 1, RaceId: 1, ReligionId: 3, EducationId: 5, JobId: 9 },
      { FullName: "Lê Gia Bách", SexId: 2, DateOfBirth: "2025-09-05", IdentityId: "", RelationshipId: 39, RaceId: 1, ReligionId: 3, EducationId: null, JobId: null },
    ],
  },
  {
    Id: 5, DepartmentId: 1, FamilyTypeId: 2, Owner: "Huỳnh Phát",
    Phone: "0905932017", Address: "62 Phạm Văn Nghị", policyTypeIds: [6],
    members: [
      { FullName: "Huỳnh Phát", SexId: 2, DateOfBirth: "1975-12-01", IdentityId: "031075002233", RelationshipId: 1, RaceId: 1, ReligionId: 1, EducationId: 3, JobId: 50 },
      { FullName: "Lê Thị Sen", SexId: 1, DateOfBirth: "1951-04-15", IdentityId: "030951000222", RelationshipId: 24, RaceId: 1, ReligionId: 1, EducationId: 1, JobId: 46 },
    ],
  },
  {
    Id: 6, DepartmentId: 1, FamilyTypeId: 2, Owner: "Trần Văn Thọ",
    Phone: "0922222225", Address: "K88/02 Phạm Văn Nghị", policyTypeIds: [6],
    members: [
      { FullName: "Trần Văn Thọ", SexId: 2, DateOfBirth: "1971-08-18", IdentityId: "031071001122", RelationshipId: 1, RaceId: 1, ReligionId: 1, EducationId: 2, JobId: 2 },
      { FullName: "Trần Thị Cúc", SexId: 1, DateOfBirth: "1974-09-09", IdentityId: "031074003344", RelationshipId: 2, RaceId: 1, ReligionId: 1, EducationId: 2, JobId: 14 },
      { FullName: "Trần Quốc Anh", SexId: 2, DateOfBirth: "2007-02-14", IdentityId: "031007078901", RelationshipId: 39, RaceId: 1, ReligionId: 1, EducationId: 3, JobId: 12 },
      { FullName: "Trần Văn Hậu", SexId: 2, DateOfBirth: "1946-07-01", IdentityId: "030946000333", RelationshipId: 5, RaceId: 1, ReligionId: 1, EducationId: 1, JobId: 46 },
    ],
  },
];

/* ---------- THU QUỸ (bảng collect) ---------- */
const COLLECT = [
  { Id: 1, FamilyId: 1, FundId: 1, SubmittedAmount: 200000, IsCollected: 1, CollectedDate: "2024-08-19", Description: "" },
  { Id: 2, FamilyId: 5, FundId: 3, SubmittedAmount: 100000, IsCollected: 1, CollectedDate: "2023-11-26", Description: "Đã thu hộ ông Sơn" },
  { Id: 3, FamilyId: 2, FundId: 2, SubmittedAmount: 100000, IsCollected: 1, CollectedDate: "2024-04-27", Description: "Đã thu hộ" },
  { Id: 4, FamilyId: 4, FundId: 1, SubmittedAmount: 120000, IsCollected: 0, CollectedDate: "", Description: "" },
  { Id: 5, FamilyId: 3, FundId: 1, SubmittedAmount: 120000, IsCollected: 1, CollectedDate: "2024-05-16", Description: "Đã thu hộ ông Thắng" },
  { Id: 16, FamilyId: 5, FundId: 1, SubmittedAmount: 120000, IsCollected: 1, CollectedDate: "2024-07-14", Description: "Đã thu xong" },
  { Id: 17, FamilyId: 6, FundId: 1, SubmittedAmount: 300000, IsCollected: 0, CollectedDate: "", Description: "" },
  { Id: 21, FamilyId: 1, FundId: 7, SubmittedAmount: 100000, IsCollected: 1, CollectedDate: "2024-08-26", Description: "Đã thu" },
  { Id: 22, FamilyId: 2, FundId: 7, SubmittedAmount: 200000, IsCollected: 0, CollectedDate: "", Description: "" },
];

/* ---------- Tiện ích ---------- */
function dinhDangTien(n) { return (Number(n) || 0).toLocaleString("vi-VN") + " đ"; }
function dinhDangNgay(s) {
  if (!s) return "—";
  const [y, m, d] = s.split("-");
  return `${d}/${m}/${y}`;
}
function vietTat(ten) {
  const parts = (ten || "").trim().split(/\s+/);
  if (!parts[0]) return "?";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[parts.length - 2][0] + parts[parts.length - 1][0]).toUpperCase();
}
function tenDM(nhom, id) {
  const it = (DM[nhom] || []).find((x) => x.id === Number(id));
  return it ? it.ten : "";
}
function tenQuy(id) { const f = FUND.find((x) => x.Id === Number(id)); return f ? f.FundName : ""; }
function tenHo(id) { const f = FAMILY.find((x) => x.Id === Number(id)); return f ? f.Owner : ""; }
function timHo(id) { return FAMILY.find((h) => h.Id === Number(id)); }
// Mốc tính tuổi = hôm nay (khi nối backend thay bằng ngày hệ thống)
const REF = { y: 2026, m: 6, d: 16 };
function tuoi(dob) {
  if (!dob) return null;
  const [y, m, d] = dob.split("-").map(Number);
  let a = REF.y - y;
  if (m > REF.m || (m === REF.m && d > REF.d)) a--; // chưa tới sinh nhật trong năm
  return a;
}
function tuoiThang(dob) {
  if (!dob) return null;
  const [y, m, d] = dob.split("-").map(Number);
  let th = (REF.y - y) * 12 + (REF.m - m);
  if (REF.d < d) th--;
  return th;
}

/* ---------- Thống kê nhóm đối tượng theo độ tuổi/giới tính ----------
   Mỗi nhóm có hàm kiểm tra (test) áp lên từng nhân khẩu => dễ bổ sung nhóm mới. */
const NHOM_DOI_TUONG = [
  { key: "vitaminA", label: "Trẻ uống Vitamin A", desc: "Trẻ 6 – 36 tháng tuổi", icon: "fa-pills", color: "orange",
    test: (m) => { const th = tuoiThang(m.DateOfBirth); return th !== null && th >= 6 && th <= 36; } },
  { key: "tiemChung", label: "Trẻ tiêm chủng", desc: "Trẻ dưới 12 tháng tuổi", icon: "fa-syringe", color: "teal",
    test: (m) => { const th = tuoiThang(m.DateOfBirth); return th !== null && th < 12; } },
  { key: "vaoLop1", label: "Trẻ vào lớp 1", desc: "Đủ 6 tuổi (sinh năm 2020)", icon: "fa-children", color: "blue",
    test: (m) => Number((m.DateOfBirth || "").slice(0, 4)) === REF.y - 6 },
  { key: "nghiaVu", label: "Nam tuổi nghĩa vụ quân sự", desc: "Nam 18 – 25 tuổi", icon: "fa-person-military-rifle", color: "green",
    test: (m) => { const t = tuoi(m.DateOfBirth); return m.SexId === 2 && t >= 18 && t <= 25; } },
  { key: "cuTri", label: "Cử tri", desc: "Công dân đủ 18 tuổi", icon: "fa-check-to-slot", color: "blue",
    test: (m) => tuoi(m.DateOfBirth) >= 18 },
  { key: "phuNuSinhDe", label: "Phụ nữ độ tuổi sinh đẻ", desc: "Nữ 15 – 49 tuổi", icon: "fa-person-dress", color: "teal",
    test: (m) => { const t = tuoi(m.DateOfBirth); return m.SexId === 1 && t >= 15 && t <= 49; } },
  { key: "caoTuoi", label: "Người cao tuổi", desc: "Từ 60 tuổi trở lên", icon: "fa-person-cane", color: "orange",
    test: (m) => tuoi(m.DateOfBirth) >= 60 },
  { key: "mungTho", label: "Mừng thọ năm nay", desc: "Tròn 70/75/80/85/90/95/100 tuổi", icon: "fa-cake-candles", color: "green",
    test: (m) => [70, 75, 80, 85, 90, 95, 100].includes(REF.y - Number((m.DateOfBirth || "0").slice(0, 4))) },
];
function thongKeDoiTuong() {
  const all = FAMILY.flatMap((h) => h.members);
  return NHOM_DOI_TUONG.map((n) => ({ ...n, count: all.filter(n.test).length }));
}
function layThamSo(ten) { return new URLSearchParams(location.search).get(ten); }
function fillSelect(el, nhom, value, placeholder) {
  let html = placeholder ? `<option value="">${placeholder}</option>` : "";
  html += (DM[nhom] || []).map((x) => `<option value="${x.id}"${Number(value) === x.id ? " selected" : ""}>${x.ten}</option>`).join("");
  el.innerHTML = html;
}
