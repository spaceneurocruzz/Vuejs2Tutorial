new Vue({
	el:'#vue-app',
	data:{
		name:"Sandy Lin",
		job:"astronaut"
	},
	methods:{
		greet: function(time){
			return 'Good' + ' ' + time + '! ' + this.name;
		}
	}
});