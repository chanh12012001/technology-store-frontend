function Select(){
    var select = document.querySelector('.ddlViewBy');
    var sansham = ["sansham_1","sansham_2","sansham_3","sansham_4","sansham_5","sansham_6","sansham_7","sansham_8","sansham_9"];
     
    if(select.value=="Ưu đãi online"){
        
        var oder = ['0','1','0','0','0','2','0','2','2'];
        for( var i=  0; i < 9; i++ ){
            document.getElementById(sansham[i]).style.order = oder[i]; 
        } 
    }
    if(select.value=="Giá cao"){
        var oder = ['3','3','5','2','0','6','1','4','-1'];
        for( var i=  0; i < 9; i++ ){
            document.getElementById(sansham[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá thấp"){
        var oder = ['3','2','0','4','6','-1','5','1','7'];
        for( var i=  0; i < 9; i++ ){
            document.getElementById(sansham[i]).style.order = oder[i]; 
        }
    }
    if(select.value=="Trả góp 0%"){
      var oder = ['0','1','2','3','4','5','6','-1','-2'];
      for( var i=  0; i < 9; i++ ){
          document.getElementById(sansham[i]).style.order = oder[i];
      }
    }
  }