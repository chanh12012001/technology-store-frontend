function Select_smartwatch(){
    var select = document.querySelector('.ddlViewBy_smartwatch');
    var smartwatch = ["smartwatch_1","smartwatch_1-2","smartwatch_2","smartwatch_2-2","smartwatch_3","smartwatch_3-2",
    "smartwatch_4","smartwatch_4-2","smartwatch_5","smartwatch_5-2","smartwatch_6","smartwatch_7","smartwatch_8","smartwatch_9"];

    if(select.value=="Ưu đãi online"){
        
        var oder = ['5','5','5','5','3','2',
        '1','1','5','5','0','-1','2','4'];
        for( var i=  0; i < 14; i++ ){
            document.getElementById(smartwatch[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá cao"){
        var oder = ['3','3','1','0','2','0',
        '-1','-1','7','5','6','8','4','9'];
        for( var i=  0; i < 14; i++ ){
            document.getElementById(smartwatch[i]).style.order = oder[i]; 
       }
    }
    if(select.value=="Giá thấp"){
        var oder = ['5','5','7','9','6','8',
        '10','10','1','3','2','0','4','-1'];
        for( var i=  0; i < 14; i++ ){
            document.getElementById(smartwatch[i]).style.order = oder[i];  
        }
    }
    if(select.value=="Trả góp 0%"){
        var oder = ['0','0','0','0','0','0',
        '0','0','0','0','0','0','0','0'];
        for( var i=  0; i < 14; i++ ){
            document.getElementById(smartwatch[i]).style.order = oder[i];  
        }
    }
}
function Select_albert(){
    var select = document.querySelector('.ddlViewBy_albert');
    var albert = ["albert_1","albert_2","albert_2-2","albert_3","albert_3-2",
    "albert_4","albert_4-2","albert_5","albert_6","albert_6-2"];

    if(select.value=="Ưu đãi online"){
        
        var oder = ['-1','4','4','3','3',
        '1','1','2','0','0'];
        for( var i=  0; i < 10; i++ ){
            document.getElementById(albert[i]).style.order = oder[i]; 
        }
    }
    if(select.value=="Giá cao"){
        
        var oder = ['-1','4','4','3','3',
        '1','1','2','0','0'];
        for( var i=  0; i < 10; i++ ){
            document.getElementById(albert[i]).style.order = oder[i]; 
        }
    }
    if(select.value=="Giá thấp"){
        
        var oder = ['4','-1','-1','0','0',
        '2','2','1','3','3'];
        for( var i=  0; i < 10; i++ ){
            document.getElementById(albert[i]).style.order = oder[i]; 
        }
    }
}