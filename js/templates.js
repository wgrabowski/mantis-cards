(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['single-issue'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<li id=\"";
  if (helper = helpers.ID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" issue data-mantis-id=\"";
  if (helper = helpers.ID) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.ID); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-priority=\"";
  if (helper = helpers.Priority) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Priority); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" draggable=\"true\">\n	<div class=\"summary\">\n		";
  if (helper = helpers.Summary) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.Summary); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n	</div>\n	<div class=\"meta\">\n		<strong>Estimated time: "
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Estimated time", options) : helperMissing.call(depth0, "getValue", depth0, "Estimated time", options)))
    + "</strong>\n		<strong class=\"right\">"
    + escapeExpression((helper = helpers.getValue || (depth0 && depth0.getValue),options={hash:{},data:data},helper ? helper.call(depth0, depth0, "Severity", options) : helperMissing.call(depth0, "getValue", depth0, "Severity", options)))
    + "</strong>\n	</div>\n</li>";
  return buffer;
  });
})();