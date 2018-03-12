
var Controller = function(options){
    var init = options.init // B
  
    let object = {
      view: null,
      model: null,
      init: function(view, model){
        this.view = view
        this.model = model
        this.model.init() // 帮忙执行
        init.call(this, view, model) 
        this.bindEvents.call(this) // 帮忙执行
      },
    }
    for(let key in options){
      if(key !== 'init'){
        object[key] = options[key]
      }
    }
    return object
  } 