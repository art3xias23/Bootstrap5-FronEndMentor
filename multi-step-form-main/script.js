document.getElementById('circle2').addEventListener('click', getContent)
function onChangedCb() {
	var checkboxes = document.querySelectorAll('.checkbox');

	checkboxes.forEach(function(element) {
		var parentDiv = element.closest('.cnt');

		console.log(parentDiv)

		if (element.checked) {
			parentDiv.classList.remove('border-gray-100');
			parentDiv.classList.add('border-indigo-800');
			parentDiv.classList.add('bg-violet-200')
		}
		else {

			parentDiv.classList.add('border-gray-100');
			parentDiv.classList.remove('border-indigo-800');
			parentDiv.classList.remove('bg-violet-200')
		}
	})
}

function getContent() {
	fetch('plan.html')
		.then(response => {
			if (!response.ok) {
				console.log('oops')
				throw new Error('Could not get file plan.html')
			}
			return response.text();
		})
		.then(data => {
			document.getElementsByTagName("main").innerHtml = data
		})
		.catch(error => {
			console.error('Some other error: ', error);
		})

}

