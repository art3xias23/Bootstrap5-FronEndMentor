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

function getContent(content) {
	fetch(content)
		.then(response => {
			if (!response.ok) {
				console.log('oops')
				throw new Error('Could not get file', content)
			}
			return response.text();
		})
		.then(data => {
			document.querySelector("main").outerHTML = data
		})
		.catch(error => {
			console.error('Some other error: ', error);
		})
}

document.addEventListener('DOMContentLoaded', function() {
	var circle2 = document.getElementById('circle2')
	if (circle2) {
		circle2.addEventListener('click', () => getContent("plan.html"))
	}
})
