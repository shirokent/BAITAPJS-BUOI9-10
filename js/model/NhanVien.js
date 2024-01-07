// Tạo lớp đối tượng nhân viên

function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.datepicker = "";
  this.luongCB = 0;
  this.chucvu = "";
  this.gioLam = 0;

  // Phương thức tính tổng lương
  this.tongLuong = function () {
    if (this.chucvu == "Sếp") {
      return this.luongCB * 3;
    } else if (this.chucvu == "Trưởng phòng") {
      return this.luongCB * 2;
    } else {
      return this.luongCB;
    }
  };

  // Phương thức xếp loại đối tượng nhân viên
  this.xepLoaiNV = function () {
    var xepLoai = "";
    if (this.gioLam < 160) {
      xepLoai = "Nhân viên trung bình";
      // return xepLoai;
    } else if (this.gioLam >= 160 && this.gioLam < 176) {
      xepLoai = "Nhân viên khá";
    } else if (this.gioLam >= 176 && this.gioLam < 192) {
      xepLoai = "Nhân viên giỏi";
      // return xepLoai;
    } else {
      xepLoai = "Nhân viên xuất sắc";
      // return xepLoai;
    }
    return xepLoai;
  };
}
