function Select(){
    var select = document.querySelector('.ddlViewBy');
    var sansham = ["sansham_1","sansham_1-2","sansham_1-3","sansham_2","sansham_2-2","sansham_2-3",
    "sansham_3","sansham_4","sansham_4-2","sansham_5","sansham_6","sansham_6-2"];
     
    if(select.value=="Ưu đãi online"){
        
        var oder = ['2','2','2','-1','-1','-1',
        '4','0','0','3','1','1'];
        for( var i= 0 ; i < 12; i++ ){
          document.getElementById(sansham[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá cao"){
        
        var oder = ['2','2','-1','3','3','1',
        '6','0','0','5','4','4'];
        for( var i= 0 ; i < 12; i++ ){
          document.getElementById(sansham[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá thấp"){
        
        var oder = ['3','3','6','2','2','4',
        '-1','5','5','0','1','1'];
        for( var i= 0 ; i < 12; i++ ){
          document.getElementById(sansham[i]).style.order = oder[i];
      }
    }
    if(select.value=="Trả góp 0%"){
      var oder = ['0','0','0','0','0','0',
      '0','0','0','0','0','0'];
      for( var i= 0 ; i < 12; i++ ){
        document.getElementById(sansham[i]).style.order = oder[i]; 
     }
    }
  }