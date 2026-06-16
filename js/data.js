/* ===== Dữ liệu & danh mục lấy theo schema thật của DB tdp_dn =====
   Khóa đối tượng đặt trùng tên cột trong DB để dễ nối backend sau này.
   Hiện là mockup: dữ liệu nạp sẵn, các nút Lưu chưa ghi vào MySQL.
   Bộ số liệu demo mô phỏng khu dân cư quy mô chuẩn 200 hộ / 735 nhân khẩu. */

const TDP_INFO = {
  ten: "Thôn 01",
  phuong: "Xã Đan Thượng",
  thanhPho: "Tỉnh Phú Thọ",
  toTruong: "Trưởng thôn 01",
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
    { id: 1, ten: "Thôn 01" }, { id: 2, ten: "Thôn 02" },
    { id: 3, ten: "Thôn 03" }, { id: 4, ten: "Thôn 04" },
    { id: 5, ten: "Thôn 05" }, { id: 6, ten: "Thôn 06" },
    { id: 7, ten: "Thôn 07" }, { id: 8, ten: "Thôn 08" },
    { id: 9, ten: "Thôn 09" }, { id: 10, ten: "Thôn 10" },
    { id: 11, ten: "Thôn 11" },
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
   6 hộ mẫu giữ chi tiết để xem/sửa, phần còn lại sinh tự động để khớp đúng tổng quan demo
   (200 hộ / 735 nhân khẩu). Phân bổ độ tuổi/giới tính khớp với các nhóm đối tượng cần quản lý. */
const FAMILY = (function buildFamilies() {
  const BASE = [
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

  // ---- RNG có seed để dữ liệu ổn định giữa các lần load ----
  let _s = 7919;
  function rnd() { _s = (_s * 1103515245 + 12345) >>> 0; return _s; }
  function pickN(n) { return rnd() % n; }
  function pick(arr) { return arr[pickN(arr.length)]; }

  const HO = ["Nguyễn","Trần","Lê","Phạm","Hoàng","Phan","Vũ","Đặng","Bùi","Đỗ","Hồ","Ngô","Dương","Lý","Cao","Mai","Đinh","Trịnh","Tô","Đào"];
  const TEN_DEM_NAM = ["Văn","Hữu","Quốc","Đình","Minh","Công","Đức","Bá","Anh","Gia","Trung","Thế","Tuấn","Xuân","Ngọc"];
  const TEN_DEM_NU  = ["Thị","Thúy","Hồng","Ngọc","Thu","Kiều","Diệu","Bảo","Khánh","Phương","Minh","Quỳnh"];
  const TEN_NAM = ["An","Bình","Cường","Dũng","Đức","Hải","Hùng","Khang","Khôi","Lâm","Long","Minh","Nam","Phong","Quang","Sơn","Tâm","Thắng","Thành","Tuấn","Việt","Vinh","Tú","Bảo","Hiếu","Hưng","Phú","Lộc","Phát","Tài","Đạt","Khánh","Hữu","Huy","Quân","Trung","Thiện","Anh","Tiến","Đại","Mạnh","Linh","Sang","Hoàng"];
  const TEN_NU  = ["An","Anh","Bích","Châu","Diệu","Dung","Hà","Hằng","Hạnh","Hiền","Hoa","Hồng","Hương","Lan","Lệ","Liên","Linh","Loan","Mai","Minh","My","Nga","Ngọc","Như","Oanh","Phương","Quỳnh","Tâm","Thảo","Thanh","Thúy","Thư","Trang","Trinh","Vân","Yến","Diệp","Hạ","Khánh","Nhi","Vy","Quyên","Nhung","Thu","Xuân"];
  const DUONG = ["Phạm Văn Nghị","Lê Thanh Nghị","Tạ Quang Bửu","Nguyễn Văn Linh","Trần Hưng Đạo","Lê Lợi","Hoàng Diệu","Nguyễn Huệ","Lê Duẩn","Bà Triệu","Đinh Tiên Hoàng","Quang Trung"];

  function makeName(sex) {
    const dem = sex === 1 ? pick(TEN_DEM_NU) : pick(TEN_DEM_NAM);
    const ten = sex === 1 ? pick(TEN_NU)     : pick(TEN_NAM);
    return pick(HO) + " " + dem + " " + ten;
  }
  function makeAddr()  { return (10 + pickN(280)) + " " + pick(DUONG); }
  function makePhone() {
    const tail = String(20000000 + pickN(80000000));
    return "09" + tail.slice(-8);
  }
  function makeCccd(y) {
    const yy = String(y).slice(2);
    return "031" + yy + String(100000 + pickN(900000));
  }

  // dobAge(n) → ngày sinh để người đó đủ đúng n tuổi tại 2026-06-16 (đã qua sinh nhật)
  function dobAge(age) { return (2026 - age) + "-03-15"; }
  // dobMonths(m) → ngày sinh để người đó đúng m tháng tuổi (theo hàm tuoiThang)
  function dobMonths(m) {
    if (m === 0) return "2026-06-10";
    let mm = 6 - (m % 12), y = 2026 - Math.floor(m / 12);
    if (mm <= 0) { mm += 12; y--; }
    return y + "-" + String(mm).padStart(2, "0") + "-10";
  }

  function mkMember(sex, dob, rel, edu, job) {
    const y = Number(dob.slice(0, 4));
    const isAdult = (2026 - y) >= 18;
    return {
      FullName: makeName(sex), SexId: sex, DateOfBirth: dob,
      IdentityId: isAdult ? makeCccd(y) : "",
      RelationshipId: rel, RaceId: 1, ReligionId: 1,
      EducationId: edu || null, JobId: job || null,
    };
  }

  /* ---- Sinh 191 trẻ em (<18 tuổi) khớp các nhóm đối tượng ---- */
  const children = [];
  // Vitamin A only (12–36 tháng): 15
  for (let i = 0; i < 15; i++) {
    const ageM = 12 + (i % 25);
    const sex = i % 2 === 0 ? 2 : 1;
    children.push(mkMember(sex, dobMonths(ageM), sex === 1 ? 18 : 39));
  }
  // Tiêm chủng + Vitamin A (6–11 tháng): 5
  for (let i = 0; i < 5; i++) {
    const sex = i % 2 === 0 ? 2 : 1;
    children.push(mkMember(sex, dobMonths(7 + i), sex === 1 ? 18 : 39));
  }
  // Tiêm chủng only (0–5 tháng): 3
  for (let i = 0; i < 3; i++) {
    const sex = i % 2 === 0 ? 2 : 1;
    children.push(mkMember(sex, dobMonths(i * 2), sex === 1 ? 18 : 39));
  }
  // Trẻ vào lớp 1 (sinh năm 2020): 10
  for (let i = 0; i < 10; i++) {
    const sex = i % 2 === 0 ? 2 : 1;
    const mo = 1 + (i * 7) % 11;
    children.push(mkMember(sex, "2020-" + String(mo).padStart(2, "0") + "-15", sex === 1 ? 18 : 39, 1, 12));
  }
  // Nữ 15–17 (đóng góp cho nhóm phụ nữ sinh đẻ): 20
  for (let i = 0; i < 20; i++) {
    children.push(mkMember(1, dobAge(15 + (i % 3)), 18, 3, 12));
  }
  // Nam 15–17 (không thuộc nhóm đối tượng nào): 20
  for (let i = 0; i < 20; i++) {
    children.push(mkMember(2, dobAge(15 + (i % 3)), 39, 3, 12));
  }
  // Trẻ khác 4–14 tuổi (tránh 6 tuổi để không tính nhầm lớp 1): 118
  const otherAges = [4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
  for (let i = 0; i < 118; i++) {
    const age = otherAges[i % otherAges.length];
    const sex = i % 2 === 0 ? 2 : 1;
    children.push(mkMember(sex, dobAge(age), sex === 1 ? 18 : 39, age >= 11 ? 2 : 1, 12));
  }

  /* ---- Sinh 524 người trưởng thành (18+) ---- */
  // Heads (194): toàn bộ chủ hộ từ nhóm 26+
  const headPool = [];
  // 140 nam 26–59
  for (let i = 0; i < 140; i++) headPool.push(mkMember(2, dobAge(26 + (i % 34)), 1, 4, 48));
  // 30 nữ 50–59
  for (let i = 0; i < 30; i++)  headPool.push(mkMember(1, dobAge(50 + (i % 10)), 1, 4, 14));
  // 24 cao tuổi (60–69) làm chủ hộ
  for (let i = 0; i < 24; i++)  headPool.push(mkMember(i % 2 === 0 ? 2 : 1, (1957 + (i % 10)) + "-03-15", 1, 2, 46));

  // Others (330): các thành viên còn lại trong hộ
  const otherAdults = [];
  // 35 nam 18–25 (nghĩa vụ quân sự)
  for (let i = 0; i < 35; i++)  otherAdults.push(mkMember(2, dobAge(18 + (i % 8)), 39, 5, 50));
  // 146 nữ 18–49 (phụ nữ sinh đẻ)
  for (let i = 0; i < 146; i++) otherAdults.push(mkMember(1, dobAge(18 + (i % 32)), 2, 4, 14));
  // 64 nữ 50–59
  for (let i = 0; i < 64; i++)  otherAdults.push(mkMember(1, dobAge(50 + (i % 10)), 2, 2, 14));
  // 13 người mừng thọ năm nay (2026): 70/75/80/85/90/95
  const mtYears = [1956, 1956, 1956, 1956, 1951, 1951, 1951, 1946, 1946, 1941, 1941, 1936, 1931];
  for (let i = 0; i < 13; i++) {
    const sex = i % 2 === 0 ? 2 : 1;
    otherAdults.push(mkMember(sex, mtYears[i] + "-03-15", sex === 2 ? 5 : 6, 1, 46));
  }
  // 72 cao tuổi còn lại (60–69)
  for (let i = 0; i < 72; i++) {
    const sex = i % 2 === 0 ? 2 : 1;
    otherAdults.push(mkMember(sex, (1957 + (i % 10)) + "-03-15", sex === 2 ? 5 : 6, 2, 46));
  }

  /* ---- Trộn để các hộ có thành phần đa dạng ---- */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = pickN(i + 1);
      const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
  }
  const others = children.concat(otherAdults); // 191 + 330 = 521
  shuffle(otherAdults);                         // chủ hộ giữ thứ tự, các "khác" trộn
  shuffle(others);

  /* ---- Cỡ hộ (194 hộ tổng 715 nhân khẩu, trung bình ~3,69) ---- */
  const sizes = [];
  for (let i = 0; i < 10; i++) sizes.push(1);
  for (let i = 0; i < 30; i++) sizes.push(2);
  for (let i = 0; i < 50; i++) sizes.push(3);
  for (let i = 0; i < 49; i++) sizes.push(4);
  for (let i = 0; i < 35; i++) sizes.push(5);
  for (let i = 0; i < 16; i++) sizes.push(6);
  for (let i = 0; i < 4;  i++) sizes.push(7);

  /* ---- Ghép thành 194 hộ tổng hợp ---- */
  const POLICY_OPTIONS = [[6], [6], [6], [6], [1], [2], [3], [5], [7], [8]];
  const synthetic = [];
  let hIdx = 0, oIdx = 0;
  for (let i = 0; i < sizes.length; i++) {
    const size = sizes[i];
    const head = headPool[hIdx++];
    const mems = [head];
    for (let j = 1; j < size; j++) mems.push(others[oIdx++]);
    synthetic.push({
      Id: 100 + i + 1,                        // 101..294
      DepartmentId: 1 + (i % 11),             // trải đều Thôn 01..11
      FamilyTypeId: 1 + (i % 2),              // luân phiên dân bản địa / nhập cư
      Owner: head.FullName,
      Phone: makePhone(),
      Address: makeAddr(),
      policyTypeIds: POLICY_OPTIONS[i % POLICY_OPTIONS.length],
      members: mems,
    });
  }

  return BASE.concat(synthetic); // 6 + 194 = 200 hộ
})();

/* ---------- THU QUỸ (bảng collect) ----------
   200 lượt thu để khớp Tổng quan: 174 đã thu + 26 chưa thu. */
const COLLECT = (function buildCollect() {
  let _s = 31415;
  function rnd() { _s = (_s * 1664525 + 1013904223) >>> 0; return _s; }
  function pickN(n) { return rnd() % n; }

  const famIds = FAMILY.map((f) => f.Id);
  const fundIds = FUND.filter((f) => f.IsActive).map((f) => f.Id);
  const amounts = [50000, 100000, 120000, 150000, 200000, 300000, 500000];
  const records = [];
  for (let i = 0; i < 200; i++) {
    const isCollected = i < 174 ? 1 : 0;
    const day = String(1 + pickN(28)).padStart(2, "0");
    const month = String(1 + pickN(12)).padStart(2, "0");
    records.push({
      Id: i + 1,
      FamilyId: famIds[pickN(famIds.length)],
      FundId: fundIds[pickN(fundIds.length)],
      SubmittedAmount: amounts[pickN(amounts.length)],
      IsCollected: isCollected,
      CollectedDate: isCollected ? `2024-${month}-${day}` : "",
      Description: isCollected ? "Đã thu" : "",
    });
  }
  return records;
})();

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
