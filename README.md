mantis-cards
============

Agile cards printer tool for Mantis BT.

#Building
##SCSS/CSS
sass css/style.scss:css/style.css
sass css/print.scss:css/print.css
##Precomipiling Handlebars templates
handlebars templates/ -f js/templates.js

#Usage
* Export your issues from Mantis (CSV) export
* Click Import button on the left panel
* Paste exported csv file contents to input
* Click 'import' button
* Now you can drag and drop issues from list view to print view and vice-versa
* To print click 'print button' or Ctr+P (it is recommended to show print preview rather than direct printing)
* Tested and working with fresh Chrome and Firefox
