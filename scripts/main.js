$(document).ready(function() {
    $('#slider .slides').slick({
        dots: true,
        infinite: true,
        speed: 300,
        customPaging : function(slider, i) {
            return '<a></a>';
        },
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slide_arr left"></div>',
        nextArrow: '<div class="slide_arr right"></div>',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
        {
            breakpoint: 360,
            settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    var video = $('#slider .slides .video.slick-active').find('video').get(0).play();
    $('#slider .slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
        if(currentSlide ==0){
            $('#slider .slides .video.slick-slide').find('video').get(0).pause();
                var video = $('#slider .slides .video.slick-active').find('video').get(0).play();
            };
    });
    $('.products .items').slick({
        dots: true,
        infinite: true,
        speed: 300,
        customPaging : function(slider, i) {
            return '<a></a>';
        },
        prevArrow: '<div class="slide_arr left"></div>',
        nextArrow: '<div class="slide_arr right"></div>',
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 769,
            settings: {
                centerMode: true,
                centerPadding: '100px',
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 360,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '25px',
            }
        }
        ]
    });
    $('.articles .items_news').slick({
        dots: false,
        infinite: true,
        speed: 300,
        prevArrow: '<div class="slide_arr left"></div>',
        nextArrow: '<div class="slide_arr right"></div>',
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                centerMode: true,
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 360,
            settings: {
                centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '25px',
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    $('.articles .items_articles').slick({
        dots: true,
        vertical: true,
        speed: 300,
        arrows: false,
        verticalSwiping: true,
        customPaging : function(slider, i) {
            return '<a></a>';
        },
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            verticalSwiping: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: false,
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    $('.otziv_block .items').slick({
        dots: true,
        speed: 300,
        arrows: false,
        customPaging : function(slider, i) {
            return '<a></a>';
        },
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 769,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });
    $('.ask_block .items').slick({
        dots: true,
        speed: 300,
        arrows: false,
        customPaging : function(slider, i) {
            return '<a></a>';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 769,
            settings: "unslick"
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });

	$("#m--menu").click(function(event) {
	    event.preventDefault();
		$(this).toggleClass('open');
		$('#m--search').toggleClass('active');
		$('.megamenu').toggleClass('openmenu');
		$('.megamenu ul').slideToggle(300);
        setTimeout(function(){
            if($('.megamenu ul').is(':hidden')){
                $('html, body').css('overflow', 'auto');
                $('html, body').css('overflow-x', 'hidden');
            }else{
                $('html, body').css('overflow', 'hidden');
            }
        }, 350);
    });
	$("#m--search").click(function(event) {
	    event.preventDefault();
		$(this).toggleClass('open');
		$('.search_modal').toggleClass('open_search_modal');
		$('.search_modal ul').slideToggle(300);
        setTimeout(function(){
            if($('.search_modal ul').is(':hidden')){
                $('html, body').css('overflow', 'auto');
                $('html, body').css('overflow-x', 'hidden');
            }else{
                $('html, body').css('overflow', 'hidden');
            }
        }, 350);
    });
    
    $('.tops_block .row .col .text').matchHeight();
    $('.products .items .item .desc .name').matchHeight();
    // $('.articles .col .items_news .item .desc .name').matchHeight();
    $('.video_block .items .item .desc .name').matchHeight();
    $('.otziv_block .items .item .text').matchHeight();
    $('.ask_block .items .item .ask').matchHeight();
    $('.block_arenda .items .item p').matchHeight();


    /*Select Box js*/
    $('.drop-menu').click(function () {
            $(this).attr('tabindex', 1).focus();
            $(this).toggleClass('active');
            $(this).find('.dropeddown').slideToggle(300);
        });
        $('.drop-menu').focusout(function () {
            $(this).removeClass('active');
            $(this).find('.dropeddown').slideUp(300);
        });
        $('.drop-menu .dropeddown li').click(function () {
            $(this).parents('.drop-menu').find('span').text($(this).text());
            $(this).parents('.drop-menu').find('input').attr('value', $(this).attr('id'));
        });
    /*End Select Box js*/


    $('.mobile_filter label').click(function () {
        $('#slider .filter form .col.mobile_filter .more .menus').slideToggle(300);
        $(this).toggleClass('active');
    }); 
    
    $('.desc_filter').click(function () {
        $.fx.off = true;
        $('#slider .filter .row.dop_row').toggle('fast');
        $(this).toggleClass('active');
    }); 


    $('.products .items .item .img .like').click(function() {
        event.preventDefault();
        $(this).toggleClass('active');
    });




  $('form.validate_form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
    btn = form.find('input[type=submit]');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('input[type=text]').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('input[type=text]').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').css({'border-color':'#ef6509'});
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },1500);
    }

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    },500);

    // Событие клика по кнопке отправить
    btn.click(function(){
    event.preventDefault();
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        // form.submit();
        $('#page').fadeOut();
        $('#modal2').fadeIn(1500);
      }
    });
  });

















    //map
    var t = 4e3;
    $(".kirenia").mouseover(function() {
        $(".ahover").css("background", "url('/assets/mapb.png') no-repeat scroll 0 0")
    }), $(".kirenia").mouseout(function() {
        $(".ahover").css("background", "none")
    }), $(".giuzeliort").mouseover(function() {
        $(".ahover").css("background", "url('/assets/mapd.png') no-repeat scroll 0 0")
    }), $(".giuzeliort").mouseout(function() {
        $(".ahover").css("background", "none")
    }), $(".iskele").mouseover(function() {
        $(".ahover").css("background", "url('/assets/mapa.png') no-repeat scroll 0 0")
    }), $(".iskele").mouseout(function() {
        $(".ahover").css("background", "none")
    }), $(".famagusta").mouseover(function() {
        $(".ahover").css("background", "url('/assets/mapc.png') no-repeat scroll 0 0")
    }), $(".famagusta").mouseout(function() {
        $(".ahover").css("background", "none")
    }), $(".lefkosa").mouseover(function() {
        $(".ahover").css("background", "url('/assets/mape.png') no-repeat scroll 0 0")
    }), $(".lefkosa").mouseout(function() {
        $(".ahover").css("background", "none")
    }), $(".advsearch a").click(function() {
        $(".advopen").fadeToggle("slow")
    });
    var e = function() {
        $(".ahover").delay(t).queue(function() {
            $(this).css({
                background: "url('/assets/mapa.png') no-repeat scroll 0 0"
            }), $(this).dequeue()
        }).delay(t).queue(function() {
            $(this).css({
                background: "url('/assets/mapb.png') no-repeat scroll 0 0"
            }), $(this).dequeue()
        }).delay(t).queue(function() {
            $(this).css({
                background: "url('/assets/mapc.png') no-repeat scroll 0 0"
            }), $(this).dequeue()
        }).delay(t).queue(function() {
            $(this).css({
                background: "url('/assets/mapd.png') no-repeat scroll 0 0"
            }), $(this).dequeue()
        }).delay(t).queue(function(t) {
            $(this).css({
                background: "url('/assets/mape.png') no-repeat scroll 0 0"
            }), $(this).dequeue(), t()
        }).queue(e)
    };
    e();
});
