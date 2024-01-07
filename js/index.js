// Tạo mảng chứa nhân viên
var arrNhanVien = [];

// ----- Lấy dữ liệu người dùng -----
function getValueUser() {
  var arrInput = document.querySelectorAll("form input, form select");

  var arrError = document.querySelectorAll("form span.sp-thongbao");

  //   console.log(arrInput);
  console.log(arrError);

  var nhanVien = new NhanVien();
  var isValid = true;

  for (var i = 0; i < arrInput.length; i++) {
    var inputValue = arrInput[i].value;
    var errorId = arrError[i].id;
    var inputId = arrInput[i].id;

    if (inputId == "tknv") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkMinMaxValue(inputValue, errorId, 4, 6);
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
        checkNumber(inputValue, errorId);
    } else if (inputId == "gioLam") {
      isValid &=
        checkEmptyValue(inputValue, errorId) &&
        checkNumber(inputValue, errorId);
    } else {
      isValid &= checkEmptyValue(inputValue, errorId);
    }
    var ID = arrInput[i].id;
    nhanVien[ID] = inputValue;
  }
  console.log(isValid);
  if (isValid) {
    return nhanVien;
  }
  console.log(nhanVien);
}

// ----- Lưu dữ liệu vào mảng -----
document.getElementById("btnThemNV").onclick = function () {
  var nhanVien = getValueUser();
  console.log(nhanVien);
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    document.getElementById("formQLNV").reset();
    luuDuLieuLocalStorage("arrNhanVien", arrNhanVien);
    hienThiDuLieu();
  }
  // console.log(arrNhanVien);
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

// ----- Lưu dữ liệu vào localStorage -----
function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

// ----- Lấy dữ liệu đã lưu -----
function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem("arrNhanVien");
  if (dataLocal) {
    var convertData = JSON.parse(dataLocal);
    arrNhanVien = convertData;
    hienThiDuLieu();
  } else {
  }
}
layDuLieuLocalStorage();

// ----- Xóa dữ liệu USER -----
function xoaDuLieuUser(tk) {
  console.log(tk);
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].tknv == tk) {
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    luuDuLieuLocalStorage("arrNhanVIen", arrNhanVien);
    hienThiDuLieu();
  }
}

// ----- Cập nhật nhân viên -----

function getInfoUser(tk) {
  console.log(tk);
  var nhanVienIndex = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    var nhanVien = arrNhanVien[i];
    if (nhanVien.tknv == tk) {
      nhanVienIndex = nhanVien;
    }
  }
  var arrInput = document.querySelectorAll("form input, form select");
  console.log(arrInput);
  for (var j = 0; j < arrInput.length; j++) {
    var htmlDom = arrInput[j];
    var id = htmlDom.id;
    htmlDom.value = nhanVienIndex[id];
  }
  document.getElementById("tknv").readOnly = true;
}

document.querySelector("btn-waring").onlick = getInfoUser();

function updateValueUser() {
  var nhanVien = getValueUser();
  console.log(nhanVien);
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.tknv == arrNhanVien[i].tknv) {
      arrNhanVien[i] = nhanVien;
    }
  }
  luuDuLieuLocalStorage("arrNhanVien", arrNhanVien);
  hienThiDuLieu();
  document.getElementById("formQLNV").reset();
  document.getElementById("tknv").readOnly = false;
}

document.getElementById("btnCapNhat").onclick = updateValueUser;
