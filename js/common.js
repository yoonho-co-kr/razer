
// 각 섹션들 (아이템 없는 ) 빈 상태로 만들기
function make_sec(sec_id, get_cate) {
    // console.log(THUMB_IMG_LIST[get_cate].length)
    let list = `<div class="sec" id="${sec_id}">
                    <div class="sec_cate_box">
                        <div class="sec_cate">${sec_id}</div>
                        
                        <div class="sec_cate_qty">${THUMB_IMG_LIST[get_cate].length}(items)</div>
                    </div>
                    <div class="sec_title"></div>
                    <div class="sec_body"></div>
                </div>`;
    $('#wrap_contain').append(list)
}

// 한칸씩 어디에 몇개 넣어줄건지 결정
function load_list(cate_idx, start_idx, show_qty, sub_cate_idx) {
    $(`#${cate_no_arr[cate_idx]} > .sec_title`).text(cate_no_arr[cate_idx].toUpperCase());

    let rs = ITEM_LIST[cate_idx];
    let get_info = THUMB_IMG_LIST[sub_cate_idx]
    // if(show_qty<0) {
    //     show_qty= rs.length;
    // }
    // console.log(get_info.length)
    // let tmp_qty = start_idx + show_qty;
    // if (tmp_qty > rs.length) {
    //     tmp_qty = rs.length
    // }

    for (let i = 0; i < get_info.length; i++) {
        let list = `<div class="item_box">
                        <div class="item_img">
                            <a href="item.html"> 
                                <img src="${get_info[i].thumb_img}" alt=""></a>`;


        // if (cate_idx == 1)
        //     list += `   <img src="${rs[i].covered_src}" alt=""> `;

        list += `</a> 
                        </div>
                        <div class="item_info">
                            <div class="item_title">${get_info[i].title.toUpperCase().split('-')[0]}</div>
                            <div class="item_color">${get_info[i].title.toUpperCase().split('-')[1]}</div>
                            <div class="item_o_price">${get_info[i].o_price.toLocaleString('kr')}원</div>
                            
                            <div class="item_desc">● ${get_info[i].desc}</div>
                            <div class="item_desc">● ${get_info[i].desc}</div>
                            <div class="item_desc">● ${get_info[i].desc}</div>

                        </div>
                    </div>`;
        $(`.sec_body`).append(list);

        // if(cate_idx == 1)
        //     $(`#new .item_box`).eq(i).children('.item_img').children('a').append(`<img src="${rs[i].covered_src}" alt="">`)
    }
    let sub_cate = `<div class="sec_sub_cate">${cate_sub_arr[cate_idx][sub_cate_idx].toLocaleUpperCase()}</div>`
    $(`.sec_cate`).append(sub_cate);
}

// 현재 페이지에 넘어온 ? 뒤의 정보들 구분
function get_url_info(key) {
    let url = location.href; // url에 있는 문자열 다 가져오기 // product.html?cate=0&item_no=1&g=female
    url = url.split("?"); // ? 뒤쪽 정보만 가져오기   // [product.html, cate=0&item_no=1&g=female] 

    if (url.length > 1) { // ?뒤가 있냐 없냐 판별
        url = url[1];           // "cate=0&item_no=1&g=female"

        url = url.split('&');   // [cate=0  ,  item_no=1  ,  g=female]
        // console.log(url.length)
        for (let i = 0; i < url.length; i++) {
            // url = url[i].split("="); // cate=0  =>  [cate  , 0]
            let tmp_url = url[i].split("="); // cate=0  =>  [cate  , 0]

            if (tmp_url[0] == key) {
                return tmp_url[1]
            }
            if (tmp_url[1] == key) {
                return tmp_url[1]
            }
        }
        return -1;
    }

    url = url[1]; //"cate=0"
    url = url.split("=");// [cate , 0]

    if (url[0] == key) {

    }
}

const cate_no_arr = ['laptop', 'desktop', 'mice', 'mats', 'keyboards', 'headset', 'speaker'];
const cate_sub_arr = [
    ['book', 'blade 14', 'blade 15', 'blade 17', 'core X'],
    ['cases', 'liquid cooling', 'case fans', 'power supplies', ' fan & RGB controller'],
    ['deathAdder', 'viper', 'naga', 'basilisk', 'orochi', 'pro Click', 'atheris'],
    ['goliathus', 'firefly', 'strider', 'acari', 'sphex', 'gigantus', 'pro glide'],
    ['huntsman', 'deathstalker', 'blackwidow', 'ornata', 'cynosa', 'turret', 'pro type', 'tartarus'],
    ['blackshark', 'barracuda', 'kraken'],
    ['nommo speakers', 'leviathan soundbars']
]
