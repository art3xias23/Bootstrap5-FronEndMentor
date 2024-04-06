document.addEventListener('DOMContentLoaded', function() {
	var checkboxes = document.querySelectorAll('.checkbox');

	checkboxes.forEach(function(element){
		element.addEventListener('change', function(event) {
		var parentDiv = event.target.closest('.cnt');

		console.log(parentDiv)

		if (event.target.checked) {
			parentDiv.classList.remove('border-sky-500');
			parentDiv.classList.add('border-indigo-200');
			parentDiv.classList.add('bg-violet-200')
		}
		else {

			parentDiv.classList.add('border-sky-500');
			parentDiv.classList.remove('border-indigo-200');
			parentDiv.classList.remove('bg-violet-200')
		}
		})
	})
})
