var mcards = {
	init : function() {
		var customFields = [];
		customFields["customImportanceField"] = "Importance";
		mcards.csvInput = document.querySelector("#csv-input");
		localStorage.setItem(mcards.storagePrefix+"rgx-customSummaryRgx","/[A-Z]{3}[0-9]{3,4}/");
		localStorage.setItem(mcards.storagePrefix+"rgx-customTagsRgx","/[GUI]/");
		localStorage.setItem(mcards.storagePrefix+"customFields",JSON.stringify(customFields));
		if (localStorage.getItem(mcards.storageKey)) {
			mcards.allIssues = JSON.parse(localStorage.getItem(mcards.storageKey))
		}
		mcards.settings.customFields = customFields;
		/*
		if(localStorage.getItem(localStorage.getItem(mcards.storagePrefix+"customFields"))){
			mcards.settings.customFields = JSON.parse(localStorage.getItem(mcards.storagePrefix+"customFields"));			
		}
*/
		mcards.list = document.querySelector("ul#list.issues");
		mcards.print = document.querySelector("ul#print.issues");

		mcards.showIssues();
		mcards.initDragOnList();
		mcards.initDropOnPrint();
		mcards.initDropOnList();
		mcards.attachEvents();
	},
	attachEvents : function() {
		var importBtn = document.querySelector("#import-btn"), addAllBtn = document.querySelector("#add-all-btn"), eraseAllBtn = document.querySelector("#erase-all-btn");

		addEvent(importBtn, 'click', function(e) {
			e.preventDefault();
			mcards.importFromCSV();
			location.href = window.location.href.split('#')[0];
		});
		addEvent(addAllBtn, 'click', function(e) {
			e.preventDefault();
			mcards.allToPrint();
		});
		addEvent(eraseAllBtn, 'click', function(e) {
			e.preventDefault();
			mcards.noneToPrint();
		});

	},
	importFromCSV : function() {
		var json = CSV2JSON(mcards.csvInput.value);
		localStorage.setItem(mcards.storageKey, json);
		mcards.allIssues = JSON.parse(json);
	},
	showIssues : function() {
		// display template on the left
		var listHtml = "", list = document.querySelector("ul#list.issues"), print = document.querySelector("ul#print.issues");

		for (var i = 0, j = mcards.allIssues.length; i < j; i++) {
			//listHtml += Handlebars.templates["single-issue"](mcards.allIssues["" + i + ""]);
			listHtml += Handlebars.templates["issue"](mcards.allIssues["" + i + ""]);
		}
		list.innerHTML = listHtml;
	},
	toggleInput : function() {
		document.querySelector("import-panel")
	},

	initDragOnList : function() {
		var msie = /*@cc_on!@*/0;

		var issuesLeft = document.querySelectorAll('#left-panel > .issues > li'), el = null;
		for (var i = 0; i < issuesLeft.length; i++) {
			el = issuesLeft[i];

			//			el.setAttribute('draggable', 'true');

			addEvent(el, 'dragstart', function(e) {
				e.dataTransfer.effectAllowed = 'copy';
				// only dropEffect='copy' will be dropable
				e.dataTransfer.setData('Text', this.id);
				// required otherwise doesn't work
			});
		}
	},
	initDropOnPrint : function() {

		var print = document.querySelector('#print');

		addEvent(print, 'dragover', function(e) {
			if (e.preventDefault)
				e.preventDefault();
			// allows us to drop
			//this.className = 'over';
			e.dataTransfer.dropEffect = 'copy';
			return false;
		});

		// to get IE to work
		addEvent(print, 'dragenter', function(e) {
			//this.className = 'over';
			return false;
		});

		addEvent(print, 'dragleave', function() {
			//this.className = '';
		});

		addEvent(print, 'drop', function(e) {
			if (e.stopPropagation)
				e.stopPropagation();
			// stops the browser from redirecting...why???

			var el = document.getElementById(e.dataTransfer.getData('Text'));

			//el.parentNode.removeChild(el);

			//var y = yum.cloneNode(true);
			print.appendChild(el);

			return false;

		});
	},
	initDropOnList : function() {

		var print = document.querySelector('#list');

		addEvent(print, 'dragover', function(e) {
			if (e.preventDefault)
				e.preventDefault();
			// allows us to drop
			//this.className = 'over';
			e.dataTransfer.dropEffect = 'copy';
			return false;
		});

		// to get IE to work
		addEvent(print, 'dragenter', function(e) {
			//this.className = 'over';
			return false;
		});

		addEvent(print, 'dragleave', function() {
			//this.className = '';
		});

		addEvent(print, 'drop', function(e) {
			if (e.stopPropagation)
				e.stopPropagation();
			// stops the browser from redirecting...why???

			var el = document.getElementById(e.dataTransfer.getData('Text'));

			//el.parentNode.removeChild(el);

			//var y = yum.cloneNode(true);
			print.appendChild(el);

			return false;

		});
	},
	allToPrint : function() {
		if (mcards.list.childElementCount) {
			var children = mcards.list.children, immigrants = [];
			console.log(children.length);
			for (var i = 0; i < children.length; i++) {
				immigrants.push(children[i]);
			}
			mcards.moveElements(mcards.list, mcards.print, immigrants);
		}
	},
	noneToPrint : function() {
		if (mcards.print.childElementCount) {
			var children = mcards.print.children, immigrants = [];
			console.log(children.length);
			for (var i = 0; i < children.length; i++) {
				immigrants.push(children[i]);
			}
			mcards.moveElements(mcards.print, mcards.list, immigrants);
		}
	},
	moveElements : function(from, to, children) {
		for (var i = 0; i < children.length; i++) {
			to.appendChild(children[i])
		}
	},
	utils : {
		unifyName : function(name) {
			var res = name.trim().replace(" ", "").toLowerCase();
			return res;
		},
		getRgxByName : function(name) {
			var rgx = localStorage.getItem(mcards.storagePrefix+"rgx-"+name);
			return rgx;
		}
	},
	allIssues : {
	},
	settings:{},
	list : {},
	print : {},
	csvInput : null,
	storageKey : "mcards-all",
	storagePrefix : "mcards-"
	
}

function addEvent(el, type, fn) {
	if (el && el.nodeName || el === window) {
		el.addEventListener(type, fn, false);
	} else if (el && el.length) {
		for (var i = 0; i < el.length; i++) {
			addEvent(el[i], type, fn);
		}
	}
}