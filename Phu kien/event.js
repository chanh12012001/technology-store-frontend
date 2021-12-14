$('#Ban_Phim').click(function(){
    // The object "myObject" is sent to the modal window.
    location.assign("7_phukien.html");
    setTimeout(Ban_phim, 2000);
})
function Loading(){
    var x = $('.characters').children();
        x[0].classList.add('active');
    
}
function Phu_kien_noi_bat(){
  var x = $('.characters').children();
    for(var i=0; i<x.length; i++){
        x[0].classList.add('active');
        if(i != 0){
            x[i].classList.remove('active');
        }
    }
    var y = $('.card-body').children();
    for(var i=0; i<y.length; i++){
        y[0].classList.show();
        if(i != 0){
            y[i].classList.hide();
        }
    }
}
function Bao_da_op_lung(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[1].classList.add('active');
          if(i != 1){
              x[i].classList.remove('active');
          }
      }
    $('.List-product').children('.Op_lung').show();
    $('.List-product').children().not('.Op_lung').hide();
}
function Sac_du_phong(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[2].classList.add('active');
          if(i != 2){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Sac_du_phong').show();
      $(this).children().not('.Sac_du_phong').hide();
  })
}
function The_nho(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[3].classList.add('active');
          if(i != 3){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.The_nho').show();
      $(this).children().not('.The_nho').hide();
  })
}
function Dan_man_hinh(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[4].classList.add('active');
          if(i != 4){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Dan_man_hinh').show();
      $(this).children().not('.Dan_man_hinh').hide();
  })
}
function Tai_nghe(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[5].classList.add('active');
          if(i != 5){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Tai_nghe').show();
      $(this).children().not('.Tai_nghe').hide();
  })
}
function Loa(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[6].classList.add('active');
          if(i != 6){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Loa').show();
      $(this).children().not('.Loa').hide();
  })
}
function USB(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[7].classList.add('active');
          if(i != 7){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.USB').show();
      $(this).children().not('.USB').hide();
  })
}
function Cap_sac(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[8].classList.add('active');
          if(i != 8){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Cap_sac').show();
      $(this).children().not('.Cap_sac').hide();
  })
}
function Chuot(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[9].classList.add('active');
          if(i != 9){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Chuot').show();
      $(this).children().not('.Chuot').hide();
  })
}
function Ban_phim(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[10].classList.add('active');
          if(i != 10){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Ban_phim').show();
      $(this).children().not('.Ban_phim').hide();
  })
}
function Balo(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[11].classList.add('active');
          if(i != 11){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Balo').show();
      $(this).children().not('.Balo').hide();
  })
}
function Muc_in(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[12].classList.add('active');
          if(i != 12){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Muc_in').show();
      $(this).children().not('.Muc_in').hide();
  })
}
function Router(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[13].classList.add('active');
          if(i != 13){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Router').show();
      $(this).children().not('.Router').hide();
  })
}
function Phu_kien_khac(){
  var x = $('.characters').children();
      for(var i=0; i<x.length; i++){
          x[14].classList.add('active');
          if(i != 14){
              x[i].classList.remove('active');
          }
      }
  $('.List-product').each(function(e){
      $(this).children('.Phu_kien_khac').show();
      $(this).children().not('.Phu_kien_khac').hide();
  })
}

    
