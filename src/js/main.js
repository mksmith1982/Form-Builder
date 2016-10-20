import $ from 'jquery';

var container = $("#formcontainer");
console.log(container);


function formTemplate(items){
	return `
	<li id="firstName">
	 ${firstName.name} 

	</li>;}`


var userRequest = $.ajax({
	url: `http://json-data.herokuapp.com/forms`
});



// <form action="/my-handling-form-page" method="post">
//     <div>
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="user_name" />
//     </div>
//     <div>
//         <label for="mail">E-mail:</label>
//         <input type="email" id="mail" name="user_mail" />
//     </div>
//     <div>
//         <label for="msg">Message:</label>
//         <textarea id="msg" name="user_message"></textarea>
//     </div>
// </form>


// var firstName = $(#fistName);
// var lastName  = $(#lastName);
// var email= $(#email);
// var currentWebsite = $(#currentWebsite);
// var language = $(#language);
// var comments = $(#comments);
// var mobile = $(#mobile);
// var home = $(#home);
// var formSub = $(#formSub);
