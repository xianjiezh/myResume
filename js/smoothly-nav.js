
!function () {
    let view = document.querySelector('nav.menu')
    let controller = {
        view: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.aTags = this.view.querySelectorAll('ul>li>a')
            this.initAnimation()
            this.bindEvents(this.aTags)
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        bindEvents: function (aTags) {
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (e) => {
                    e.preventDefault()  // 阻止a标签的默认动作
                    let a = e.currentTarget
                    let href = a.getAttribute('href')  // 类型是string
                    let element = document.querySelector(href)  //选择到文档中有 id 为 href 的元素 
                    console.log('ele', element)
                    this.scrollToElement(element)
                }
            }
        },
        scrollToElement: function (element) {
            let top = element.offsetTop
            let target = top - 80
            let currentTop = window.scrollY
            let s = Math.abs(currentTop - target)
            let time = s / 100 * 300
            if (time > 500) { time = 500 }
            this.time = time
            
            var coords = { y: currentTop };
            var tween = new TWEEN.Tween(coords)
                .to({ y: target }, time)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () {
                    window.scrollTo(0, coords.y)
                })
                .start()
        }.bind(this),
        
    }
    controller.init(view)
}()

