
(function ($) {
    $(document).ready(function () {
        $('.js--chapter-list').each(function (e) {
            Window_Size();
            $('.js--chapter-viewmore').click(function (e) {
                e.preventDefault();
                $(this).hide();
                $('.chapter:hidden').each(function (index) {
                    var that = this;
                    $(that).addClass('bounceIn');
                });
            });
        });
    });
})(window.jQuery);
function Window_Size() {
    var width = $(window).width();
    var item = $('.js--chapter-list').children();
    if ( width <=1150){
        item.slice(0, 6).show();
        var x = document.getElementsByClassName("btn-sub");
        
        for (var i =0; i < x.length; i++){
            x[i].innerText = "GIỎ HÀNG";
        }
    }
    else {
        item.slice(0, 8).show();
        var x = document.getElementsByClassName("btn-sub");
        
        for (var i =0; i < x.length; i++){
            x[i].innerText = "THÊM GIỎ HÀNG";
        }
    }
            
}
function Loading(){
    var x = $('.chapter-list').children();
    x[0].classList.toggle('active');
}
function San_pham_noi_bat(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[0].classList.add('active');
            if(i != 0){
                x[i].classList.remove('active');
            }
        }
    $('.product-grid').each(function(e){
        $(this).children().show();
    })
}
function May_loc_nuoc(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[1].classList.add('active');
            if(i != 1 ){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_loc_nuoc').show();
        $(this).children().not('.May_loc_nuoc').hide();
    })
    
}
function May_loc_khong_khi(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[2].classList.add('active');
            if(i != 2){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_loc_khong_khi').show();
        $(this).children().not('.May_loc_khong_khi').hide();
    })
}
function Quat_dieu_hoa(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[3].classList.add('active');
            if(i != 3){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Quat_dieu_hoa').show();
        $(this).children().not('.Quat_dieu_hoa').hide();
    })
}
function Quat(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[4].classList.add('active');
            if(i != 4){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Quat').show();
        $(this).children().not('.Quat').hide();
    })
}
function Noi_chien_khong_dau(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[5].classList.add('active');
            if(i != 5){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Noi_chien_khong_dau').show();
        $(this).children().not('.Noi_chien_khong_dau').hide();
    })
}
function Noi_com_dien(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[6].classList.add('active');
            if(i != 6){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Noi_com_dien').show();
        $(this).children().not('.Noi_com_dien').hide();
    })
}
function Noi_ap_suat(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[7].classList.add('active');
            if(i != 7){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Noi_ap_suat').show();
        $(this).children().not('.Noi_ap_suat').hide();
    })
}
function Noi_lau_dien(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[8].classList.add('active');
            if(i != 8){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Noi_lau_dien').show();
        $(this).children().not('.Noi_lau_dien').hide();
    })
}
function Bep_tu(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[9].classList.add('active');
            if(i != 9){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Bep_tu').show();
        $(this).children().not('.Bep_tu').hide();
    })
}
function Binh_thuy_dien(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[10].classList.add('active');
            if(i != 10){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Binh_thuy_dien').show();
        $(this).children().not('.Binh_thuy_dien').hide();
    })
}
function Binh_dun_nuoc(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[11].classList.add('active');
            if(i != 11){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Binh_dun_nuoc').show();
        $(this).children().not('.Binh_dun_nuoc').hide();
    })
}
function May_lam_sua_hat(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[12].classList.add('active');
            if(i != 12){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_lam_sua_hat').show();
        $(this).children().not('May_lam_sua_hat').hide();
    })
}
function May_ep_hoa_qua(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[13].classList.add('active');
            if(i != 13){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_ep_hoa_qua').show();
        $(this).children().not('.May_ep_hoa_qua').hide();
    })
}
function May_xay_sinh_to(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[14].classList.add('active');
            if(i != 14){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_xay_sinh_to').show();
        $(this).children().not('.May_xay_sinh_to').hide();
    })
}
function Ban_ui(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[15].classList.add('active');
            if(i != 15){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Ban_ui').show();
        $(this).children().not('.Ban_ui').hide();
    })
}
function May_say_toc(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[16].classList.add('active');
            if(i != 16){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.May_say_toc').show();
        $(this).children().not('.May_say_toc').hide();
    })
}
function Lo_nuong(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[17].classList.add('active');
            if(i != 17){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Lo_nuong').show();
        $(this).children().not('.Lo_nuong').hide();
    })
}
function Bep_nuong_dien(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[18].classList.add('active');
            if(i != 18){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Bep_nuong_dien').show();
        $(this).children().not('.Bep_nuong_dien').hide();
    })
}
function Den_pin(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[19].classList.add('active');
            if(i != 19){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Den_pin').show();
        $(this).children().not('.Den_pin').hide();
    })
}
function Hop_com_dien(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[20].classList.add('active');
            if(i != 20){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Hop_com_dien').show();
        $(this).children().not('.Hop_com_dien').hide();
    })
}
function Can_dien_tu(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[21].classList.add('active');
            if(i != 21){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Can_dien_tu').show();
        $(this).children().not('.Can_dien_tu').hide();
    })
}
function Noi(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[22].classList.add('active');
            if(i != 22){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Noi').show();
        $(this).children().not('.Noi').hide();
    })
}
function Chao_chong_dinh(){
    var x = $('.chapter-list').children();
        for(var i=0; i<x.length; i++){
            x[23].classList.add('active');
            if(i != 23){
                if(i ==0)
                {
                    x[i].classList.remove('active');
                    document.getElementById('SPNB').style.display = 'block';
                }
                else {
                    x[i].classList.remove('active');
                }
            }
        }
    $('.product-grid').each(function(e){
        $(this).children('.Chao_chong_dinh').show();
        $(this).children().not('.Chao_chong_dinh').hide();
    })
}