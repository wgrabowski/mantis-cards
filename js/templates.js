(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['issue'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\r\n  <strong class=\"right\">"
    + escapeExpression((helper = helpers.customField || (depth0 && depth0.customField) || helperMissing,helper.call(depth0, "customImportanceField", depth0, "name", {"name":"customField","hash":{},"data":data})))
    + ": "
    + escapeExpression((helper = helpers.customField || (depth0 && depth0.customField) || helperMissing,helper.call(depth0, "customImportanceField", depth0, "value", {"name":"customField","hash":{},"data":data})))
    + "</strong>\r\n  ";
},"3":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<strong>Estimated: "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Estimated time", {"name":"getValue","hash":{},"data":data})))
    + "</strong>";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<li id=\"newcard"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "ID", {"name":"getValue","hash":{},"data":data})))
    + "\" class=\"issue\" draggable=\"true\">\r\n<header>\r\n  <h1><strong>"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "ID", {"name":"getValue","hash":{},"data":data})))
    + "</strong><strong class=\"custom-id right\">"
    + escapeExpression((helper = helpers.regexField || (depth0 && depth0.regexField) || helperMissing,helper.call(depth0, "customSummaryRgx", "Summary", depth0, {"name":"regexField","hash":{},"data":data})))
    + "</strong></h1>\r\n  <h2>\r\n  ";
  stack1 = (helper = helpers.customField || (depth0 && depth0.customField) || helperMissing,helper.call(depth0, "customImportanceField", depth0, "value", {"name":"customField","hash":{},"data":data}));
  stack1 = helpers['if'].call(depth0, stack1, {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  	<strong class=\"severity\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Priority", {"name":"getValue","hash":{},"data":data})))
    + " / "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Severity", {"name":"getValue","hash":{},"data":data})))
    + "</strong> \r\n  </h2>\r\n</header>\r\n<section class=\"summary\" contenteditable=\"true\">\r\n   	"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Summary", {"name":"getValue","hash":{},"data":data})))
    + "\r\n</section>\r\n<footer>\r\n  <h3 class=\"icon-clock\">";
  stack1 = (helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Estimated time", {"name":"getValue","hash":{},"data":data}));
  stack1 = helpers['if'].call(depth0, stack1, {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + " </h3>\r\n</footer>\r\n  \r\n</li>\r\n";
},"useData":true});
templates['single-issue'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<strong class=\"icon-clock\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Estimated time", {"name":"getValue","hash":{},"data":data})))
    + "</strong>";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<li id=\"card"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "ID", {"name":"getValue","hash":{},"data":data})))
    + "\" data-mantis-id=\""
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "ID", {"name":"getValue","hash":{},"data":data})))
    + "\" data-summary-rgx=\""
    + escapeExpression((helper = helpers.regexField || (depth0 && depth0.regexField) || helperMissing,helper.call(depth0, "customSummaryRgx", "Summary", depth0, {"name":"regexField","hash":{},"data":data})))
    + "\" data-priority=\""
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Priority", {"name":"getValue","hash":{},"data":data})))
    + "\" draggable=\"true\">\n	<div class=\"mantisid\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "ID", {"name":"getValue","hash":{},"data":data})))
    + "</div>\n	<div class=\"summary\" contenteditable=\"true\">\n		"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Summary", {"name":"getValue","hash":{},"data":data})))
    + "\n	</div>\n	<div class=\"meta\">\n		";
  stack1 = (helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Estimated time", {"name":"getValue","hash":{},"data":data}));
  stack1 = helpers['if'].call(depth0, stack1, {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n		<strong class=\"right\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue) || helperMissing,helper.call(depth0, depth0, "Severity", {"name":"getValue","hash":{},"data":data})))
    + "</strong>\n	</div>\n</li>";
},"useData":true});
})();