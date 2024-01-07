// Tạo mảng chứa nhân viên
var arrNhanVien = [];

// ----- Lấy dữ liệu người dùng -----
function getValueUser() {
  var arrInput = document.querySelectorAll("form input, form  select");

  var arrError = document.querySelectorAll("form span.sp-thongbao");

  //   console.log(arrInput);
  //   console.log(arrError);

  var nhanVien = new NhanVien();
  var isValid = true;

  for (var i = 0; i < arrInput.length; i++) {
    var inputValue = arrInput[i].value;
    var errorId = arrError[i].id;
    var inputId = arrInput[i].id;

    if (inputId == "tknv") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinManValue(inputValue, errorId, 4, 6);
    } else if (inputId == "name") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkNameValue(inputValue, errorId);
    } else if (inputId == "email") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkEmailValue(inputValue, errorId);
    } else if (inputId == "password") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkPasswordValue(inputValue, errorId);
    } else if (inputId == "datepicker") {
      isValid &=
        checkEmptyValue(inputValue, errorId) && checkDate(inputValue, errorId);
    } else if (inputId == "luongCB") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinManValue(inputValue, errorId, 1000000, 20000000) &&
        checkNumber(inputValue, errorId);
    } else if (inputId == "gioLam") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinManValue(inputValue, errorId, 80, 200) &&
        checkNumber(inputValue, errorId);
    } else {
      isValid &= checkEmptyValue(inputValue, errorId);
    }
    var ID = arrInput[i].id;
    nhanVien[ID] = inputValue;
  }
  if (isValid) {
    return nhanVien;
  }
  console.log(nhanVien);
}

// ----- Lưu dữ liệu vào mảng -----
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = getValueUser();
  // console.log(nhanVien);
  arrNhanVien.push(nhanVien);
  // console.log(arrNhanVien);
  document.getElementById("formQLNV").reset();
  hienThiDuLieu();
};

// ----- Hiển thị dữ liệu ra bảng -----
function hienThiDuLieu(arr) {
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    console.log(nhanVien);
    var newNhanVien = new NhanVien();
    nhanVien = Object.assign(newNhanVien, nhanVien);

    content += `
    <tr>
    <td>${nhanVien.tknv}</td>
    <td>${nhanVien.name}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.gioLam}</td>
    <td>${nhanVien.chucvu}</td>
    <td>${nhanVien.tongLuong()}</td>
    <td>${nhanVien.xepLoaiNV()}</td>
    <td>
    <button onclick="xoaDuLieuUser('${
      nhanVien.tknv
    }')" class="btn btn-danger">Xóa</button>
      <button onclick="getInfoUser('${
        nhanVien.tknv
      }')" class="btn btn-warning ml-3">Sửa</button>
    </td>
    </tr>
    `;
    document.getElementById("tableDanhSach").innerHTML = content;
  }
}

// ----- Xóa dữ liệu USER -----
function xoaDuLieuUser(tk) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == tk) {
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    hienThiDuLieu();
  }
}

// ----- Cập nhật dữ liệu USER -----
function updateValueUser() {
  var nhanVien = getValueUser();
  console.log(nhanVien);
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.tknv == arrNhanVien[i].tknv) {
      arrNhanVien[i] = nhanVien;
    }
  }
  hienThiDuLieu();
  document.getElementById("formQLNV").reset();
}

document.getElementById("btnCapNhat").onclick = updateValueUser;
