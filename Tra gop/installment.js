function Loading() {
    var x = $('.fs-tgchoose').children();
    x[0].classList.add('active');
    $('.Low-interest-rates').hide();
    $('.credit').hide();
    document.getElementById('sort').innerText="";
}
function installment() {
    $('.fs-lapitem').show();
    var x = $('.fs-tgchoose').children();
        for(var i=0; i<x.length; i++){
            x[0].classList.add('active');
            if(i != 0){
                x[i].classList.remove('active');
            }
        }
    document.getElementById('sort').innerText="";
    $('.installment').show();
    $('.Low-interest-rates').hide();
    $('.credit').hide();
}

function Low_interest_rates() {
    $('.fs-lapitem').show();
    var x = $('.fs-tgchoose').children();
        for(var i=0; i<x.length; i++){
            x[1].classList.add('active');
            if(i != 1){
                x[i].classList.remove('active');
            }
        }
    document.getElementById('sort').innerText="";
    $('.installment').hide();
    $('.Low-interest-rates').show();
    $('.credit').hide();
}

function credit() {
    $('.fs-lapitem').show();
    var x = $('.fs-tgchoose').children();
        for(var i=0; i<x.length; i++){
            x[2].classList.add('active');
            if(i != 2){
                x[i].classList.remove('active');
            }
        }
    document.getElementById('sort').innerText="";
    $('.installment').hide();
    $('.Low-interest-rates').hide();
    $('.credit').show();
}