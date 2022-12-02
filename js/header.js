const cate_arr = ['노트북', '데스크탑 부품', '마우스', '패드', '키보드', '헤드셋', '스피커'];

$(document).ready(function () {
    let make_header = `<div class="header1">
            <div class="burger_box">
                <div class="line" id="line_top"></div>
                <div class="line" id="line_mid"></div>
                <div class="line" id="line_bot"></div>
            </div>
            <div id="header1_wrap_l">
                <div class="logo"><a href="index.html"><img src="./img/logo/Razer-Logo-PNG-Image.png" alt=""></a></div>
                <div class="header2">
                </div>
            </div>
            <div id="header1_wrap_r">
                <div class="account">
                    <!-- <div class="regist">회원가입</div> -->
                    <div class="login"><a href="login.html">로그인</a></div>
                    <div class="search"><img src="./img/header_icon/green_search.png" alt=""></div>
                    <div class="cart"><img src="./img/header_icon/green_cart.png" alt=""></div>
                </div>
            </div>
        </div>
        <!-- 중분류 -->
        <div class="header3"></div>
        <!-- 크로마 효과 -->
        <div class="rgb2_box">
            <div class="rgb2"></div>
        </div>
        <div class="mobile_wrap"></div>
        <!-- 크로마 효과 -->
        <div class="cart_box">
            <div class="cart_title">장바구니</div>
            <div class="cart_items">
                <div class="cart_thumb_box"></div>
                <div class="cart_txt_box">
                    <div class="cart_txt" id="product_name">Basilisk V3 Pro</div>
                    <div class="cart_txt" id="product_price">123,456원</div>
                    <div class="cart_txt" id="product_qty">수량: 1</div>
                </div>
            </div>
            <div class="cart_btn_box">
                <div class="cart_btn" id="go_cart">장 바 구 니</div>
                <div class="cart_btn" id="go_check_out">결 제</div>
            </div>
        </div>`
    $("#wrap_header").append(make_header)
    /*헤더1(대분류) 생성*/
    for (let i = 0; i < cate_arr.length; i++) {
        let make_menu2 = ` <div class="menu2">
                                    <div class="menu2_txt">${cate_arr[i]}</div>
                                    <div class="menu2_arrow">           
                                        <svg aria-hidden="true" aria-labelledby="chevron-down--UBn4GpqrJY" role="img" fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <desc id="chevron-down--UBn4GpqrJY">Chevron down</desc>
                                        <path
                                            d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z">
                                        </path>
                                        </svg>
                                    </div>
                                    <div class="menu2_line"></div>
                                </div>`
        $('.header2').append(make_menu2);
    }
    /*헤더3 박스 생성*/
    for (let i = 0; i < ITEM_LIST.length; i++) {
        let make_menu3_box = `<div class="menu3"></div>`
        $('.header3').append(make_menu3_box)
        for (let j = 0; j < ITEM_LIST[i].length; j++) {
            // <a href="product.html?cate=${ITEM_LIST[i][j].title.replaceAll(" ", "")}" >
            let make_menu3 = `  <a href="product.html?cate=${i}&sub_cate=${j}">
                                    <div class="menu_info">
                                        <div class="menu_icon"><img src="${ITEM_LIST[i][j].icon}" alt=""></div>
                                        <div class="menu_txt">${ITEM_LIST[i][j].title.substring(0, 1).toUpperCase() + ITEM_LIST[i][j].title.substring(1)}</div >
                                    </div> 
                                </a>`
            $('.menu3').eq(i).append(make_menu3)
        }
    }
    /*헤더3 호버 색상변경 */
    $('.menu_info').hover(function () {
        $('.menu_info').css({
            color: '#efefef'
        })
        $(this).css({
            color: "#34ce29"
        }, 300)
    })
    /*컨텐츠 부분 클릭 시 헤더 & 카트 창 OFF*/
    // $('#wrap_contain').click(function () {

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        if (s_top > 0) {
            $('.menu2_arrow').css({
                transform: "translate(-50%, -50%) rotateZ(180deg)",
                transition: "all 0.3s",
                transformOrigin: 'bottom',
                // backgroundColor: "#707070"
            })
            $('.menu2_arrow').find('svg').css({
                fill: "#999999"
            })
            $('.rgb2_box').css({
                transform: "translateY(59px)",
                transition: "all 0.2s"

            })
            $('.menu2_line').css({
                transform: "translateY(-10px) scaleX(0.1)",
                opacity: "0"
            })
            $('.menu3').eq($(this).index()).css({
                top: "0px",
                transition: "top 0.3s, opacity 0.3s",
                opacity: "0",

            })
            $(".menu2_txt").css({
                color: "#707070"
            })
            $('.menu3').css({
                top: "0px",
                transition: "all 0.2s",
                opacity: "0"
            })
            $('#wrap_header').css({
                height: "60px",
                transition: "all 0.2s"
            })
            $('.cart_box').removeClass('cart_box_block')
        }
    })


    // })
    /*카트 ON/OFF*/
    $('.cart').click(function () {
        if ($('.cart_box').hasClass('cart_box_block') == false)
            $('.cart_box').addClass('cart_box_block')
        else $('.cart_box').removeClass('cart_box_block')
    })
    /*
    헤더 1 클릭시 
    1. 헤더3 내려오기 
    2. 헤더1 언더바 키우기 & 화살표 돌리기
    3. 이전에 적용했던거 효과 삭제
    */
    $('.menu2').click(function () {
        $('.menu2_arrow').css({
            transform: "translate(-50%, -50%) rotateZ(180deg)",
            transition: "all 0.3s",
            transformOrigin: 'bottom',
            // backgroundColor: "#707070"
        })
        $('.menu2_arrow').find('svg').css({
            fill: "#999999"
        })
        $('.menu2_line').css({
            transform: "translateY(-10px) scaleX(0.1)",
            opacity: "0"
        })
        $('.menu3').css({
            top: "0px",
            transition: "all 0.2s",
            opacity: "0"
        })
        $(".menu2_txt").css({
            color: "#707070"
        })
        $(this).find('.menu2_txt').css({
            color: "#EFEFEF"
        })
        //화살표 회전
        $(this).find('.menu2_arrow').css({
            transform: 'translate(-50%, -50%) rotateZ(0deg)',
            transformOrigin: 'bottom',
            transition: "all 0.3s",
        })
        $(this).find('svg').css({
            fill: "#34ce29"
        })
        //언더바 1
        $(this).find('.menu2_line').css({
            opacity: "1",
            transform: "translateY(-10px) scaleX(1)",
            transition: "all 0.2s"
        })
        $('.rgb2_box').css({
            transform: "translateY(170px)",
            transition: "all 0.2s"
        })
        $('.menu3').eq($(this).index()).css({
            top: "115px",
            transition: "all 0.2s",
            opacity: "1",
        })
        $('#wrap_header').css({
            height: "172px",
            transition: "all 0.2s"
        })
    })
    /*헤더 FIXED WHEN SCROLL*/
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        let header_top = $('#wrap_header').offset().top;
        if (s_top > 0) {
            $("#wrap_header").css({
                backgroundColor: "#1c1c1c",
                opacity: "0.9",
                position: "fixed",
                left: "0",
                top: "0",
                transition: "position 0s, opacity 0.3s"
            })

        }
        else {
            $("#wrap_header").css({

                opacity: "1",
                position: "absolute",
                left: "0",

                transition: "position 0.3s, opacity 0.3s"

            })
        }
    })
    /* ====================================================================================================
    =========================== 푸터 =====================================================================
    ======================================================================================================= */
    let make_footer = `        <div class="row_footer1">
            <ul class="col_footer">
                <li>레이저 스토리</li>
                <li>채용</li>
                <li>투자자</li>
                <li>블로그</li>
                <li>프레스</li>
                <li>연락처</li>
            </ul>
            <ul class="col_footer">
                <li>사회 공헌</li>
                <li>지속 가능성</li>
                <li>재활용</li>
            </ul>
            <ul class="col_footer">
                <li>이메일 설정</li>
            </ul>
            <ul class="col_footer">
                <li class="sub_logo">FOR GAMERS. BY GAMERS.™</li>
                <li class="social_icons">
                    <div class="icons">
                        <a href="https://www.youtube.com/@razer">
                            <img src="./img/social_icon/youtube.png" alt="">
                        </a>
                    </div>
                    <div class="icons"><a href="https://www.facebook.com/razer">
                            <img src="./img/social_icon/facebook.png" alt="">
                        </a>
                    </div>
                    <div class="icons"><a href="https://www.instagram.com/razer">
                            <img src="./img/social_icon/ig.png" alt="">
                        </a>
                    </div>
                    <div class="icons"><a href="https://www.twitter.com/Razer">
                            <img src="./img/social_icon/twitter.png" alt="">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="row_footer2">
            <div class="copyright">Copyright © 2022 Razer Inc. All rights reserved. </div>
            <ul class="legal_term">
                <li>Site Map</li>
                <li>Legal Terms</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
            </ul>
        </div>`
    $(".footer").append(make_footer);
    /* ====================================================================================================
    =========================== 반응형 =====================================================================
    ======================================================================================================= */
    let header_move = "115"
    if (matchMedia("screen and (max-width: 500px)").matches) {
        header_move = "75"
    }
    if (matchMedia("screen and (max-width: 1150px)").matches) {

        $('.menu2').click(function () {
            $('.menu2_line').css({
                transform: "translateY(0) scaleX(0.1)",
                opacity: "0"
            })
            $('.menu3').css({
                left: "-100%",
                top: "0",
                transition: "all 0.2s",
                opacity: "0"
            })
            $(".menu2_txt").css({
                color: "#707070"
            })
            $(this).find('.menu2_txt').css({
                color: "#EFEFEF"
            })
            //언더바 1
            $(this).find('.menu2_line').css({
                opacity: "1",
                transform: "translateY(0) scaleX(1)",
                transition: "all 0.2s"
            })
            $('.rgb2_box').css({
                transform: "translateY(0)",
                transition: "all 0.2s"
            })
            $('.menu3').eq($(this).index()).css({
                left: "0",
                top: "0",
                transition: "all 0.2s",
                opacity: "1",
            })
            $('#wrap_header').css({
                height: "63px",
                transition: "all 0.2s"
            })
            $('.header2').css({

                transition: "all 0.2s"
            })
            $('.header3').css({
                transform: "translateX(" + header_move + "%)",
                transition: "all 0.2s"
            })
        })
        let ham_chk = true;
        $('.burger_box').click(function () {

            if (ham_chk) {
                // 햄버거 => X 관련 코드  
                ham($('#line_top'), 'translateY(8px)', 'translateY(8px) rotate(45deg)');
                ham($('#line_mid'), -1, 'scale(0)');
                ham($('#line_bot'), 'translateY(-8px)', 'translateY(-8px) rotate(-45deg)');
            }
            else {
                // X => 햄버거 관련 코드   
                ham($('#line_top'), 'translateY(8px) rotate(0)', 'translateY(0px) rotate(0)');
                ham($('#line_mid'), -1, 'scale(1)');
                ham($('#line_bot'), 'translateY(-8px) rotate(0deg)', 'translateY(0px)');
            }
            // 메뉴판 움직임 관련 코드 
            $('.header2').toggleClass('ham_active');
            $('.header1').toggleClass('ham_active2');
            // if ($('.header3').hasClass("ham_active")) {
            $('.menu3').css({
                top: "0px",
                left: "0",
                transition: "top 0.3s, opacity 0.3s",
                opacity: "0",
            })

            $('.header3').css({
                transform: "translateX(-" + (+(header_move) + 50) + "%)"
            })
            $('.menu2_line').css({
                transform: "translateY(-10px) scaleX(0.1)",
                opacity: "0"
            })
            // }
            ham_chk = !ham_chk;
        })
        const timer = 300;
        function ham(el, trans, rot) {

            if (trans != -1) {
                el.css({
                    transform: trans
                });
            }
            setTimeout(() => {
                el.css({
                    transform: rot
                })
            }, timer);
        }
        $(window).scroll(function () {
            let s_top = $(window).scrollTop();
            if (s_top > 0) {
                $('.header3').css({
                    transform: "translateX(-" + (+(header_move) + 50) + "%)"
                })
            }
        })





    }
})
