$(document).ready(function () {

})

function focus_chk(type) {
    let write_msg = document.querySelectorAll('.error_msg');
    console.log(write_msg.length)
    for (let i = 0; i < write_msg.length; i++) {
        write_msg[i].innerText = ""
    }
    let txt_pw = document.getElementById('txt_pw');
    let txt_pwChk = document.getElementById('txt_pwChk');
    // txt_pw.nextElementSibling.innerText = "";
    // txt_pwChk.nextElementSibling.innerText = "";

    if (type == "id_chk") {
        write_msg[0].innerText = "ㆍ아이디는 5자리 ~ 15자리"
    }
    else if (type == "pw_chk") {
        write_msg[2].innerText = "ㆍ비밀번호는 최소 8자리 이상";
        write_msg[3].innerText = "ㆍ영문 대소문사/숫자/특수문자 중 2가지 이상 조합";

        if (txt_id.value.length < 5 || txt_id.value.length > 15) {
            write_msg[0].innerText = "ㆍ아이디는 5자리 ~ 15자리"
        }
        print_msg(txt_id, 1);

    }
    else if (type == "pwChk_chk") {
        if (txt_pw.value.length < 8) {
            write_msg[2].innerText = "ㆍ비밀번호는 최소 8자리 이상"
        }
        print_msg(txt_id, 1);
        print_msg(txt_pw, 4);
    }
    else if (type == "name_chk") {
        if (txt_pw.value != txt_pwChk.value) {
            write_msg[5].innerText = "ㆍ비밀번호를 동일하게 작성해주세요"
        }
        print_msg(txt_id, 1);
        print_msg(txt_pw, 4);
        print_msg(txt_pwChk, 6);
    }
    else if (type == "add_chk") {
        if (txt_name.value.length < 2) {
            write_msg[7].innerText = "ㆍ이름을 확인해주세요"
        }
        print_msg(txt_id, 1);
        print_msg(txt_pw, 4);
        print_msg(txt_pwChk, 6);
        print_msg(txt_name, 8);
    }
    else if (type == "number_chk") {
        if (txt_add.value.length < 2) {
            write_msg[9].innerText = "ㆍ주소 확인해주세요"
        }
        print_msg(txt_id, 1);
        print_msg(txt_pw, 4);
        print_msg(txt_pwChk, 6);
        print_msg(txt_name, 8);
        print_msg(txt_add, 10);
    }
}
function print_msg(from, to) {
    let write_msg = document.querySelectorAll('.error_msg');
    if (from.value.length == 0 || from.value == "") {
        write_msg[to].innerText = "ㆍ필수 입력 항목 입니다"
    }
}
function click_chk() {
    print_msg(txt_id, 1);
    print_msg(txt_pw, 4);
    print_msg(txt_pwChk, 6);
    print_msg(txt_name, 8);
    print_msg(txt_add, 10);
    print_msg(txt_no, 12);

    if (txt_id.value.length == 0 || txt_id.value == "" ||
        txt_id.value.length < 5 || txt_id.value.length > 15 ||
        txt_pw.value.length == 0 || txt_pw.value == "" ||
        txt_pw.value.length < 8 ||
        txt_pwChk.value.length == 0 || txt_pwChk.value == "" ||
        txt_name.value.length == 0 || txt_name.value == "" ||
        txt_add.value.length == 0 || txt_add.value == "" ||
        txt_no.value.length == 0 || txt_no.value == "") {
        alert("입력을 확인해주세요")
        return false;
    }
}
function checkNumber(event) {
    if (event.key === '.'
        || event.key === '-'
        || event.key >= 0 && event.key <= 9) {
        return true;
    }

    return false;
}