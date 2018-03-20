setInterval(function() {
	let date = new Date();

	let hours = date.getHours()
	let minutes = date.getMinutes()
	let seconds = date.getSeconds()
	let ampm = "am"

	if(hours === 13) {
		hours = "01"
		ampm = "pm"
	} else if (hours === 14){
		hours = "02"
		ampm = "pm"
	} else if(hours === 15) {
		hours = "03"
		ampm = "pm"
	} else if(hours === 16) {
		hours = "04"
		ampm = "pm"
	} else if(hours === 17) {
		hours = "05"
		ampm = "pm"
	} else if(hours === 18) {
		hours = "06"
		ampm = "pm"
	} else if(hours === 19) {
		hours = "07"
		ampm = "pm"
	} else if(hours === 20) {
		hours = "08"
		ampm = "pm"
	} else if(hours === 21) {
		hours = "09"
		ampm = "pm"
	} else if(hours === 22) {
		hours = "10"
		ampm = "pm"
	} else if(hours === 23) {
		hours = "11"
		ampm = "pm"
	} else if(hours === 24) {
		hours = "12"
		ampm = "pm"
	}

	if(minutes === 1) {
		minutes = "01"
	} else if (minutes === 2){
		minutes = "02"
	} else if(minutes === 3) {
		minutes = "03"
	} else if(minutes === 4) {
		minutes = "04"
	} else if(minutes === 5) {
		minutes = "05"
	} else if(minutes === 6) {
		minutes = "06"
	} else if(minutes === 7) {
		minutes = "07"
	} else if(minutes === 8) {
		minutes = "08"
	} else if(minutes === 9) {
		minutes = "09"
	}

	if(seconds === 1) {
		seconds = "01"
	} else if (seconds === 2){
		seconds = "02"
	} else if(seconds === 3) {
		seconds = "03"
	} else if(seconds === 4) {
		seconds = "04"
	} else if(seconds === 5) {
		seconds = "05"
	} else if(seconds === 6) {
		seconds = "06"
	} else if(seconds === 7) {
		seconds = "07"
	} else if(seconds === 8) {
		seconds = "08"
	} else if(seconds === 9) {
		seconds = "09"
	}


document.getElementById("daylight").innerHTML = ampm

document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds
}, 1000)

















