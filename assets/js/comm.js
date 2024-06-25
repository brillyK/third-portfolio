document.addEventListener('scroll', function () {
    const topText = document.querySelector('.top-text')
    const overviewTop = document.querySelector('.overview-top')

    // 현재 스크롤 위치
    const scrollPosition = window.scrollY
    // overview-top의 높이
    const overviewTopHeight = overviewTop.offsetHeight

    // 스크롤 위치에 따라 불투명도 조정
    const opacity = Math.max(1 - scrollPosition / (overviewTopHeight / 2), 0)

    // .top-text의 불투명도 적용
    topText.style.opacity = opacity
})

document.addEventListener('DOMContentLoaded', function () {
    const overviewExpand = document.querySelector('.overview-expand')

    window.addEventListener('scroll', function () {
        const rect = overviewExpand.getBoundingClientRect()
        if (rect.bottom <= window.innerHeight) {
            overviewExpand.classList.add('active')
        } else {
            overviewExpand.classList.remove('active')
        }
    })
})

var swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
    },
})

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slide-intro', {
        // spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var isPaused = false
    var pauseButton = document.createElement('button')
    pauseButton.className = 'swiper-button-pause'
    pauseButton.textContent = 'Pause'

    pauseButton.addEventListener('click', function () {
        if (isPaused) {
            swiper.autoplay.start()
            pauseButton.textContent = 'Pause'
        } else {
            swiper.autoplay.stop()
            pauseButton.textContent = 'Play'
        }
        isPaused = !isPaused
    })

    var swiper = new Swiper('.slide-eft .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    })
})
