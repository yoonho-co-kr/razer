var count = 0;
 
function plus() {
  let txt_qty = document.getElementById('numBox');
  let qty = +txt_qty.value + 1;
  txt_qty.value = qty;

  get_final_price(qty); 


}

function minus() {

  let txt_qty = document.getElementById('numBox');

  if(txt_qty.value > 1) { 
      let qty = +txt_qty.value - 1;
      txt_qty.value = qty;

      get_final_price(qty);


  }
  else {
      alert("최소 수량은 1개 입니다.");
  }
}
function get_final_price(qty) {
 
 let o_price = document.getElementById('sum');
 o_price = +o_price.innerText.replace(",","").replace("원",""); 
 let f_price = o_price * qty;
 document.getElementById('f_sum').innerText = f_price.toLocaleString("ko")
}