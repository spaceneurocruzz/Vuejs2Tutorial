new Vue({
	el:'#vue-app',
	data:{
		name:"Sandy Lin",
		job:"astronaut",
		website:"https://www.lego.com/",
		websiteTag:'<a href="https://www.lego.com/en-us">GOGOGO'
	},
	methods:{
		greet: function(time){
			return 'Good' + ' ' + time + '! ' + this.name;
		}
	}
});