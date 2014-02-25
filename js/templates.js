(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['single-issue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "Est. time: "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options)));
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
    + "\" draggable=\"true\">\n	<div class=\"summary\" contenteditable=\"true\">\n		"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Summary", options) : helperMissing.call(depth0, "getValue", depth0, "Summary", options)))
    + "\n	</div>\n	<div class=\"meta\">\n		<strong>";
  stack1 = (helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options));
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</strong>\n		<strong class=\"right\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Severity", options) : helperMissing.call(depth0, "getValue", depth0, "Severity", options)))
    + "</strong>\n	</div>\n</li>";
  return buffer;
  });
})();