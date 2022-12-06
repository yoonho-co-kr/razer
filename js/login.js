function focus_chk(type) {

    let txt_pw = document.getElementById('txt_pw');
    let txt_pwChk = document.getElementById('txt_pwChk');
    txt_pw.nextElementSibling.innerText = "";
    txt_pwChk.nextElementSibling.innerText = "";

    let msg_id = document.getElementById('msg_id');
    msg_id.innerText = "";

    if (type == "txt_pw") {
        txt_pw.nextElementSibling.innerText = "영문자 대/소문자 특수문자, 숫자 포함 8 ~ 32자";
        let txt_id = document.getElementById('txt_id');


        if (txt_id.value.length == 0 || txt_id.value == "") {
            msg_id.innerText = "필수 입력 항목 입니다"
        }
    }
    else if (type == "txt_pwChk") {
        if (txt_id.value.length == 0 || txt_id.value == "") {
            msg_id.innerText = "필수 입력 항목 입니다"
        }
        if (txt_pw.value.length == 0 || txt_id.value == "") {
            txt_pw.nextElementSibling.innerText = "필수 입력 항목 입니다"
        }
    }
    else if (type == "txt_email") {
        if (txt_id.value.length == 0 || txt_id.value == "") {
            msg_id.innerText = "필수 입력 항목 입니다"
        }
        if (txt_pw.value.length == 0 || txt_id.value == "") {
            txt_pw.nextElementSibling.innerText = "필수 입력 항목 입니다"
        }
        if (txt_pwChk.value.length == 0 || txt_id.value == "") {
            txt_pwChk.nextElementSibling.innerText = "필수 입력 항목 입니다"
        }
    }
}