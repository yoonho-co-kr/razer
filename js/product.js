$(document).ready(function () {


    let cate_no = get_url_info("cate");
    let sub_cate_no = get_url_info("sub_cate");
    // console.log(cate_no, sub_cate_no)
    make_sec(cate_arr[cate_no], sub_cate_no);

    const show_oneTime_qty = 4 * 2;
    let tmp_one_shot = 0
    load_list(cate_no, tmp_one_shot, show_oneTime_qty, sub_cate_no)
    tmp_one_shot += show_oneTime_qty;

    let make_product_chart = `        
    <div class="product_chart">
        <div class="chart_title">게이밍 마우스 비교</div>
            <div class="chart_sub_title">아래를 참고하여 본인에게 맞는 마우스를 찾아보세요</div>
            <div class="chart_info_box">
                <ul class="chart_cate">
                    <li>가격</li>
                    <li>무선</li>
                    <li>센서 타입</li>
                    <li>감도</li>
                    <li>버튼 개수</li>
                    <li>무게</li>
                    <li>크로마RGB</li>
                    <li>온보드 메모리</li>
                </ul>
                <ul class="chart_product">
                    <li><img src="./img/PC페이지/thumb/deathadder/deathadderv3pro.png" alt=""></li>
                    <li>DeathAdder v3 PRO</li>
                    <li>123,456원</li>
                    <li>○</li>
                    <li>Focus Pro 30K
                        Optical</li>
                    <li>100 - 30000</li>
                    <li>5</li>
                    <li>100g</li>
                    <li>○</li>
                    <li>3</li>
                </ul>
                <ul class="chart_product">
                    <li><img src="./img/PC페이지/thumb/deathadder/deathadderv3pro.png" alt=""></li>
                    <li>DeathAdder v3 PRO</li>
                    <li>123,456원</li>
                    <li>○</li>
                    <li>Focus Pro 30K
                        Optical</li>
                    <li>100 - 30000</li>
                    <li>5</li>
                    <li>100g</li>
                    <li>○</li>
                    <li>3</li>
                </ul>
                <ul class="chart_product">
                    <li><img src="./img/PC페이지/thumb/deathadder/deathadderv3pro.png" alt=""></li>
                    <li>DeathAdder v3 PRO</li>
                    <li>123,456원</li>
                    <li>○</li>
                    <li>Focus Pro 30K
                        Optical</li>
                    <li>100 - 30000</li>
                    <li>5</li>
                    <li>100g</li>
                    <li>○</li>
                    <li>3</li>
                </ul>
                <ul class="chart_product">
                    <li><img src="./img/PC페이지/thumb/deathadder/deathadderv3pro.png" alt=""></li>
                    <li>DeathAdder v3 PRO</li>
                    <li>123,456원</li>
                    <li>○</li>
                    <li>Focus Pro 30K
                        Optical</li>
                    <li>100 - 30000</li>
                    <li>5</li>
                    <li>100g</li>
                    <li>○</li>
                    <li>3</li>
                </ul>
                <ul class="chart_product">
                    <li><img src="./img/PC페이지/thumb/deathadder/deathadderv3pro.png" alt=""></li>
                    <li>DeathAdder v3 PRO</li>
                    <li>123,456원</li>
                    <li>○</li>
                    <li>Focus Pro 30K
                        Optical</li>
                    <li>100 - 30000</li>
                    <li>5</li>
                    <li>100g</li>
                    <li>○</li>
                    <li>3</li>
                </ul>
            </div>
        </div>`
    $("#wrap_contain").append(make_product_chart)
    let chart_color = document.querySelectorAll(".chart_product")
    $(".chart_product li").mouseenter(function () {
        // let this_chart_no = $(".chart_product li").eq($(this).index())
        let this_chart_no = $(this).index()
        // console.log(this_chart_no)
        for (let i = 0; i < $(".chart_product").length; i++) {
            console.log(i)
            $(".chart_cate li").eq(this_chart_no - 2).css({
                color: "#34ce29"
            })
            // $(".chart_product li").eq(this_chart_no).css({
            //     color: "#34ce29"
            // })
        }
    })
    $(".chart_product li").mouseleave(function () {
        // let this_chart_no = $(".chart_product li").eq($(this).index())
        let this_chart_no = $(this).index()
        // console.log(this_chart_no)
        $(".chart_cate li").eq(this_chart_no - 2).css({
            color: "#efefef"
        })
        $(".chart_product li").eq(this_chart_no).css({
            color: "#efefef"
        })
    })
})