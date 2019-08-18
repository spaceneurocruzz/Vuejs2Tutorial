// var data = {
// 	name: 'Yo'
// }

Vue.component('greeting', {
	template: '<p>Hey there, I am {{name}}. <button v-on:click="changeName">Change Name</button></p>',
	data: function(){
		return {
			name:'BB8'
		}
		//return data
	},
	methods: {
		changeName: function(){
			this.name = 'R2D2';
		}
	}
});

new Vue({
	el: '#vue-app-one'

    /*template: '<p>I am a template</p>'*/
});

new Vue({
    el: '#vue-app-two'
    /*template: '<p>I am a template</p>'*/
});