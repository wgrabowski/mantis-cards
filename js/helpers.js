/*
 *
 * Get value from object. Helper created to obtain values with keys containing spaces and special characters
 * @param obj Object
 * @param key String
 *  */
Handlebars.registerHelper('getValue', function(obj, key) {
	var useKey = mcards.utils.unifyName(key);
	return useKey == "id" ? parseInt(obj[useKey]) : obj[useKey];
});
Handlebars.registerHelper('unifyName', function(name) {
	return mcards.utils.unifyName(name);
});
Handlebars.registerHelper('regexField', function(rgxName, field, obj) {
	var rgx = new RegExp(mcards.utils.getRgxByName(rgxName).replace("/", "").replace("/", "")), str = obj[mcards.utils.unifyName(field)];

	return rgx.exec(str);
});
Handlebars.registerHelper('customField', function(field, obj, type) {
	var fieldName = mcards.settings.customFields["customImportanceField"],
	fieldValue = obj[mcards.utils.unifyName(fieldName)] ? obj[mcards.utils.unifyName(fieldName)] : '';

	return type == "name" ? fieldName : type == "value" ? fieldValue : "";
});
