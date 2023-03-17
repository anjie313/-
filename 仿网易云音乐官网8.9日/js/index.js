//轮播图  记得在body后面引用，要不然不好使
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    cssMode: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination", clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 动画函数
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
// 轮播功能
window.addEventListener('load', function () {
    var prev = document.querySelector('.click-flag-prev');
    var next = document.querySelector('.click-flag-next');
    var fpr = document.querySelector('.f-pr');
    var rollerflag = document.querySelector('.roller-flag');
    var innerWidth = rollerflag.offsetWidth; //轮播区域宽度
    // 无缝切换
    var first = fpr.children[0].cloneNode(true);
    fpr.appendChild(first);
    var lengths = fpr.children.length;
    fpr.style.width = lengths * innerWidth + 'px';
    // 前进
    var flag = true;
    var num = 0;
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == lengths - 1) {
                fpr.style.left = 0;
                num = 0;
            }
            num++;
            animate(fpr, -innerWidth * num, function () {
                flag = true;
            });
        }
    });
    // 后退
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = lengths - 1;
                fpr.style.left = -num * innerWidth + 'px';
            }
            num--;
            animate(fpr, -innerWidth * num, function () {
                flag = true;
            });

        }
    });

});

// 回到顶部
var totop = document.getElementById('totop')

window.onscroll = function () {
    var high = document.documentElement.scrollTop || document.body.scrollTop
    if (high >= 500) {
        totop.style.display = 'block'
    } else {
        totop.style.display = 'none'
    }
}

totop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
})