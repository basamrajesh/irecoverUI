
var url = 'https://reqres.in';
var baseUrl = 'https://cors-anywhere.herokuapp.com/http://ec2-15-207-108-244.ap-south-1.compute.amazonaws.com:7878';
var userArea = document.querySelector('#userindv');

// let userDetails;

// window.onload = function () {
// 	document.querySelector('#user-area').addEventListener('click', getText);
// 	function getText(e) {
// 		e.preventDefault();
// 		let viewButtonPressed = e.target.id === 'detailView';
// 		let dataID = e.target.parentElement.dataset.id;
// 		if (viewButtonPressed) {
// 			console.log(dataID);
// 			fetch(url + '/api/users/' + dataID)
// 				.then(response => response.json())
// 				.then(userData => userDetails = userData)
// 				.then(() => console.log(userDetails));
// 			location.href = '../demo1/ir-induser.html';
// 			// document.getElementById('userIndData').textContent = "Hello"

// 		}
// 	}
// }



// let base64 = require('base-64');

// let headers = new Headers();

// //headers.append('Content-Type', 'text/json');
// headers.set('Authorization', 'Basic ' + base64.encode('i_recover' + ":" + 'password56'));


fetch(baseUrl + "/api/user/5")
	.then(response => response.json())
	.then(data => console.log(data));

fetch(baseUrl + "/api/questioner/list")
	.then(response => response.json())
	.then(data => console.log(data));


// fetch(baseUrl, {
// 	method: 'GET',


// })


// var obj;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// 	.then(res => res.json())
// 	.then(data => obj = data)
// 	.then(() => console.log(obj))



// https://www.codeinwp.com/blog/fetch-api-tutorial-for-beginners/
// https://www.freecodecamp.org/news/fetch-api-cheatsheet/
