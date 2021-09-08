(function () {
	"use strict";

	// initializeCalendar();

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

	//***INFINITE SCROLLING****
	let listContent;
	let listEnd = document.getElementById("list-end")
	let itemCount = 0;
	//This var will be used to check if divItems or ContentItems are already being added to listContent
	let isAppended = false;

	function infiniteScrolling(){
		loadInitialContent()
		addSubDivs()
		addContentToListContent()
	}

	window.addEventListener("DOMContentLoaded", loadInitialContent)

	function loadInitialContent(){
		addSubDivs()
	}

	function addSubDivs(){
		listContent = document.getElementById("list-content")
		// listEnd = document.getElementById("list-end")
		//When this is called, it will set isAppended to true saying that these next items will be appended
		isAppended = true;
		//Will run a loop to addContentToListContent
		for (let i =0; i < 50; i++ ){
			let childDiv = addContentToListContent(`This is childdiv #${i+1}`)
			listContent.appendChild(childDiv)
			itemCount++
		}
		//After items have been appended, we set isAppeneded back to false
		isAppended = false;
	}

	function addContentToListContent(message){
		let childDiv = document.createElement("div");
		childDiv.setAttribute("class", 'childDiv')
		childDiv.textContent = message;
		return childDiv;
	}
	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 1.0
	}

	let callback = (entries, observer) =>{
		entries.forEach(entry => {
			console.log(entry)
			if(entry.target.id === 'list-end'){
				if (entry.isIntersecting){
				console.log('Call back function called')
					addSubDivs();
				} else{
					console.log('Div cannot be seen')
				}
			}
		})
	}
	let observer = new IntersectionObserver(callback, options)
	observer.observe(listEnd)

})();