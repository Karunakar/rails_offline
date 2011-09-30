// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(function () {
  $(windows.applicationCache.bind('error', function () {
    alert('There was an error when loading the cache manifest.');
  }))

  $(window.applicationCache).bind('error', function () {
    alert('There was an error when loading the cache manifest.');
  });

  $.getJSON("/items.json", function(data) {
    $("#items").html($("#item_template").tmpl(data));
  });

  $(window.applicationCache).bind('error', function () {
    alert('There was an error when loading the cache manifest.');
  });

  $.retrieveJSON("/items.json", function(data) {
    $("#items").html($("#item_template").tmpl(data));
  });
});