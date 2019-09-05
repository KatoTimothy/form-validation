//validate the user

function validateForm() {

	let formElement = document.getElementById("reg-form"),
		spanElements = document.getElementsByClassName("require");


	//listen submit event
	formElement.addEventListener("submit", (event) => {
		//get form element
		//validate user id
		function validateID() {
			//fetch userid value
			var userId = document.getElementById("user-id"),
				requireId = document.getElementById("req-user-id"),
				idMatch = /^\d{5,12}$/;

			if (!idMatch.test(userId.value)) {
				event.preventDefault();
				requireId.innerHTML = "<small>Required and User Id must be of 5 to 12.</small>";

			}
		}

		//validate user password
		function validatePw() {
			//fetch userid value
			var password = document.getElementById("password"),
				requirePw = document.getElementById("req-pw"),
				pwMatch = /^[A-za-z0-9]{7,12}$/;

			if (!pwMatch.test(password.value)) {
				event.preventDefault();
				//send validation msg
				requirePw.innerHTML = "<small>Required and Password must be 7 to 12 characters.</small>";
				password.style = "border: 1px solid red";
			}
		}

		//validate user name field
		function validateName() {
			//fetch user name value
			var userName = document.getElementById("user-name"),
				requireName = document.getElementById("req-name"),
				//alphabets only
				nameMatch = /^[A-Za-z]+$/;

			if (!nameMatch.test(userName.value)) {
				event.preventDefault();
				requireName.innerHTML = "<small>Required and alphabets only.</small>";
				userName.style = "border: 1px solid red";
			}
		}

		//validate zip code field
		function validateZipCode() {
			//fetch user name value
			var zipCode = document.getElementById("zip"),
				requireZip = document.getElementById("req-zip"),
				//alphabets only
				zipMatch = /^\d+$/;

			if (!zipMatch.test(zipCode.value)) {
				event.preventDefault();
				requireZip.innerHTML = "<small>Required. Must be numeric only.</small>";
				userName.style = "border: 1px solid red";
			}
		}


		//validate email field
		function validateEmail() {
			//fetch user name value
			var userEmail = document.getElementById("email"),
				requireEmail = document.getElementById("req-email"),

				emailMatch = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

			if (!emailMatch.test(userEmail.value)) {
				event.preventDefault();
				requireEmail.innerHTML = "<small>Invalid email.</small>";
				userEmail.style = "border: 1px solid red";
			}
		}

		//display all required spans as block
		for (let i = 0; i < spanElements.length; i++) {
			spanElements[i].style = "display:block";
		}
		validateID();
		validatePw();
		validateName();
		validateZipCode();
		validateEmail();
	});
}

validateForm();
