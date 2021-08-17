$(function() {
    // moveToTopjQuery();
    fullPageIndex();
    moveToTop();
    // moveToTop(); 
   
})

function fullPageIndex() { 
    var $fullPage = $('#fullpage');
    if( !$fullPage ) {
        return false;
    }

    $fullPage.fullpage({//index에 있는 javascrip를 common.js에 이동
        'verticalCentered': false,
        'css3': true,
        // 'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        // 'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function(anchorLink, index){
            if(index == 2 || index == 4 || index == 7){// 색이 변할 섹션 차례 구역 지정 
                $('.mainTop').addClass('sticky');
                
            }
            if(index == 1 || index == 3 || index == 5 || index == 6) {
                $('#fp-nav ul li a span').addClass('white');
            }
        },

        'onLeave': function(index, nextIndex, direction){
            if(index == 2 || index == 4 || index == 7){// 색이 변할 섹션 차례 구역 지정 
                $('.mainTop').removeClass('sticky');
            }
            if(index == 1 || index == 3 || index == 5 || index == 6) {
                $('#fp-nav ul li a span').removeClass('white');
            }
        }
    });


}



function moveToTop() {
    var btnScrollToTop = document.querySelector('.btnTop'); 
    
    if ( !btnScrollToTop ) { 
        return false;
    }

    // btnScrollToTop.style.display = 'none';

    btnScrollToTop.addEventListener('click',function() { 
        console.log('clicked');
        window.scrollTo({
            top:0,
            left:0,
            behavior : 'smooth'
        });
    });

    window.addEventListener('scroll',function() {
        var nowPos = window.pageYOffset; 
        if(nowPos < 20) {
            btnScrollToTop.style.display = 'none';
        } else {
            btnScrollToTop.style.display = 'block';
        }
    })
}


function moveToTopjQuery() { //바닐라 자바
    $('.btnTop').click(function(){ 
        console.log('clicked');
        $('html,body').animate({scrollTop : 0},800);
    });
}