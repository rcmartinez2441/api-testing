(function () {
	"use strict";

	initializeCalendar();

	function initializeCalendar() {

		document.addEventListener('DOMContentLoaded', function () {
			let calendarEl = document.getElementById('calendar');
			let calendar = new FullCalendar.Calendar(calendarEl, {
				themeSystem: "bootstrap",
				initialView: 'dayGridMonth',
				events: [
					{
						title: 'Meeting',
						start: '2021-09-01T14:30:00',
						extendedProps: {
							status: 'done',
							description: 'Meeting Description'
						}
					},
					{
						title: 'Birthday Party',
						start: '2021-09-02T14:30',
						backgroundColor: 'green',
						borderColor: 'green',
						extendedProps: {
							department: 'BioChemistry',
							description: 'Lecture'
						}
					},
					{
						title: 'BCH237',
						start: '2021-09-01T14:30',
						end: '2021-09-01T11:30',
						extendedProps: {
							department: 'BioChemistry',
							description: 'Lecture'
						},
					}
				],
				eventClick: function (info) {
					let object = info.event.extendedProps // getting description on specific event
					for(let prop in object){ //getting each extendedProperty key:value
						console.log(`${prop}: ${object[prop]}`)
					}
				}
			});
			calendar.render();
		});


	}

})();