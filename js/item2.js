$(document).ready(function () {

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let nav_top = $('.nav_bar_box').offset().top;
        // console.log(s_top)
        let spec_top = $(".spec_sec").offset().top;
        let desc_top = $(".desc_sec").offset().top;
        console.log(desc_top)
        console.log(spec_top)
        if (s_top > spec_top) {
            $("#nav_spec").css({
                borderColor: "#34ce29",
                backgroundColor: "#34ce29"
            })
            $("#nav_desc").css({
                borderColor: "#999999",
                backgroundColor: "#1c1c1c"
            })
        }
        else if (s_top > desc_top) {
            let top = "-38px"
            if (window.innerWidth <= 1150) {
                top = "-40px"
            }
            $(".nav_bar_box").css({
                backgroundColor: "#1c1c1c",
                width: "100%",
                maxWidth: "850px",
                position: "fixed",
                left: "50%",
                top: top,
                transform: "translateX(-50%)",
                transition: "position 0s, opacity 0.3s max-width 0.3s"
            })
            $("#nav_desc").css({
                borderColor: "#34ce29",
                backgroundColor: "#34ce29"
            })
            $("#nav_spec").css({
                borderColor: "#999999",
                backgroundColor: "#1c1c1c"
            })
        }
        else {
            $(".nav_bar_box").css({
                position: "static",
                width: "100%",
                maxWidth: "1600px",
                transform: "translateX(0)",
                transition: "position 0.3s, opacity 0.3s, max-width 0.3s"
            })
        }
    })
    let nav_desc = $("#nav_desc").innerHeight()
    $("#nav_desc a, #nav_spec a, .top_btn a").click(function () {
        event.preventDefault();
        let href = $(this).attr('href');
        let pos = $(href).offset().top;
        $("html, body").animate({
            scrollTop: pos - nav_desc - 250
        })
    })


    let icon_chk = true;
    $(".spec_title").click(function () {
        let img_src = $(".spec_icon img")
        let index = $(".spec_title").index($(this))
        $(".spec_desc").eq(index).toggleClass("spec_on")
        if ($(".spec_desc").eq(index).hasClass("spec_on") == true) {
            img_src.eq(index).attr("src", "./img/item_page/button/minus.png")
            icon_chk = false;
        }
        else {
            img_src.eq(index).attr("src", "./img/item_page/button/plus.png")
        }

    })
    $(".opt_box div").mouseenter(function () {
        let index = $(".opt_box div").index($(this))
        $(".opt_box div").css({
            // backgroundColor: "#1c1c1c",
            borderColor: "#999999"
        })
        $(".opt_box div").eq(index).css({
            // backgroundColor: "#1c1c1c",
            borderColor: "#34ce29"
        })
    })
    $(".opt_box div").mouseleave(function () {
        let index = $(".opt_box div").index($(this))
        $(".opt_box div").css({
            // backgroundColor: "#1c1c1c",
            borderColor: "#999999"
        })
    })
    $(".opt_box div").click(function () {
        let index = $(".opt_box div").index($(this))
        $(".opt_box div").css({
            backgroundColor: "#1c1c1c",
            borderColor: "#999999"
        })
        $(".opt_box div").eq(index).css({
            backgroundColor: "#34ce29",
            borderColor: "#34ce29"
        })
        let price_list = [123456, 234567, 345678, 456789, 567890, 678901]
        for (let i = 0; i < price_list.length; i++) {
            if (index == i) {
                $(".price").text(price_list[index].toLocaleString("ko") + " 원")
            }
        }
        if (index == 2) {
            $(".notice_box").css({
                opacity: "1"
            })
        }
        else {
            $(".notice_box").css({
                opacity: "0"
            })
        }
    })
    let big_img_insert = `<img src="./img/item_page/thumb/thumb0.jpg" alt="">`
    $(".big_img").append(big_img_insert)
    for (let i = 0; i < 3; i++) {
        let small_img_insert = `<img src="./img/item_page/thumb/thumb${i + 1}.jpg" alt="">`

        $(".small_img").eq(i).append(small_img_insert);
    }
    $(".small_img").mouseenter(function () {
        let index = $(".small_img").index($(this))
        let get_img = $(".small_img img").eq(index).attr("src")
        $(".big_img img").attr("src", get_img)


    })
    $(".small_img").mouseleave(function () {
        $(".big_img img").attr("src", "./img/item_page/thumb/thumb0.jpg")
    })
})