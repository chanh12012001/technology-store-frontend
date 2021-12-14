var select = document.querySelector('.ddlViewBy');
var tragop = ["tragop_1","tragop_2","tragop_3","tragop_4","tragop_5","tragop_6","tragop_7","tragop_8","tragop_9","tragop_10","tragop_11","tragop_12","tragop_13","tragop_14","tragop_15"];
var laisuat = ["laisuat_1","laisuat_2","laisuat_3","laisuat_4","laisuat_5","laisuat_6","laisuat_7","laisuat_8","laisuat_9"];
var tindung = ["tindung_1","tindung_2","tindung_3","tindung_4","tindung_5","tindung_6","tindung_7","tindung_8","tindung_9"];

function Select_Laptop(){
    var active = $('.fs-tgchoose').children('.active');
    switch (active[0].innerText)
    {
        case "\tTrả góp 0%": {
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder1 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
                    document.getElementById(tragop[i]).style.order = oder1[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder2 = ['13','12','11','10','9','8','7','6','5','4','3','2','1','0','-1'];
                    document.getElementById(tragop[i]).style.order = oder2[i];
                }
            }
            
        } 
        break;

        case "\tLãi suất thấp":{
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 6; i++ ){
                    var oder3 = ['3','1','0','-1','4','2'];
                    document.getElementById(laisuat[i]).style.order = oder3[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 6; i++ ){
                    var oder4 = ['0','2','3','4','-1','1'];
                    document.getElementById(laisuat[i]).style.order = oder4[i];
                }
            }
        };
        break;

        default:{
            for( var i= 0 ; i < 7; i++ ){
                if(select.value=="Giá cao đến thấp"){
                    var oder = ['0','-1','2','4','3','1','1'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
                if(select.value=="Giá thấp đến cao"){
                    var oder = ['3','4','1','-1','0','2','2'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
            }
        }
    }
    
}
function Select_Phone(){
    var active = $('.fs-tgchoose').children('.active');
    switch (active[0].innerText)
    {
        case "\tTrả góp 0%": {
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder1 = ['-1','-1','-1','-1','0','-1','0','-1','0','2','2','2','1','-1','-1'];
                    document.getElementById(tragop[i]).style.order = oder1[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder2 = ['13','12','11','10','5','9','4','8','3','1','0','-1','2','7','6'];
                    document.getElementById(tragop[i]).style.order = oder2[i];
                }
            }
        }; 
        break;

        case "\tLãi suất thấp":{
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 6; i++ ){
                    var oder3 = ['0','3','-1','1','2','4'];
                    document.getElementById(laisuat[i]).style.order = oder3[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 6; i++ ){
                    var oder4 = ['3','0','4','2','1','-1'];
                    document.getElementById(laisuat[i]).style.order = oder4[i];
                }
            }
        }
        break;

        default:{
            for( var i= 0 ; i < 9; i++ ){
                if(select.value=="Giá cao đến thấp"){
                    var oder = ['7','0','5','2','-1','6','3','1','4'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
                if(select.value=="Giá thấp đến cao"){
                    var oder = ['-1','6','1','4','7','0','3','5','2'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
            }
        }
    }
    
}
function Select_Tablet(){
    var active = $('.fs-tgchoose').children('.active');
    switch (active[0].innerText)
    {
        case "\tTrả góp 0%": {
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder1 = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
                    document.getElementById(tragop[i]).style.order = oder1[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 15; i++ ){
                    var oder2 = ['15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'];
                    document.getElementById(tragop[i]).style.order = oder2[i];
                }
            }
        }; 
        break;

        case "\tLãi suất thấp":{
            if(select.value=="Giá cao đến thấp"){
                for( var i= 0 ; i < 9; i++ ){
                    var oder3 = ['7','6','1','2','0','-1','5','4','3'];
                    document.getElementById(laisuat[i]).style.order = oder3[i];
                }
            }
            else if(select.value=="Giá thấp đến cao"){
                for( var i= 0 ; i < 9; i++ ){
                    var oder4 = ['-1','0','5','5','6','7','2','3','4'];
                    document.getElementById(laisuat[i]).style.order = oder4[i];
                }
            }
        }
        break;

        default:{
            for( var i= 0 ; i < 6; i++ ){
                if(select.value=="Giá cao đến thấp"){
                    var oder = ['4','3','-1','0','2','1'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
                if(select.value=="Giá thấp đến cao"){
                    var oder = ['-1','0','3','2','0','1'];
                    document.getElementById(tindung[i]).style.order = oder[i];
                }
            }
        }
    }
    
}