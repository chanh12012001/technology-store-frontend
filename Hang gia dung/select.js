function Loc(){
    var select = document.querySelector('.ddlViewBy');
    var group = ["group-1","group-2","group-3","group-4","group-5","group-6","group-7","group-8",
    "group-9","group-10","group-11","group-12"];
    var active = $('.chapter-list').children('.active');
    if(select.value=="Ưu đãi online"){
        $('.product').show();
        var oder = ['0','0','0','0',
        '0','0','0','0',
        '0','0','0','0'];
        Seclect(active[0].innerText,group,oder);
    }
    if(select.value=="Giá cao"){
        $('.product').show();
        var oder = ['0','2','-1','7',
        '4','9','3','6',
        '8','0','1','5'];
        Seclect(active[0].innerText,group,oder);
    }
    if(select.value=="Giá thấp"){
        $('.product').show();
        var oder = ['8','6','9','1',
        '4','-1','5','2',
        '0','8','7','3'];
        Seclect(active[0].innerText,group,oder);
    }
    if(select.value=="Trả góp 0%"){
        for( var i= 0 ; i < 12; i++ ){
            if(i ==2 && active[0].innerText == "Máy lọc nước"){
                document.getElementById(group[i]).style.display='block';
            }
            else {
                document.getElementById(group[i]).style.display='none';
            }
        } 
    }
}
function Seclect (a,group,oder){
    for( var i= 0 ; i < 12; i++ ){
        switch (a)
        {
            case "Sản phẩm nổi bật": document.getElementById(group[i]).style.order = oder[i];
            break;

            case "Máy lọc nước":{
                if(i == 2){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Quạt điều hòa":{
                if(i == 0 || i == 9){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Quạt":{
                if(i == 3 || i == 4){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Nồi chiên không dầu":{
                if(i == 10){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Nồi cơm điện":{
                if(i == 1 || i == 8 || i== 11){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Bình đun nước":{
                if(i == 5){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Máy ép hoa quả":{
                if(i == 6){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;

            case "Máy xay sinh tố":{
                if(i == 7){
                    document.getElementById(group[i]).style.order = oder[i];
                }
                else {
                    document.getElementById(group[i]).style.display='none';
                }
            };
            break;
            default:{
                document.getElementById(group[i]).style.display='none';
            }
        }
    }
}