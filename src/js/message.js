!function(){
	var model = Model({ resourceName: 'Message'})

	var view = View('section.message')

	var controller = Controller({
		init: function(view, controller){
			this.messageList = view.querySelector('#messageList')
			this.form = view.querySelector('form')
			this.loadMessages()
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
			this.model.save({
				'name': name,
				'content':content
			}).then(function(object) {
			  	let li = document.createElement("li")
				li.innerText = `${object.attributes.name}: ${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.appendChild(li)
				myForm.querySelector('input[name=content]').value = ''
				console.log(object)
			})
		}
	})

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
