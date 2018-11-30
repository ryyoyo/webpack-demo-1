!function(){
	var model = {
		//获取数据
		init: function(){
			// 初始化AV
			var APP_ID = 'DIKwHuhgFfEfhrQBAqbY4XQ5-gzGzoHsz'
			var APP_KEY = 'UAsVVkpCxeJpGbMbTetmjQt5'
			AV.init({appId: APP_ID,appKey: APP_KEY})
		},
		fetch: function(){
			var query = new AV.Query('Message');
			return query.find() //promise 对象
		},
		//新建数据
		save: function(name, content){
			var Message = AV.Object.extend('Message');
			var message = new Message();
			return message.save({ //promise 对象
				'name': name,
			  	'content': content
			})
		}
	}

	var view = document.querySelector('section.message')


	var controller = {
		view: null,
		model: null,
		messageList: null,
		init: function(view, model){
			this.view = view
			this.model = model

			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('form')
			this.model.init()
			this.loadMessages()
			this.bindEvents()
		},
		loadMessages: function(){
			this.model.fetch().then(
				(messages) => {
					let arrary = messages.map((item) => item.attributes)
					arrary.forEach((item) => {
						let li = document.createElement("li")
						li.innerText = `${item.name}: ${item.content}`
						this.messageList.appendChild(li)
					})
				}
			)
		},
		//bindEvents 除了绑定事件，其他事情不应该做
		bindEvents: function(){
			this.form.addEventListener('submit', (e) => {
				e.preventDefault()
				this.saveMessage()
			})
		},
		saveMessage: function(){
			console.log(this)
			let myForm = this.form
			let content = myForm.querySelector('input[name=content]').value
			let name = myForm.querySelector('input[name=name]').value
			this.model.save(name, content).then(function(object) {
			  	let li = document.createElement("li")
				li.innerText = `${object.attributes.name}: ${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
				myForm.querySelector('input[name=content]').value = ''
				console.log(object)
			})
		}
	}

	controller.init(view, model)

	/* 新建数据

	var RY = AV.Object.extend('ry');
	var test = new RY();
	test.save({
	  words: 'Heihei!'
	}).then(function(object) {
	  alert('RY Rocks!');
	})
	*/


}.call()
