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
//Smart watch
function Smartwatch() {
    $('.cdt-product').show();
}
function Apple() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Apple";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.apple');
    $('.cdt-product-wrapper').children().not('.apple').hide();
}
function Samsung() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Samsung";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.samsung');
    $('.cdt-product-wrapper').children().not('.samsung').hide();
}
function Oppo() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Oppo";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.oppo');
    $('.cdt-product-wrapper').children().not('.oppo').hide();
}
function Xiaomi() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Xiaomi";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.xiaomi');
    $('.cdt-product-wrapper').children().not('.xiaomi').hide();
}
function Garmin() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Garmin";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.garmin');
    $('.cdt-product-wrapper').children().not('.garmin').hide();
}
function Masstel() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Masstel";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.masstel');
    $('.cdt-product-wrapper').children().not('.masstel').hide();
}
function Huawei() {
    document.getElementById('sort').innerText="Đồng hồ thông minh Huawei";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.huawei');
    $('.cdt-product-wrapper').children().not('.huawei').hide();
}
//Dây dồng hồ
function Noi_bat(){
    var x = $('.block__tab').children();
    for(var i=0; i<x.length; i++){
        x[0].classList.add('active');
        if(i != 0){
            x[i].classList.remove('active');
        }
    }
    $('.cdt-product-strap').each(function(e){
        $(this).children().show();
    })
}
function Apple_2(){
    var x = $('.block__tab').children();
        for(var i=0; i<x.length; i++){
            x[1].classList.add('active');
            if(i != 1 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('NB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.cdt-product-strap').each(function(e){
        $(this).children('.apple_2').show();
        $(this).children().not('.apple_2').hide();
    })
    
}
function Samsung_2(){
    var x = $('.block__tab').children();
        for(var i=0; i<x.length; i++){
            x[2].classList.add('active');
            if(i != 2 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('NB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.cdt-product-strap').each(function(e){
        $(this).children('.samsung_2').show();
        $(this).children().not('.samsung_2').hide();
    })
    
}
function Xiaomi_2(){
    var x = $('.block__tab').children();
        for(var i=0; i<x.length; i++){
            x[3].classList.add('active');
            if(i != 3 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('NB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.cdt-product-strap').each(function(e){
        $(this).children('.xiaomi_2').show();
        $(this).children().not('.xiaomi_2').hide();
    })
    
}
function Huawei_2(){
    var x = $('.block__tab').children();
        for(var i=0; i<x.length; i++){
            x[4].classList.add('active');
            if(i != 4 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('NB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.cdt-product-strap').each(function(e){
        $(this).children('.huawei_2').show();
        $(this).children().not('.huawei_2').hide();
    })
    
}
function Oppo_2(){
    var x = $('.block__tab').children();
        for(var i=0; i<x.length; i++){
            x[5].classList.add('active');
            if(i != 5 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('NB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.cdt-product-strap').each(function(e){
        $(this).children('.Oppo_2').show();
        $(this).children().not('.Oppo_2').hide();
    })
    
}