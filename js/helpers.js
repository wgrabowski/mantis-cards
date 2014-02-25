/*
 * 
 * Get value from object. Helper created to obtain values with keys containing spaces and special characters
 * @param obj Object
 * @param key String
 *  */
Handlebars.registerHelper('getValue', function(obj,key) {
	var useKey = mcards.utils.unifyName(key);
  return obj[useKey];
});
Handlebars.registerHelper('unifyName', function(name) {
  return mcards.utils.unifyName(name);
});
Handlebars.registerHelper('regexField', function(rgxName,field,obj) {
	var rgx = new RegExp(mcards.utils.getRgxByName(rgxName).replace("/","").replace("/","")),
		str = obj[mcards.utils.unifyName(field)];
	console.group(obj.id);
	console.log(rgx);
	console.log(str);
	console.log(rgx.exec(str));
	console.log(mcards.utils.getRgxByName(rgxName));
	console.groupEnd();
	
  return rgx.exec(str);
});