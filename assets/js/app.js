$(function(){
    //mobile menu
    $(".mobile-btn__menu").on("click", function(){
        $("body").toggleClass("open-menu");
    });
    $(".mobile-menu__link").on("click", function(){
        $(this).parents(".mobile-menu__item").toggleClass("open");
    });


    //mobile search
    $(".mobile-btn__search").on("click", function(){
        $("body").toggleClass("open-search");
    });

    //mobile filter
    $(".mobile-btn__filter").on("click", function(){
        $("body").addClass("open-filter");
    });
    $(".mobile-filter__close").on("click", function(){
        $("body").removeClass("open-filter");
    });


    //mobile phone
    $(".user-nav__phone-toggle").on("click", function(){
        $("body").toggleClass("open-phone");
    });


    $(".header-location__selected").on("click", function(){
        $("body").toggleClass("open-location");
    });

    //close on body click
    $("body").on("click", function(e){
        if ($("body").hasClass("open-menu")) {
            var div = $(".header-mobile");
            if (!div.is(e.target)
                    && !$(".mobile-btn__menu").is(e.target)
                    && div.has(e.target).length === 0) {
                $("body").removeClass("open-menu");
            }
        }

        if ($("body").hasClass("open-search")) {
            var div = $(".header-bottom");
            if (!div.is(e.target)
                    && !$(".mobile-btn__search").is(e.target)
                    && $(".mobile-btn__search").has(e.target).length === 0
                    && div.has(e.target).length === 0) {
                $("body").removeClass("open-search");
            }
        }

        if ($("body").hasClass("open-filter")) {
            var div = $(".filter");
            if (!div.is(e.target)
                    && !$(".mobile-btn__filter").is(e.target)
                    && div.has(e.target).length === 0) {
                $("body").removeClass("open-filter");
            }
        }

        if ($("body").hasClass("open-location")) {
            var div = $(".header-location");
            if (!div.is(e.target)
                    && !$(".header-location__selected").is(e.target)
                    && div.has(e.target).length === 0) {
                $("body").removeClass("open-location");
            }
        }

        if ($("body").hasClass("open-phone")) {
            var div = $(".user-nav__link--phone");
            if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                $("body").removeClass("open-phone");
            }
        }

        if ($(".select-size").hasClass("active")) {
            var div = $(".select-size");
            if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                $(".select-size").removeClass("active");
            }
        }

        if ($(".cart").hasClass("open")) {
            var div = $(".user-nav__link--cart");
            if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                $(".cart").removeClass("open");
            }
        }

        if ($(".add-code__link").hasClass("active")) {
            var div = $(".add-code");
            if (!div.is(e.target)
                    && div.has(e.target).length === 0) {
                $(".add-code__link").removeClass("active");
                $(".add-code__block").hide();
            }
        }


        // show item info
        if ($(document).width() >= 1024) {
            if ($(".catalog-more").hasClass("open")
                    && !$(".catalog-more").is(e.target)
                    && $(".catalog-more").has(e.target).length === 0) {
                e.preventDefault();
                $(".catalog-more").removeClass("open");
            } else {
                if ($(".catalog-list .catalog-item__inner").is(e.target)
                        || $(".catalog-list .catalog-item__inner").has(e.target).length) {
                    e.preventDefault();
                    var mainTop = $("main").offset().top - $(window).scrollTop();

                    if (mainTop > 0) {
                        $(".catalog-more").css("top", mainTop);
                    } else {
                        $(".catalog-more").css("top", 0);
                    }

                    $(".catalog-more").addClass("open");
                }

            }
        }

    });


    $(window).scroll(function(){
        if (($("main").offset().top - $(window).scrollTop()) > 0) {
            $(".catalog-more").css("top", $("main").offset().top - $(window).scrollTop());
        } else {
            $(".catalog-more").css("top", 0);
        }
    });

    $(".catalog-more__top").on("click", function(){
        $(".catalog-more").removeClass("open");
    });


    //tabs tag main
    $(".info-tags__item").on("click", function(){
        $(".info-tags__item").removeClass("active");
        $(this).addClass("active");
        $(".info-content__item").removeClass("active");
        $(".info-content__item[data-tab='" + $(this).data("tab") + "']").addClass("active");
    });


    //tabs user
    $(".tabs-nav__item").on("click", function(){
        $(".tabs-nav__item").removeClass("active");
        $(this).addClass("active");
        $(".tabs-content").removeClass("active");
        $(".tabs-content[data-tab='" + $(this).data("tab") + "']").addClass("active");
    });

    $(".filter-block__title").on("click", function(){
        $(this).parents(".filter-block").toggleClass("open");
    });

    $(".filter-block__arrow").on("click", function(){
        $(this).parents(".filter-block__link").toggleClass("open");
    });

    if ($(".showcase-promo__slider").length > 0) {
        $(".showcase-promo__slider").slick({
            slidesToShow: 1
        });
    }

    if ($(".showcase-product__slider").length > 0) {
        $(".showcase-product__slider").slick({
            slidesToShow: 1
        });
    }

    if ($(".catalog-slider-min").length > 0) {
        $(".catalog-slider-min").slick({
            slidesToShow: 5,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 5,
                        arrows: false
                    }
                }
            ]
        });
    }

    if ($(".catalog-section__slider").length > 0) {
        $(".catalog-section__slider").slick({
            slidesToShow: 1,
            arrows: true
        });
    }

    if ($(".catalog-slider-full").length > 0) {
        $(".catalog-slider-full").slick({
            slidesToShow: 6,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 6,
                        arrows: false
                    }
                }
            ]
        });
    }

    if ($(".catalog-more__slider").length > 0) {
        $(".catalog-more__slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            dots: true
        });
    }


    if ($(".product__gallery-full").length > 0) {
        $(".product__gallery-slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.product__gallery-thumbs',
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 2,
                        arrows: false
                    }
                }
            ]
        });
        $(".product__gallery-thumbs").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            variableWidth: true,
            asNavFor: '.product__gallery-slider',
            focusOnSelect: true
        });
    }


    if ($(".partners__slider").length > 0) {
        $(".partners__slider").slick({
            slidesToShow: 7,
            variableWidth: true,
            dots: true,
            arrows: false
        });
    }

    function incrementValue(e){
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal)) {
            parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    function decrementValue(e){
        e.preventDefault();
        var fieldName = $(e.target).data('field');
        var parent = $(e.target).closest('div');
        var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

        if (!isNaN(currentVal) && currentVal > 0) {
            parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            parent.find('input[name=' + fieldName + ']').val(0);
        }
    }

    $('.input-group').on('click', '.button-plus', function(e){
        incrementValue(e);
    });

    $('.input-group').on('click', '.button-minus', function(e){
        decrementValue(e);
    });


    $(".add-code__link").on("click", function(){
        $(this).toggleClass("active");
        $(".add-code__block").toggle();
    });

    // add code
    $(".add-code__plus").on("click", function(){
        $(".add-code__list").append("<div class='add-code__item'><input type='text' class='inputbox' placeholder='Вставьте артикул'></div>")
    });


    if ($(".selectize").length > 0) {
        $(".selectize").selectize();
    }


    $(".catalog-sort__title").on("click", function(){
        if ($(document).width() < 901) {
            $(".catalog-sort").toggleClass("open");
        }
    });

    // vacancy tab
    $(".vacancy-aside__item").on("click", function(){
        $(".vacancy-aside__item").removeClass("active");
        $(this).addClass("active");
        $(".vacancy-content").removeClass("active");
        $(".vacancy-content[data-tab='" + $(this).data("tab") + "']").addClass("active");
    });

    // product tab
    $(".product__tabs-item").on("click", function(){
        $(".product__tabs-item").removeClass("active");
        $(this).addClass("active");
        $(".product__tabs-content").removeClass("active");
        $(".product__tabs-content[data-tab='" + $(this).data("tab") + "']").addClass("active");
    });

    // select size
    $(".select-size").on("click", function(){
        $(this).toggleClass("active");
    });

    $(".select-size__item").on("click", function(){
        var selSize = $(this).find(".select-size__item-name").html();
        $(".select-size__selected").html(selSize);
        $(".select-size__item").removeClass("active");
        $(this).addClass("active");
    });


    $(".user-nav__link--cart").on("click", function(){
        $(".cart").toggleClass("open");
    });


    // modal
    $("[data-modal]").on("click", function(){
        var modalId = $(this).data("modal");
        $(".modal").removeClass("open");
        $(modalId).addClass("open");
        $("body").addClass("overflow");
    });
    $(".modal__close").on("click", function(){
        $(this).parents(".modal").removeClass("open");
        $("body").removeClass("overflow");
    });
    $(".modal").on("click", function(e){
        var div = $(this).find(".modal__content");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(this).removeClass("open");
            $("body").removeClass("overflow");
        }
    });


    function changeVacancy(){
        $(".vacancy-content").each(function(index){
            if ($(document).width() < 1024) {
                var dataTab = $(this).data("tab");
                $(".vacancy-aside__item[data-tab='" + dataTab + "']").after($(this).detach());
            } else {
                $(".vacancy-block").append($(this).detach());
            }
        });
    }

    changeVacancy();
    $(window).resize(function(){
        changeVacancy();
    });


    function changeProductTab(){
        $(".product__tabs-content").each(function(index){
            if ($(document).width() < 1024) {
                var dataTab = $(this).data("tab");
                $(".product__tabs-item[data-tab='" + dataTab + "']").after($(this).detach());
            } else {
                $(".product__tabs").append($(this).detach());
            }
        });
    }

    changeProductTab();
    $(window).resize(function(){
        changeProductTab();
    });


    if ($(document).width() < 1024) {
        $(".footer-item__title").on("click", function(){
            $(this).next(".footer-item__content").toggle();
        });
    }

    $("a[href*='#']").on("click", function(){
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    if ($(".validate").length > 0) {
        $(".validate").validate({
            rules: {
                sert: "required",
                phone: "required",
                email: {
                    email: true
                }
            },
            messages: {
                sert: "* Поле обязательно для заполнения",
                phone: "* Поле обязательно для заполнения",
                email: {
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        });
    }


    $(".brands__title").on("click", function(){
        $(this).parents(".brands").toggleClass("open");
    });


    $(".shops__item-name").on("click", function(){
        $(this).parents(".shops__item").find(".shops__more").toggleClass("show");
        $(this).parents(".shops__wrap").height($(this).parents(".shops__item").find(".shops__more").outerHeight());
    });
    $(".shops__more-back").on("click", function(){
        $(this).parents(".shops__more").removeClass("show");
        $(this).parents(".shops__wrap").height('auto');
    });


    $(".shops-nav__show").on("click", function(){
        $(".shops-nav__item.hide").show();
        $(this).hide();
        $(".shops-nav__hide").show();
    });
    $(".shops-nav__hide").on("click", function(){
        $(".shops-nav__item.hide").hide();
        $(this).hide();
        $(".shops-nav__show").show();
    });
});