!function(){
	var view = View('#topNavBar')
    var controller = {
    	view: null,
    	init:function(view){
    		this.view = view
    		this.bindEvents()
    	},
    	bindEvents: function(){
			window.addEventListener('scroll', (x) => { //箭头函数没有this,那么this 则会向上找
			    if(window.scrollY > 0){
			        this.active()
			    }else{
			        this.deactive()
			    }
			})
		},
		active: function(){
			this.view.classList.add('sticky')
		},
		deactive: function(){
			this.view.classList.remove('sticky')
		}
    }
    controller.init(view)
}.call()