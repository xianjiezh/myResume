
!function() {
    let views = document.getElementsByClassName('menuTrigger')
    for (let i = 0; i < views.length; i++) {
        views[i].onmouseenter = function (enter) {
            let li = enter.currentTarget.classList.add('active')
        }
        views[i].onmouseleave = function (leave) {
            let li = leave.currentTarget.classList.remove('active')
        }
    }
}()

