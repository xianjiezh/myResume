



/*
    let controller = {
        view: null,
        messageList: null,
        init: function () {
            this.view = view
            this.messageList = view.querySelector('.visitorMSGBoard')
            this.model = model
            model.init()
            this.loadMessage()
            this.bindEvents()
        },
        bindEvents: function () {
            let msgForm = view.querySelector('#msgForm')
            let vstn = msgForm.querySelector('#visitorName')
            let vstm = msgForm.querySelector('#visitorMsg')
            msgForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage(vstn.value, vstm.value)
                vstm.value = ''
            })
        },
        saveMessage: function (name, msg) {
            let template = this.template
            let m = this.messageList
            console.log('m', m)
            if (name && msg) {
                // 远程数据库的 class 名
                model.save(name, msg).then(function (todo) {
                    // 成功保存之后，执行其他逻辑.
                    m.insertAdjacentHTML('beforeend', template(name, msg))
                    console.log(msg)
                }, function (error) {
                    // 异常处理
                    console.error('Failed to create new object, with error message: ' + error.message)
                })
            } else {
                alert('请输入信息')
            }

        },
        template: function (name, message) {
            let t = `<li>
            <span class="name">${name}</span>
            <span class="colon">:</span>
            <span class="message">${message}</span>
            </li>`
            return t
        },
        loadMessage: function () {
            let template = this.template
            let m = this.messageList
            model.fetch().then(function (todos) {
                todos.forEach(function (todo) {
                    m.insertAdjacentHTML('beforeend', template(todo.attributes.name, todo.attributes.msg))
                })
                return AV.Object.saveAll(todos);
            }).then(function (todos) {

            }, function (error) {
                alert('网络错误，请改天再来')
                console.log(error)
            })
        }
    }
    */


!function () {
    let view = View('section.msgBoard')
    let model = Model({ srcName: 'messageBoard' })

    let controller = Controller({
        // 这个 init 函数在 Controller 中被执行
        init: function (view, model) {
            this.loadMessage()
        },
        bindEvents: function () {
            let msgForm = view.querySelector('#msgForm')
            let vstn = msgForm.querySelector('#visitorName')
            let vstm = msgForm.querySelector('#visitorMsg')
            msgForm.addEventListener('submit', (e) => {
                e.preventDefault()
                console.log('vs', vstn.value, vstm.value)
                this.saveMessage(vstn.value, vstm.value)
                vstm.value = ''
            })
        },
        saveMessage: function (name, msg) {
            let template = this.template
            let m = this.messageList
            console.log('n:', name, 'm:',msg)
            if (name && msg) {
                // 远程数据库的 class 名
                model.save(name, msg).then(function (todo) {
                    // 成功保存之后，执行其他逻辑.
                    m.insertAdjacentHTML('beforeend', template(name, msg))
                }, function (error) {
                    // 异常处理
                    console.error('Failed to create new object, with error message: ' + error.message)
                })
            } else {
                alert('请输入信息')
            }
        },
        template: function (name, message) {
            let t = `<li>
            <span class="name">${name}</span>
            <span class="colon">:</span>
            <span class="message">${message}</span>
            </li>`
            return t
        },
        loadMessage: function () {
            let template = this.template
            this.messageList = view.querySelector('.visitorMSGBoard')
            let m = this.messageList
            this.model.fetch().then(function (todos) {
                todos.forEach(function (todo) {
                    m.insertAdjacentHTML('beforeend', template(todo.attributes.name, todo.attributes.msg))
                })
                return AV.Object.saveAll(todos);
            }).then(function (todos) {

            }, function (error) {
                alert('网络错误，请改天再来')
                console.log(error)
            })
        }
    })
    // 这个 init 是Controller返回的init
    controller.init(view, model)
}()
