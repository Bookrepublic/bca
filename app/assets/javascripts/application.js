//= require jquery
//= require jquery_ujs
//= require medium-editor
//= require iacquire-medium-editor-insert-plugin
//= require_tree .

var editor = new MediumEditor('.editable');
$('.editable').bind('input propertychange', function() {
  $("#post_" + $(this).attr("data-field-id")).val($(this).html());
});
