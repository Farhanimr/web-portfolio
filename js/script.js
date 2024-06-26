// event pada saat link di klik
$('.page-scroll').on('click', function(e){

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },500, 'swing');
    

    e.preventDefault();
});

//parallax
//about
$(window).on('load', function() {
    $('.pkiri').addClass('pmuncul')
    $('.pkanan').addClass('pmuncul')
});

$(window).scroll(function(){
    var wScroll =$(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });


    //portfolio
    if( wScroll > $('.portfolio').offset().top - 250 ) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
    }
});
