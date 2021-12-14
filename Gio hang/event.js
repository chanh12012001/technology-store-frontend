var x = $('.anotheroption ul li').children();
var country = $('.country_tab1').children();
var y =$('.choosegetgoods').children();
function Anh(){
    var x = $('.sex-customer').children();
    x[1].classList.add('active');
    x[2].classList.remove('active');
}
function Chi(){
    var x = $('.sex-customer').children();
    x[1].classList.remove('active');
    x[2].classList.add('active');
}
// Cách thức nhận hàng
function Giao_tan_noi(){
    var x = $('.click-choose').children();
    x[0].classList.add('current');
    x[1].classList.remove('current');
    y[3].classList.add('current');
    y[4].classList.remove('current');
}
function Nhan_tai_cua_hang(){
    var x = $('.click-choose').children();
    x[0].classList.remove('current');
    x[1].classList.add('current');
    y[3].classList.remove('current');
    y[4].classList.add('current');
}
function Country() {
    if (document.getElementById("country_1").style.display == "none"){
        country[0].classList.add('active');
        country[2].classList.add('active');
        document.getElementById("country_1").style.display = "block";
    }
    else{
        country[0].classList.remove('active');
        country[2].classList.remove('active');
        document.getElementById("country_1").style.display = "none";
    }
    
}

$('.listName aside span').click(function(){
       console.log(document.getElementsByClassName(this));
})

//Yêu cầu 1
function Yeu_cau_1() {
    if (x[0].classList == ''){
        x[0].classList.add('active');
        document.getElementById("infouser").style.display = "block";
    }
    else{
        x[0].classList.remove('active');
        document.getElementById("infouser").style.display = "none";
    }
}
function Anh_1(){
    var x = $('.cough').children();
    x[1].classList.add('active');
    x[2].classList.remove('active');
}
function Chi_1(){
    var x = $('.cough').children();
    x[1].classList.remove('active');
    x[2].classList.add('active');
}
//Yêu cầu 2
function Yeu_cau_2() {
    if (x[2].classList == ''){
        x[2].classList.add('active');
    }
    else{
        x[2].classList.remove('active');
    }
}
//Yêu cầu 3
function Yeu_cau_3() {
    if (x[3].classList == ''){
        x[3].classList.add('active');
        document.getElementById("infocompany").style.display = "block";
    }
    else{
        x[3].classList.remove('active');
        document.getElementById("infocompany").style.display = "none";
    }
}
//Mã giảm giá
$('.singlebox').click(function (){
    var a = document.getElementsByClassName("applycode");
    var b = document.getElementsByClassName("coupon-code");
    if (a[0].classList == 'applycode'){
        a[0].classList.add('active');
        b[0].classList.add('active');
        
    }
    else{
        a[0].classList.remove('active');
        b[0].classList.remove('active');
    }
})
function Set_time () {
    setTimeout(Key_press, 100);
}
function Key_press() {
    var Ap_dung = $('.applycode__button').children();
    var c = document.getElementById("ma_giam_gia");
    if(c.value.length >= 1){
        Ap_dung[0].outerHTML = '<button type="button" onclick="Ap_dung()" class=""> Áp dụng </button>'
    }
    else{
        Ap_dung[0].outerHTML = '<button type="button" onclick="Ap_dung()" disabled="disabled" class="disabled"> Áp dụng </button>'
    }
    $('.applycode small').hide();
}
function Ap_dung() {
    $('.applycode small').show();
}
