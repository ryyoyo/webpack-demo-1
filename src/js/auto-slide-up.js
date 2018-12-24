!function(){
	/*setTimeout(function(){
    	wel.classList.remove('active')
	},100)*/

	let specialTags = document.querySelectorAll('[data-x]')
	for(var i = 0; i < specialTags.length; i++){
	// if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
	//     minIndex = i
	    specialTags[i].classList.add('offset')
	}

	setTimeout(function(){
	    findClosestAndRemoveOffset()
	},100)
	window.addEventListener('scroll', function(x){
	    findClosestAndRemoveOffset()
	})


	function findClosestAndRemoveOffset(){
	    let specialTags = document.querySelectorAll('[data-x]')
	    let minIndex = 0
	    for(var i = 0; i < specialTags.length; i++){
	        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
	            minIndex = i
	        }
	    }
	    //minIndex 就是离窗口顶部最近的元素
	    specialTags[minIndex].classList.remove('offset')
	    let id = specialTags[minIndex].id
	    let a = document.querySelector('a[href="#'+ id +'"]')
	    let li = a.parentNode
	    let allBrothers = li.parentNode.children
	    for(var i = 0; i < allBrothers.length; i++){
	        allBrothers[i].classList.remove('highlight')
	    }
	    li.classList.add('highlight')
	}
}.call()