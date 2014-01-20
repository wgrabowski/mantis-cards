/*
 * 
 * Get value from object. Helper created to obtain values with keys containing spaces and special characters
 * @param obj Object
 * @param key String
 *  */
Handlebars.registerHelper('getValue', function(obj,key) {
  return obj[key];
});