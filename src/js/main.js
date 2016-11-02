
import $ from "jquery";



function getData(form_data, status , requestObject) {

	// loop through all elements in json object
	for (var i = 0; i < form_data.length; i++) {

		// log the label for each form element
		console.log	(form_data[i].label);

		// log each form element
		console.log(form_data[i]);

		// if the type is select
		if (form_data[i].type === "select") { 

			var label = `<label>${form_data[i].label}:</label>`;
			var icon  = `<i class = "fa ${form_data[i].icon}"> </i>`;
			var select = $(`<select id = "${form_data[i].id}"></select>`);

			// loop through each option of the select
			for (var a = 0; a < form_data[i].options.length; a++) {

				var language = `<option value= "${form_data[i].options[a].value}"> ${form_data[i].options[a].label}</option>`;
				console.log(form_data[i].options[a]);
				select.append(language);
				
			}

			// <select name = "mySelect">
			//    <option value= "option1"> English</option>
			//    <option value= "option2"> Spanish</option>
			//    <option value= "option3"> Japanese</option>
			// </select>

			// add the label, icon & select element
			$("#myform").append(label);
			$("#myform").append(icon);
			$("#myform").append(select);


			// end if type = select
		} else {  
			// else type != select

			var label = `<label class = label>${form_data[i].label}:</label>`;
			var icon  = `<i class = "fa ${form_data[i].icon}"> </i>`;
			var input = `<input type = "${form_data[i].type}" id = "${form_data[i].id}"/>`;


			// add the label, icon & input element
			$("#myform").append(label);
			$("#myform").append(icon);
			$("#myform").append(input);

		}	// end else type != select

	}	// end for i < form_data.length

} // end getData



$.getJSON("http://json-data.herokuapp.com/forms", {} , getData);


