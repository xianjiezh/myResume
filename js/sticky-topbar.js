
!function () {
    var view = document.getElementById('topNavBar')
    let controller = {
        init: function (view) {
            view = this.view
            this.bindEvents()
        },
        bindEvents: function(){
            window.addEventListener('scroll', ()=>{
                // 箭头函数没有this， 它的this上由一层指定
                if (scrollY >= 10) {
                    this.active()
                } else {
                   this.deActive()
                }
            })
        },
        active: function(){
            view.classList.add('sticky')
        },
        deActive: function(){
            view.classList.remove('sticky')
        }
    }
    controller.init(view)
}()
