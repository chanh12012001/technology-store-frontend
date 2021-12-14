function loading(){
    var width = $(window).width();
    if ( width <=1150){
        var x = document.getElementsByClassName("btn-sub");
        
        for (var i =0; i < x.length; i++){
            x[i].innerText = "GIỎ HÀNG";
        }
    }
    else {
        var x = document.getElementsByClassName("btn-sub");
        
        for (var i =0; i < x.length; i++){
            x[i].innerText = "THÊM VÀO GIỎ HÀNG";
        }
    }
    
}
//Dien thoai
function Dienthoai() {
    $('.cdt-product').show();
    document.getElementById('sort').innerText="";
}
function Iphone() {
    document.getElementById('sort').innerText="Điện thoại iPhone";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.iphone');
    $('.cdt-product-wrapper').children().not('.iphone').hide();
}
function Samsung() {
    document.getElementById('sort').innerText="Điện thoại Samsung";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.samsung');
    $('.cdt-product-wrapper').children().not('.samsung').hide();
}
function Oppo() {
    document.getElementById('sort').innerText="Điện thoại Oppo";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.oppo');
    $('.cdt-product-wrapper').children().not('.oppo').hide();
}
function Xiaomi() {
    document.getElementById('sort').innerText="Điện thoại Xiaomi";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.xiaomi');
    $('.cdt-product-wrapper').children().not('.xiaomi').hide();
}
function Vivo() {
    document.getElementById('sort').innerText="Điện thoại Vivo";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.vivo');
    $('.cdt-product-wrapper').children().not('.vivo').hide();
}
function Tecno() {
    document.getElementById('sort').innerText="Điện thoại Techno";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.tecno');
    $('.cdt-product-wrapper').children().not('.tecno').hide();
}
function Realme() {
    document.getElementById('sort').innerText="Điện thoại Realme";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.realme');
    $('.cdt-product-wrapper').children().not('.realme').hide();
}
function Vsmart() {
    document.getElementById('sort').innerText="Điện thoại Vsmart";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.vsmart');
    $('.cdt-product-wrapper').children().not('.vsmart').hide();
}
function Nokia() {
    document.getElementById('sort').innerText="Điện thoại Nokia";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.nokia');
    $('.cdt-product-wrapper').children().not('.nokia').hide();
}
function Masstel() {
    document.getElementById('sort').innerText="Điện thoại Masstel";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.masstel');
    $('.cdt-product-wrapper').children().not('.masstel').hide();
}
//Laptop
function Laptop() {
    $('.cdt-product').show();
    document.getElementById('sort').innerText="";
}
function Macbook() {
    document.getElementById('sort').innerText="Laptop Apple (Macbook)";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.macbook');
    $('.cdt-product-wrapper').children().not('.macbook').hide();
}
function Asus() {
    document.getElementById('sort').innerText="Laptop Asus";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.asus');
    $('.cdt-product-wrapper').children().not('.asus').hide();
}
function Dell() {
    document.getElementById('sort').innerText="Laptop Dell";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.dell');
    $('.cdt-product-wrapper').children().not('.dell').hide();
}
function Acer() {
    document.getElementById('sort').innerText="Laptop Acer";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.acer');
    $('.cdt-product-wrapper').children().not('.acer').hide();
}
function Hp() {
    document.getElementById('sort').innerText="Laptop Hp";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.hp');
    $('.cdt-product-wrapper').children().not('.hp').hide();
}
function Lenovo() {
    document.getElementById('sort').innerText="Laptop Lenovo";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.lenovo');
    $('.cdt-product-wrapper').children().not('.lenovo').hide();
}
function Microsoft() {
    document.getElementById('sort').innerText="Laptop Microsoft";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.microsoft');
    $('.cdt-product-wrapper').children().not('.microsoft').hide();
}
function Msi() {
    document.getElementById('sort').innerText="Laptop Msi";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.msi');
    $('.cdt-product-wrapper').children().not('.msi').hide();
}
function Avita() {
    document.getElementById('sort').innerText="Laptop Avita";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.avita');
    $('.cdt-product-wrapper').children().not('.avita').hide();
}


