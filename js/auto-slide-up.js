

!function () {
    window.addEventListener('scroll', autoMoveUp)
    // 添加初始位置
    let markedTags = document.querySelectorAll('[marked]')
    let minIndex = 0
    for (let i = 0; i < markedTags.length; i++) {
        markedTags[i].classList.add('initialized')
    }
    function autoMoveUp() {
        let markedTags = document.querySelectorAll('[marked]')
        let minIndex = 0
        for (let i = 1; i < markedTags.length; i++) {
            if (Math.abs(markedTags[i].offsetTop - window.scrollY) < Math.abs(markedTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i // 找到离屏幕顶点最近的section
            }
        }
        // 回到最终位置
        markedTags[minIndex].classList.remove('initialized')
        //
        let id = markedTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let brothers = li.parentNode.children
        // 导航栏随滚动自动添加高亮
        for (let i = 0; i < brothers.length; i++) {
            brothers[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    autoMoveUp()
}()