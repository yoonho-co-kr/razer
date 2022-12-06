$(document).ready(function () {
    //메인배너 3개생성 > 메인배너 박스 넣기
    for (let i = 0; i < BANNER_LIST[0].length; i++) {
        let make_main_banner = `<div class="banner">
                                    <img src="${BANNER_LIST[0][i].image}" alt="">
                                </div>`

        $('.banner_box').append(make_main_banner);
    }
    //썸네일 6개 생성 > 썸네일박스 넣기
    let thumb_length = 6;
    $(window).resize(function () {

        if (window.innerWidth <= 500) {
            thumb_length = 4;
        }
        else {
            thumb_length = 6;
        }
        $('.thumb_box').empty();
        for (let i = 0; i < thumb_length; i++) {
            let make_thumb = `  <div class="thumb_scale">
                                <img src="${BANNER_LIST[1][i].image}" alt="">
                            </div>`
            $('.thumb_box').append(make_thumb);
        }
    })
    if (matchMedia("screen and (max-width: 500px)").matches) {
        thumb_length = 4;
    }

    for (let i = 0; i < thumb_length; i++) {
        let make_thumb = `  <div class="thumb_scale">
                                <img src="${BANNER_LIST[1][i].image}" alt="">
                            </div>`
        $('.thumb_box').append(make_thumb);
    }
    //서브배너 스크롤 효과
    $('.sub_banner').append(`<img class="sub_banner_img"src="${BANNER_LIST[2][0].image}" alt="">`)

    for (let i = 0; i < BANNER_LIST[3].length; i++) {
        let make_thumb_slide = `<div class="thumb_slide">
                                    <img src="./img/thumb_slide/thumb_slide_0${i + 1}.png" alt="">
                                </div>`
        $('.thumb_slide_box').append(make_thumb_slide)
    }
    /*******************************************/
    /***** 초기화 시작 *****/
    // 인디케이터 삽입
    let b_length = $('.banner').length;
    for (let i = 0; i < b_length; i++) {
        $('.indicator').append('<div class="slide_btn"></div>')
    }
    $('.slide_btn').eq(0).addClass('slide_color')


    // 0 번판은 가운데 배치
    $('.banner').eq(0).css({ left: 0 });
    /***** 초기화 끝 *****/
    /*******************************************/

    let index_no = 0;
    let timer = 1500;

    $('#btn_slide_R').click(function () {
        // btn_status()
        slide(index_no % b_length, '-100%', (index_no + 1) % b_length, '100%', (index_no + 1) % b_length);

    });
    $('#btn_slide_L').click(function () {
        // btn_status()
        slide(index_no % b_length, '100%', (index_no - 1) % b_length, '-100%', (index_no - 1) % b_length);
    });

    let interval;
    function auto_slide() {
        interval = setInterval(() => {
            $('#btn_slide_R').trigger('click');
        }, timer + 2000);
    }
    auto_slide();

    $('.main_banner').hover(function () {
        // 마우스 올렸을때 - 자동으로 동작하는거 멈출
        clearInterval(interval)
    }, function () {
        // 마우스 빠졌을때 - 다시 자동으로..
        auto_slide()
    });

    function slide(o_index, o_pos, c_index, c_pos, next_index) {

        btn_status();

        // 나갈판
        $('.banner').eq(o_index).animate({
            left: o_pos
        }, timer);

        // 들어올 판
        $('.banner').eq(c_index).css({
            left: c_pos
        }).animate({
            left: 0
        }, timer);

        index_no = next_index;


        /* 인디케이터 색 이동
            -순서
            1) 모든 circle에 indi_active 클래스 삭제
            2) 현재 번째꺼 하나에 indi_active 추가
        */
        $('.slide_btn').removeClass('slide_color');
        $('.slide_btn').eq(index_no % b_length).addClass('slide_color')
    }

    function btn_status() {
        // 버튼 막기
        $('.button').css({ pointerEvents: 'none' })

        // 일정시간 후에 버튼 다시 살리기
        setTimeout(() => {
            $('.button').css({ pointerEvents: 'auto' })
        }, timer);
    }

    // 1) circle 클릭 감지
    // 2) 몇번째 circle이 눌렸는지 감지
    // 3) banner 중에 2번에서 구한 번째꺼 가운데로 가져오기
    // 인디케이터 클릭
    $('.slide_btn').click(function () {
        let tmp_index = $(this).index()
        // 현재 보고있는것보다 클릭한게 우측
        // $(this).index() - 현재 몇번째꺼 눌렀는지 감지
        // $('.indi_active').index() - 현재 indi_active를 가지고있는 요소가 몇번째 요소인지 확인
        if (tmp_index > $('.slide_color').index()) {
            slide(index_no, '-100%', tmp_index, '100%', tmp_index)
        }
        // 좌측
        else if (tmp_index < $('.slide_color').index()) {
            slide(index_no, '100%', tmp_index, '-100%', tmp_index)
        }
    });
    /*썸네일 3X2 사진 넣기*/
    for (let i = 0; i < thumb_length; i++) {

        $('.thumb').eq(i).append(`<img src="../razer_img/thumb_slide/thumb_slide_0${i + 1}.png" alt="">`)
    }
    $('.thumb_slide_box').mouseleave(function () {
        $('.thumb_slide').removeClass('b_color')
        $('.thumb_slide').children().css({
            scale: "1"
        })
    })
    $('.thumb_slide').hover(function () {
        $('.thumb_slide').removeClass('b_color')
        $('.thumb_slide').children().css({
            scale: "1"
        })
        $(this).children().css({
            scale: "1.1"
        }, 500)
        $(this).addClass('b_color')
    })
    $('.thumb_scale').hover(function () {

        $('.thumb_scale').children().css({
            scale: "1"
        })
        $(this).children().css({
            scale: "1.2"
        }, 500)

    })
    /*썸네일 슬라이드 기능구현*/
    let interval_thumb_slide = "";
    const slides = $('.thumb_slide');
    const thumb_slide_timer = 500;
    let idx_no = 0; // 현재 보고있는 배너(0번째)
    auto_slide_thumb();

    // 마우스 오버시 자동 슬라이드 멈춤
    $('.thumb_slide_wrapper').hover(function () {
        clearInterval(interval_thumb_slide)
    }, function () {
        auto_slide_thumb()
    });


    /* 각 배너 자리 세팅 */
    let thumb_slide_width = $('.thumb_slide_box').width(); // 메인배너의 전체 가로 크기
    let item_width = thumb_slide_width / 4;  // 메인 가로 / 보여줄 칸수
    let b_count = $('.thumb_slide').length; // 배너 개수
    let show_item = 1 * item_width;

    $(window).resize(function () {
        clearInterval(interval_thumb_slide)
        if (window.innerWidth <= 1150) {
            item_width = thumb_slide_width / 3;
            show_item = 2 * item_width;
        }
        else if (window.innerWidth <= 500) {
            item_width = thumb_slide_width / 2;
            show_item = 3 * item_width;
        }

    }
        // , function () {
        //     auto_slide_thumb()
        // }
    )

    if (matchMedia("screen and (max-width: 1150px)").matches) {
        item_width = thumb_slide_width / 3;
        show_item = 2 * item_width;
    }
    if (matchMedia("screen and (max-width: 500px)").matches) {
        item_width = thumb_slide_width / 2;
        show_item = 3 * item_width;
    }
    for (let i = 0; i < b_count; i++) {
        $('.thumb_slide').eq(i).css({ left: item_width * i })
    }

    $(document).on('click', '.thumb_next', function () {

        // thumb_slide들을 다 한칸씩 이동
        $('.thumb_slide').animate({ left: `-=${item_width}` }, thumb_slide_timer, 'linear');

        // 특정번째(나간거)를 반대쪽 끝으로 이동
        $('.thumb_slide').eq(idx_no % b_count).animate({
            left: thumb_slide_width + show_item
        }, 0)
        idx_no += 1;
    });
    $(document).on('click', '.thumb_prev', function () {
        idx_no -= 1;
        $('.thumb_slide').eq(idx_no % b_count).animate({
            // left: -thumb_slide_width + show_item
            left: -show_item
        }, 0)
        $('.thumb_slide').animate({ left: `+=${item_width}` }, thumb_slide_timer, 'linear');
        // thumb_slide들을 다 한칸씩 이동
    });

    function auto_slide_thumb() {
        interval_thumb_slide = setInterval(() => {
            $('.thumb_next').trigger('click')
        }, thumb_slide_timer + 3000) // 2000은 멈춰있을 시간   
    }
});