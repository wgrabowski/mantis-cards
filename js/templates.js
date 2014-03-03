(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['issue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\r\n  <strong class=\"right\">"
    + escapeExpression((helper = helpers.customField || (depth0 && depth0.customField),options={hash:{},data:data},helper ? helper.call(depth0, "customImportanceField", depth0, "name", options) : helperMissing.call(depth0, "customField", "customImportanceField", depth0, "name", options)))
    + ": "
    + escapeExpression((helper = helpers.customField || (depth0 && depth0.customField),options={hash:{},data:data},helper ? helper.call(depth0, "customImportanceField", depth0, "value", options) : helperMissing.call(depth0, "customField", "customImportanceField", depth0, "value", options)))
    + "</strong>\r\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "<strong>Estimated: "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options)))
    + "</strong>";
  return buffer;
  }

  buffer += "<li id=\"newcard"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "ID", options) : helperMissing.call(depth0, "getValue", depth0, "ID", options)))
    + "\" class=\"issue\" draggable=\"true\">\r\n<header>\r\n  <h1><strong>"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "ID", options) : helperMissing.call(depth0, "getValue", depth0, "ID", options)))
    + "</strong><strong class=\"custom-id right\">"
    + escapeExpression((helper = helpers.regexField || (depth0 && depth0.regexField),options={hash:{},data:data},helper ? helper.call(depth0, "customSummaryRgx", "Summary", depth0, options) : helperMissing.call(depth0, "regexField", "customSummaryRgx", "Summary", depth0, options)))
    + "</strong></h1>\r\n  <h2>\r\n  ";
  stack1 = (helper = helpers.customField || (depth0 && depth0.customField),options={hash:{},data:data},helper ? helper.call(depth0, "customImportanceField", depth0, "value", options) : helperMissing.call(depth0, "customField", "customImportanceField", depth0, "value", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n  	<strong class=\"severity\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Priority", options) : helperMissing.call(depth0, "getValue", depth0, "Priority", options)))
    + " / "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Severity", options) : helperMissing.call(depth0, "getValue", depth0, "Severity", options)))
    + "</strong> \r\n  </h2>\r\n</header>\r\n<section class=\"summary\" contenteditable=\"true\">\r\n   	"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Summary", options) : helperMissing.call(depth0, "getValue", depth0, "Summary", options)))
    + "\r\n</section>\r\n<footer>\r\n  <h3 class=\"icon-clock\">";
  stack1 = (helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "  <strong class=\"icon-tag\">"
    + escapeExpression((helper = helpers.regexField || (depth0 && depth0.regexField),options={hash:{},data:data},helper ? helper.call(depth0, "customTagsRgx", "Tags", depth0, options) : helperMissing.call(depth0, "regexField", "customTagsRgx", "Tags", depth0, options)))
    + "</strong></h3>\r\n</footer>\r\n  \r\n</li>\r\n";
  return buffer;
  });
templates['single-issue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "<strong class=\"icon-clock\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options)))
    + "</strong>";
  return buffer;
  }

  buffer += "<li id=\"card"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "ID", options) : helperMissing.call(depth0, "getValue", depth0, "ID", options)))
    + "\" data-mantis-id=\""
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "ID", options) : helperMissing.call(depth0, "getValue", depth0, "ID", options)))
    + "\" data-summary-rgx=\""
    + escapeExpression((helper = helpers.regexField || (depth0 && depth0.regexField),options={hash:{},data:data},helper ? helper.call(depth0, "customSummaryRgx", "Summary", depth0, options) : helperMissing.call(depth0, "regexField", "customSummaryRgx", "Summary", depth0, options)))
    + "\" data-priority=\""
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Priority", options) : helperMissing.call(depth0, "getValue", depth0, "Priority", options)))
    + "\" draggable=\"true\">\n	<div class=\"mantisid\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "ID", options) : helperMissing.call(depth0, "getValue", depth0, "ID", options)))
    + "</div>\n	<div class=\"summary\" contenteditable=\"true\">\n		"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Summary", options) : helperMissing.call(depth0, "getValue", depth0, "Summary", options)))
    + "\n	</div>\n	<div class=\"meta\">\n		";
  stack1 = (helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		<strong class=\"right\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Severity", options) : helperMissing.call(depth0, "getValue", depth0, "Severity", options)))
    + "</strong>\n	</div>\n</li>";
  return buffer;
  });
})();