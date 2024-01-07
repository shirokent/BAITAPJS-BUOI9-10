// ----- Check dữ liệu rỗng -----
function checkEmptyValue(value, errorId) {
  // Trường hợp dữ liệu không rỗng
  if (value) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    // Trường hợp dữ liệu rỗng
    document.getElementById(errorId).innerHTML = "Vui lòng không bỏ trống";
    return false;
  }
}

// ----- Check dữ liệu tên nhân viên -----
function checkNameValue(value, errorId) {
  // Tên nhân viên phải là chữ
  var regexName = /^[a-zA-Z ]+$/;
  var checkName = regexName.test(value);
  if (checkName) {
    // Trường hợp tên đúng định dạng
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    // Trường hợp tên không đúng định dạng
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập đúng tên nhân viên";
    return false;
  }
}

// ----- Check số lượng ký tự tối thiểu và tối đa -----
function checkMinMaxValue(value, errorId, min, max) {
  var doDaiKyTu = value.trim().length;
  if (doDaiKyTu >= min && doDaiKyTu <= max) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      errorId
    ).innerHTML = `Vui lòng nhập dữ liệu trong khoảng ${min} ký tự và ${max} ký tự`;
    return false;
  }
}

// ----- Check định dạng email -----
function checkEmailValue(value, errorId) {
  var regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var checkEmail = regexEmail.test(value);
  if (checkEmail) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhâp đúng định dạng email";
    return false;
  }
}

// ----- Check định dạng password -----
function checkPasswordValue(value, errorId) {
  var regexPassWord = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
  var checkPassWord = regexPassWord.test(value);
  if (checkPassWord) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập mật khẩu từ 6-10 ký tự, bao gồm ít nhất 1 chữ số, 1 ký tự in hoa và 1 ký tự đặc biệt";
    return false;
  }
}

// ----- Check định dạng ngày mm//dd/yyyy -----
function checkDate(value, errorId) {
  var regexDate = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  var checkDate = regexDate.test(value);
  if (checkDate) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML =
      "Vui lòng nhập đúng định dạng mm/dd/yyyy";
    return false;
  }
}

// ----- Check định dạng số -----
function checkNumber(value, errorId) {
  var regexNumber = /^\d+$/;
  var checkNumbering = regexNumber.test(value);
  if (checkNumbering) {
    document.getElementById(errorId).innerHTML = "";
    return true;
  } else {
    document.getElementById(errorId).innerHTML = "Vui lòng nhập đúng định dạng";
    return false;
  }
}
