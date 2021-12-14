function Select(){
    var select = document.querySelector('.ddlViewBy');
    var tablet = ["tablet_1","tablet_2","tablet_3","tablet_4","tablet_5","tablet_5-2","tablet_5-3","tablet_6","tablet_6-2",
    "tablet_7","tablet_8","tablet_9"];
     
    if(select.value=="Ưu đãi online"){
        var oder = ['3','1','2','4','0','5','0','2','6',
        '1','7','-1'];
        for( var i=  0; i < 12; i++ ){
            document.getElementById(tablet[i]).style.order = oder[i];
       }
    }
    if(select.value=="Giá cao"){
        var oder = ['5','4','5','3','-1','-1','-1','2','0',
        '3','4','3'];
        for( var i=  0; i < 12; i++ ){
            document.getElementById(tablet[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá thấp"){
        var oder = ['0','2','-1','4','6','6','6','4','5',
        '3','1','2'];
        for( var i=  0; i < 12; i++ ){
            document.getElementById(tablet[i]).style.order = oder[i]; 
      }
    }
    if(select.value=="Trả góp 0%"){
        var oder = ['1','0','2','1','0','0','0','0','0',
        '0','0','0'];
      for( var i=  0; i < 12; i++ ){
        document.getElementById(tablet[i]).style.order = oder[i];
        }
    }
  }
//Tablet
function Tablet() {
    $('.cdt-product').show();
    document.getElementById('sort').innerText="";
}
function Ipad() {
    document.getElementById('sort').innerText="Máy tính bảng Apple (iPad)";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.ipad');
    $('.cdt-product-wrapper').children().not('.ipad').hide();
}
function Samsung() {
    document.getElementById('sort').innerText="Máy tính bảng Samsung";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.samsung');
    $('.cdt-product-wrapper').children().not('.samsung').hide();
}
function Xiaomi() {
    document.getElementById('sort').innerText="Máy tính bảng Xiaomi";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.xiaomi');
    $('.cdt-product-wrapper').children().not('.xiaomi').hide();
}
function Huawei() {
    document.getElementById('sort').innerText="Máy tính bảng Huawei";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.huawei');
    $('.cdt-product-wrapper').children().not('.huawei').hide();
}
function Masstel() {
    document.getElementById('sort').innerText="Máy tính bảng Masstel";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.masstel');
    $('.cdt-product-wrapper').children().not('.masstel').hide();
}
function Lenovo() {
    document.getElementById('sort').innerText="Máy tính bảng Lenovo";
    $('.cdt-product').show();
    $('.cdt-product-wrapper').children('.lenovo');
    $('.cdt-product-wrapper').children().not('.lenovo').hide();
}