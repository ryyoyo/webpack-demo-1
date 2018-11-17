!function(){
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        init: function(){
            this.view = view
            this.initAnimation()
            this.bindLis()
            this.bindEvents()
        },
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement: function(element){
            let top = element.offsetTop
            let currentTop = window.scrollY//当前的距离
            let targetTop = top - 80//目标距离
            let s = targetTop - currentTop
            var coords = {y: currentTop};
            var t = Math.abs((s/100)*300)
            if(t > 500){t = 500}
            var tween = new TWEEN.Tween(coords)
                .to({y: targetTop}, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    window.scrollTo(0, coords.y)
                })
                .start();
        },
        bindLis: function(){
            let liTags = document.querySelectorAll('nav > ul > li')//返回与指定的选择器组匹配的文档中的元素列表
            for(let i = 0;i < liTags.length; i++){
                liTags[i].onmouseenter = function(x){
                    x.currentTarget.classList.add('active')
                }
                liTags[i].onmouseleave = function(x){
                    x.currentTarget.classList.remove('active')
                }
            }
        },
        bindEvents: function(){
            let aTags = this.view.querySelectorAll('nav > ul > li > a')
            for(var i = 0;i < aTags.length; i++){
                aTags[i].onclick = (x) => {
                    x.preventDefault()//组织默认动作，组织 a 标签跳转
                    let a = x.currentTarget
                    let href = a.getAttribute('href')//'#siteAbout'
                    let element = document.querySelector(href)//id 为 siteAbout 的元素
                    this.scrollToElement(element)
                }
            }
        },
    }
    controller.init(view)
}.call()