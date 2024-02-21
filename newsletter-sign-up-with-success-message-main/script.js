	function sendEmail(){
		const em = document.getElementById('email').value;
		const url = "thanks.html?email="+ encodeURIComponent(em);

		window.location.href = url;
	}

	const params = new URLSearchParams(window.location.search);
	const email = params.get('email');
	console.log("email: " + email)

	if(email){
		document.getElementById('emailPlaceholder').textContent = email;
	}
