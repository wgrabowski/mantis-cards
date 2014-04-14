#!/bin/bash
# skrypt do budowania i wystawiania wersji mantis cards printera
echo "========================================"
echo "Build starting"
echo "========================================"
echo "step 1: compiling CSS"
sass css/style.scss:css/style.css
echo " ."
sass css/print.scss:css/print.css
echo "."
echo "step 1 done"
echo "step 2: compiling handlebars templates"
handlebars templates/ -f js/templates.js
echo "step 2 done"
echo "step 3: removing old build"
cd 
echo "step 3 done"

