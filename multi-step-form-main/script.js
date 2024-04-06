function onChangedCb() {
	var checkboxes = document.querySelectorAll('.checkbox');

	checkboxes.forEach(function(element){
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
