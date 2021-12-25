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
    setTimeout(Fill_name, 100);
    setTimeout(District, 100);
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
function Fill_name() {
    if(document.getElementById("name").value.length >= 1){
        document.getElementById("name_error").style.display= "none";
    }
    if(document.getElementById("phone_number").value.length >= 1){
        document.getElementById("phone_number_error").style.display= "none";
    }
}
function District(){
    var e = document.getElementById("quan_huyen");
    var giaTri = e.options[e.selectedIndex].text;
    if(giaTri != "Quận / Huyện"){
        document.getElementById("quan_huyen_error").style.display= "none";
    }
    if(document.getElementById("so_nha").value.length >= 1 ){
        document.getElementById("so_nha_error").style.display= "none";
    }
}
document.querySelectorAll(".truck-button").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        var e = document.getElementById("quan_huyen");
        var giaTri = e.options[e.selectedIndex].text;
        let box = button.querySelector(".box"),
            truck = button.querySelector(".truck");
        if(document.getElementById("name").value.length == 0){
            document.getElementById("name_error").style.display= "block";
        }
        if(document.getElementById("phone_number").value.length == 0){
            document.getElementById("phone_number_error").style.display= "block";
        }
        if(giaTri == "Quận / Huyện"){
            document.getElementById("quan_huyen_error").style.display= "block";
        }
        if(document.getElementById("so_nha").value.length == 0){
            document.getElementById("so_nha_error").style.display= "block";
        }
        else if(document.getElementById("name").value.length > 0 && document.getElementById("phone_number").value.length > 0 && giaTri != "Quận / Huyện"){
            if (!button.classList.contains("done")) {
                if (!button.classList.contains("animation")) {
                    button.classList.add("animation");
    
                    gsap.to(button, {
                        "--box-s": 1,
                        "--box-o": 1,
                        duration: 0.3,
                        delay: 0.5
                    });
    
                    gsap.to(box, {
                        x: 0,
                        duration: 0.4,
                        delay: 0.7
                    });
    
                    gsap.to(button, {
                        "--hx": -5,
                        "--bx": 50,
                        duration: 0.18,
                        delay: 0.92
                    });
    
                    gsap.to(box, {
                        y: 0,
                        duration: 0.1,
                        delay: 1.15
                    });
    
                    gsap.set(button, {
                        "--truck-y": 0,
                        "--truck-y-n": -26
                    });
                    gsap.to(button, {
                        "--truck-y": 1,
                        "--truck-y-n": -25,
                        duration: 0.2,
                        delay: 1.25,
                        
                        onComplete() {
                            gsap.timeline({
                                onComplete() {
                                    button.classList.add("done");
                                }
                            })
                                .to(truck, {
                                    x: 0,
                                    duration: 0.4
                                })
                                .to(truck, {
                                    x: 60,
                                    duration: 1
                                })
                                .to(truck, {
                                    x: 30,
                                    duration: 0.6
                                })
                                .to(truck, {
                                    x: 390,
                                    duration: 1.4
                                });
                            gsap.to(button, {
                                "--progress": 1,
                                duration: 3,
                                ease: "power2.in"
                            });
                            
                        }
                    });
                }
                
            } else {
                button.classList.remove("animation", "done");
                gsap.set(truck, {
                    x: 8
                });
                gsap.set(button, {
                    "--progress": 0,
                    "--hx": 0,
                    "--bx": 0,
                    "--box-s": 1,
                    "--box-o": 0,
                    "--truck-y": 0,
                    "--truck-y-n": -26
                });
                gsap.set(box, {
                    x: -24,
                    y: -6
                });
            }
        }
        
    });
});
