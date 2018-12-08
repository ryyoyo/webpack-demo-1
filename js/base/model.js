window.Model = function(o){
	let resourceName = o.resourceName
	return {
		init: function(){
			var APP_ID = 'DIKwHuhgFfEfhrQBAqbY4XQ5-gzGzoHsz'
			var APP_KEY = 'UAsVVkpCxeJpGbMbTetmjQt5'
			AV.init({appId: APP_ID,appKey: APP_KEY})
		},
		fetch: function(){
			var query = new AV.Query(resourceName);
			return query.find()
		},
		save: function(object){
			var M = AV.Object.extend(resourceName);
			var m = new M();
			return m.save(object)
		}
	}
}