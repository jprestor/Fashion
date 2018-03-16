$(document).ready(function () {

	/*Яндекс карта*/
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [59.93072075992382, 30.35799451288416],
			zoom: 17,
			controls: ['zoomControl'],
		});

		// Наша метка, указываем коордианты
		myPlacemark = new ymaps.Placemark([59.93065075817616, 30.359872059194572], {
			balloonContentBody: 'Текст в балуне',
		}, {
			iconLayout: 'default#image',
			// Путь до нашей картинки
			iconImageHref: 'img/map-marker.png',
			// Размер по ширине и высоте
			iconImageSize: [204, 231],
			// Смещение левого верхнего угла иконки относительно
			// её «ножки» (точки привязки).
			//width, height
			iconImageOffset: [-130, -218]
		});

		myMap.geoObjects
			.add(myPlacemark)
	});
	/*--------------------*/


	//E-mail Ajax Send
	$("form").submit(function () {
		var th = $(this);
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*--Hide social links in navbar --*/
	var $toggle = $('.navbar-toggler');

	if (window.innerWidth < 1200) {
		$toggle.addClass('collapsed');
	};


	/*--"Читать далее"--*/
	var $linkMore = $('.link-more'), //About us
		$cutOff = $('.link-more ~ p');

	$cutOff.css('display', 'none');

	$linkMore.click(function (e) {
		e.preventDefault();
		$linkMore.css('display', 'none');
		$cutOff.css('display', 'block');
	});


	var $linkMore_ED = $('.link-more-ed'), //Evening dress
		$cutOff_ED = $('.link-more-ed ~ p');

	$cutOff_ED.css('display', 'none');

	$linkMore_ED.click(function (e) {
		e.preventDefault();
		$linkMore_ED.css('display', 'none');
		$cutOff_ED.css('display', 'block');
	});


	/*----Sliders---------*/
	var $headerSlider = $('.slider-header-inner');

	$headerSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		//		prevArrow: $('.prev'),
		nextArrow: $('.sh-next'),
		autoplay: true,
		autoplaySpeed: 4000,
	});


	var $aboutUsSlider = $('.about-us-slider-inner');

	$aboutUsSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		//		prevArrow: $('.prev'),
		nextArrow: $('.au-next'),
		autoplay: true,
		autoplaySpeed: 2000,
	});


	var $catalogSlider = $('.thumbnails'),
		//    w = $(window).width(), 
		/*Получаем ширину окна, не учитывает?? ширину responsive окна в devtools*/
		slickExist = false,

		catalogSliderInit = function () {
			slickExist = true;

			$catalogSlider.slick({
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: $('.tmb-prev'),
				nextArrow: $('.tmb-next'),
				autoplay: true,
				autoplaySpeed: 4000,
			});
		};

	if (window.innerWidth < 1200) {
		catalogSliderInit();
	}

	$(window).resize(function () {
		if ((window.innerWidth > 1200) && (slickExist)) {
			$catalogSlider.slick('unslick');
			slickExist = false;
		} else {
			if ((window.innerWidth < 1200) && (slickExist == false)) {
				catalogSliderInit();
			}
		}
	});


	var $testimonialsSlider = $('.testimonials-slider-inner');

	$testimonialsSlider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.tls-prev'),
		nextArrow: $('.tls-next'),
		autoplay: true,
		autoplaySpeed: 4000,
//		responsive: [
//			{
//				breakpoint: 1199,
//				settings: {
//					arrows: false,
//					dots: true,
//				}
//    },
//  ]
	});

	var $edGallerySlider = $('.ed-gallery-slider-inner');

	$edGallerySlider.slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.evn-prev'),
		nextArrow: $('.evn-next'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 1,
				}
    },
  ]
	});


	var $sertificatesSlider = $('.slider-sertificates-inner');

	$sertificatesSlider.slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.srt-prev'),
		nextArrow: $('.srt-next'),
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
				}
      },
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
				}
      },
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
				}
      },
    ]
	});


	//Lightbox
	var $popupGallery = $('.ed-gallery-slider-inner .slick-track');

	$popupGallery.magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			//			titleSrc: function (item) {
			//				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
		}
	});


	//Catalog
	var $fullWidthImg = $('.fullwidth-img'),
		$thumb = $('.thumb'),
		$thumb1 = $('.thumb-1'),
		$thumb2 = $('.thumb-2'),
		$thumb3 = $('.thumb-3'),
		$thumb4 = $('.thumb-4'),
		$thumb5 = $('.thumb-5'),
		$thumb6 = $('.thumb-6'),
		$thumb7 = $('.thumb-7'),
		$thumb8 = $('.thumb-8'),
		$thumb9 = $('.thumb-9');

	$thumb1.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-1.jpg');
	});

	$thumb2.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-2.jpg');
	});

	$thumb3.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-3.jpg');
	});

	$thumb4.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-4.jpg');
	});

	$thumb5.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-5.jpg');
	});

	$thumb6.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-6.jpg');
	});

	$thumb7.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-7.jpg');
	});

	$thumb8.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-8.jpg');
	});

	$thumb9.click(function () {
		$fullWidthImg.attr('src', 'img/catalog/main-9.jpg');
	});


	//Плавная прокрутка для стрелки 
	$("#arrowToTop").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});


	////wow.js animations
	//new WOW().init();

});
