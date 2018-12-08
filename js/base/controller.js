window.Controller = function(o){
	var init = o.init

	let object =  {
		view: null,
		model: null,
    	init:function(view, model){
    		this.view = view
    		this.model = model
    		this.model.init()
    		init.call(this, view, model)
    		this.bindEvents.call(this)
    	}
	}
	for(let key in o){
		if(key !== 'init'){
			object[key] = o[key]
		}
	}
	return object
}