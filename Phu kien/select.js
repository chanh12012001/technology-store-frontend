function Tra_gop(begin,end){
    switch (begin)
    {
        case 0: Loc(begin,end,document.querySelector('.ddlViewBy_1'));
        break;

        case 8: Loc(begin,end,document.querySelector('.ddlViewBy_2'));
        break;

        case 12: Loc(begin,end,document.querySelector('.ddlViewBy_3'));
        break;

        case 16: Loc(begin,end,document.querySelector('.ddlViewBy_4'));
        break;

        case 20: Loc(begin,end,document.querySelector('.ddlViewBy_5'));
        break;

        case 24: Loc(begin,end,document.querySelector('.ddlViewBy_6'));
        break;

        case 28: Loc(begin,end,document.querySelector('.ddlViewBy_7'));
        break;

        case 32: Loc(begin,end,document.querySelector('.ddlViewBy_8'));
        break;

        case 36: Loc(begin,end,document.querySelector('.ddlViewBy_9'));
        break;

        case 40: Loc(begin,end,document.querySelector('.ddlViewBy_10'));
        break;

        case 44: Loc(begin,end,document.querySelector('.ddlViewBy_11'));
        break;

        case 48: Loc(begin,end,document.querySelector('.ddlViewBy_12'));
        break;

        case 52: Loc(begin,end,document.querySelector('.ddlViewBy_13'));
        break;

        case 56: Loc(begin,end,document.querySelector('.ddlViewBy_14'));
        break;
    }
}
function Loc(begin,end,y){
    var oplung = ["oplung_1","oplung_2","oplung_3","oplung_4","oplung_5","oplung_6","oplung_7","oplung_8",
        "SacDuPhong_1","SacDuPhong_2","SacDuPhong_3","SacDuPhong_4",
        "TheNho_1","TheNho_2","TheNho_3","TheNho_4",
        "ManHinh_1","ManHinh_2","ManHinh_3","ManHinh_4",
        "TaiNghe_1","TaiNghe_2","TaiNghe_3","TaiNghe_4",
        "Loa_1","Loa_2","Loa_3","Loa_4",
        "Usb_1","Usb_2","Usb_3","Usb_4",
        "CapSac_1","CapSac_2","CapSac_3","CapSac_4",
        "Chuot_1","Chuot_2","Chuot_3","Chuot_4",
        "BanPhim_1","BanPhim_2","BanPhim_3","BanPhim_4",
        "Balo_1","Balo_2","Balo_3","Balo_4",
        "MucIn_1","MucIn_2","MucIn_3","MucIn_4",
        "Router_1","Router_2","Router_3","Router_4",
        "PhuKienKhac_1","PhuKienKhac_2","PhuKienKhac_3","PhuKienKhac_4"];
    
    if(y.value=="Ưu đãi online"){
        $('.product-item').show();
        var oder = ['0','0','1','2','-1','1','2','1',
        '0','0','1','-1',
        '-1','1','0','0',
        '0','0','0','0',
        '0','0','-1','0',
        '0','0','0','0',
        '0','0','0','-1',
        '0','0','0','0',
        '1','1','-1','0',
        '0','0','0','0',
        '0','0','0','-1',
        '0','0','1','0',
        '0','0','0','0',
        '-1','1','0','2'];
        for( var i= begin ; i < end; i++ ){
            document.getElementById(oplung[i]).style.order = oder[i];
        }
    }
    if(y.value=="Giá cao"){
        $('.product-item').show();
        var oder = ['2','3','0','1','-1','0','1','0',
        '1','1','-1','0',
        '1','2','-1','0',
        '0','0','0','0',
        '2','1','0','-1',
        '0','0','0','0',
        '0','0','0','0',
        '0','0','2','1',
        '2','0','-1','1',
        '1','2','0','0',
        '0','0','-1','-1',
        '0','0','-1','1',
        '0','2','-1','1',
        '0','2','1','-1'];
        for( var i= begin ; i < end; i++ ){
            document.getElementById(oplung[i]).style.order = oder[i];
        }
        
    }
    if(y.value=="Giá thấp"){
        $('.product-item').show();
        var oder = ['0','-1','2','1','3','2','1','2',
        '-1','-1','1','0',
        '0','-1','-2','1',
        '2','1','0','-1',
        '-1','0','1','2',
        '2','1','0','-1',
        '2','1','0','-1',
        '2','1','-1','0',
        '-1','1','2','0',
        '0','-1','1','1',
        '0','0','0','0',
        '0','0','1','-1',
        '1','-1','2','0',
        '1','-1','0','2'];
        for( var i= begin ; i < end; i++ ){
            document.getElementById(oplung[i]).style.order = oder[i];
        }
    }
    if(y.value=="Trả góp 0%"){
        if(begin==40){
            for( var i= 0 ; i < 60; i++ ){
                if(i !=42 && i != 43){
                    document.getElementById(oplung[i]).style.display='none';
                }
                else {
                    console.log(i);
                    document.getElementById(oplung[i]).style.display='block';
                }
            } 
        }
        else {
            for( var i= 0 ; i < 60; i++ ){
                document.getElementById(oplung[i]).style.display='none';
            } 
        }
        
    }
}

    
