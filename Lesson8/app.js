new Vue({
	el:'#vue-app',
	data:{
		name:'',
		age:''
	},
	methods:{
		logName: function(inc){
			console.log("You entered your name");
		},
		logAge: function(inc){
			console.log("You entered your age");
		},
	}
});