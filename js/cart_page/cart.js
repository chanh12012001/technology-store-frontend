$('input.input-qty').each(function() {
    var $this = $(this),
      qty = $this.parent().find('.is-form'),
      min = Number($this.attr('min')),
      max = Number($this.attr('max'))
    if (min == 0) {
      var d = 0
    } else d = min
    $(qty).on('click', function() {
      if ($(this).hasClass('minus')) {
        if (d > min) d += -1
      } else if ($(this).hasClass('plus')) {
        var x = Number($this.val()) + 1
        if (x <= max) d += 1
      }
      $this.attr('value', d).val(d);
      var tong_tien = d * 590000;
      var x = document.getElementsByClassName("temp-total-money");
      var y = document.getElementsByClassName("total-product-quantity");
      var z = document.getElementById("result");

      x[0].innerText = formatCash(String(tong_tien)) +"₫";
      y[0].innerText = "Tạm tính "+"("+d+" sản phẩm)";
      z.innerText = x[0].innerText;
    })
  })
  
  function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
      return ((index % 3) ? next : (next + '.')) + prev
    })
 }
