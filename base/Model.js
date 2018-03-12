var Model = function(options) {
    let srcName = options.srcName
    return {
        init:function() {
            var APP_ID = 'JMsOv03O6t7NGv6eh2K83q98-gzGzoHsz'
            var APP_KEY = 'LSi9xGeUUHwHIagmeqfXNucq'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function() {    
            var query = new AV.Query(srcName)
            // 这个then 里面的机制会改变 this 的指向
            return query.find()
        },
        save: function (name, msg) {
            var Todo = AV.Object.extend('messageBoard')
            // 新建一个 Todo 对象
            var todo = new Todo()
            todo.set('name', name)  //第一个参数是key  第二格参数是value，
            todo.set('msg', msg)    // name 和 msg 作为一个对象的不同键值对，储存在数组的每一项中
            return todo.save({      // save 返回一个 promise 对象
                name:name,
                msg:msg
            })
        },
    }
}