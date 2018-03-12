
!function() {
    let view = document.getElementById('siteWorks')
    let controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function(view) {
            // null
            this.view = view
            // #siteWorks
            this.initSwiper()
        },
        initSwiper: function() {
            this.swiper = new Swiper(view.querySelector('.swiper-container'), this.swiperOptions)
        },
    }
    controller.init(view) // 传进去的是外面的view
}()
