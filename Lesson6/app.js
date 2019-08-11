new Vue({
	el:'#vue-app',
	data:{
		age:25,
		x:0,
		y:0
	},
	methods:{
		add: function(inc){
			this.age += inc;
		},
		subtract: function(inc){
			this.age -= inc;
		},
		updateXY:function(event){
			this.x = event.offsetX;
			this.y = event.offsetY;
		},
		click:function(){
			alert("You clicked me");
		}
	}
});