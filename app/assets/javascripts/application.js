//= require jquery
//= require jquery_ujs
//= require medium-editor
//= require iacquire-medium-editor-insert-plugin
//= require slick
//= require bigSlide
//= require headroom.js
//= require_tree .

$(document).ready(function() {
  $(".header").headroom({});
});

var editor = new MediumEditor('.editable');
$('.editable').bind('input propertychange', function() {
  $("#post_" + $(this).attr("data-field-id")).val($(this).html());
});

$(function () {
  $(".editable").mediumInsert({
    editor: editor,
    addons: {
      images: {
        imagesUploadScript: "/images/post_image"
      }
    }
  })
});

$(document).ready(function(){
  $('.slider').slick({
  });
});

//$(document).ready(function() {
  //if($('#slidr-id').length > 0) {
    //var s = slidr.create('slidr-id', {
      //transition: 'fade',
      //keyboard: true,
      //touch: true
    //});
    //s.add('h', ['one', 'two', 'one']);
    //s.start();
  //}
//});
