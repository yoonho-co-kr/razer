$(document).ready(function () {
    $('.thumb_img').click(function () {
        var src = $(this).attr('src');
        $('#display').attr('src', src);

        $('thumb_img').removeClass('on');
        $(this).addClass('on')

    });


    ////////////////////슬라이드
    $('.slide').eq(0).css({ left: 0 });

    let index_no = 0;
    let timer = 1000;

    $('#btn_slide_R').click(function () {

        slide(index_no % 4, '-100%', (index_no + 1) % 4, '100%', index_no += 1);
    });
    $('#btn_slide_L').click(function () {

        slide(index_no % 4, '100%', (index_no - 1) % 4, '-100%', index_no -= 1);
    });

    let interval;
    function auto_slide() {
        interval = setInterval(() => {
            $('#btn_slide_R').trigger('click');
        }, 2000);
    }
    auto_slide();

    $('.img_slide').hover(function () {

        clearInterval(interval)
    }, function () {

        auto_slide()
    });

    function slide(o_index, o_pos, c_index, c_pos, next_index) {
        btn_status();


        $('.slide').eq(o_index).animate({
            left: o_pos
        }, timer);


        $('.slide').eq(c_index).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer);

        index_no = next_index;
    }

    function btn_status() {

        $('.btn_slide').css({ pointerEvents: 'none' })


        setTimeout(() => {
            $('.btn_slide').css({ pointerEvents: 'auto' })
        }, timer);
    }
    // $(".accordion").click(function () {
    //     $(".panel").eq($(this).index()).toggleClass("active");

    //     if ($(this).eq($(this).index()).hasClass("active")) {
    //         $(".panel").eq($(this).index()).css({
    //             height: "0"
    //         })
    //     }
    //     else {
    //         $(".panel").eq($(this).index()).css({
    //             height: "200px"
    //         })
    //     }
    // });
});


function plus() {
    let txt_qty = document.getElementById('but_text');
    let qty = +txt_qty.value + 1;
    txt_qty.value = qty;

    get_final_price(qty);


}

function minus() {
    // 개수 변경
    let txt_qty = document.getElementById('but_text');

    if (txt_qty.value > 1) {
        let qty = +txt_qty.value - 1;
        txt_qty.value = qty;

        get_final_price(qty);


    }
    else {
        alert("최소 수량은 1개 입니다.");
    }
}

function get_final_price(qty) {

    let o_price = document.getElementById('o_price');
    o_price = +o_price.innerText.replace(",", "").replace("원", "");
    let f_price = o_price * qty;
    document.getElementById('f_price').innerText = f_price.toLocaleString("ko")
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


    // $(".panel").eq($(this).index()).classList.toggle("active");

    // this.classList.toggle("active");
    // let panel = this.nextElementSibling;
    // if(acc_act = false){

    // }
// })