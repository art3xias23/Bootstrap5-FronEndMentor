
function setNumbers() {
	console.log("hello")
	var days = document.getElementById("getdays").value;
	var months = document.getElementById("getmonths").value;
	var years = document.getElementById("getyears").value;

	var result = calculateAge(years, months, days);

	var setDays = document.getElementById("setdays");
	var setMonths = document.getElementById("setmonths");
	var setYears = document.getElementById("setyears");

	setDays.textContent = result.days;
	setMonths.textContent = result.months;
	setYears.textContent = result.years;


}

function calculateAge(year, month, day) {
	// Get the current date
	var currentDate = new Date();

	// Calculate the difference in years
	var ageYears = currentDate.getFullYear() - year;

	// Calculate the difference in months
	var ageMonths = currentDate.getMonth() + 1 - month;
	if (ageMonths < 0 || (ageMonths === 0 && currentDate.getDate() < day)) {
		ageYears--;
		ageMonths += 12;
	}

	// Calculate the difference in days
	var ageDays = currentDate.getDate() - day;
	if (ageDays < 0) {
		// If the current day is less than the birth day, adjust the age months and days
		var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
		ageDays += lastMonth.getDate();
		ageMonths--;
	}

	return {
		years: ageYears,
		months: ageMonths,
		days: ageDays
	};
}
