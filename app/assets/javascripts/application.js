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
    if ($.support.localStorage) {
    $(window.applicationCache).bind("error", function() {
      console.log("There was an error when loading the cache manifest.");
    });




    $.retrieveJSON("/items.json", function(data) {
        //alert(data);
        $("#items").html($("#item_template").tmpl([{"item":{"created_at":"2011-12-09T10:24:01Z","id":1,"title":"wer","updated_at":"2011-12-09T10:24:01Z"}},{"item":{"created_at":"2011-12-09T10:24:03Z","id":2,"title":"werr","updated_at":"2011-12-09T10:24:03Z"}},{"item":{"created_at":"2011-12-09T10:24:05Z","id":3,"title":"rwer","updated_at":"2011-12-09T10:24:05Z"}},{"item":{"created_at":"2011-12-09T10:24:07Z","id":4,"title":"rewwww","updated_at":"2011-12-09T10:24:07Z"}}]));
      //var pendingItems = $.parseJSON(localStorage["pendingItems"]);
      //$("#items").html($("#item_template").tmpl(data.concat(pendingItems)));
        //$("#items").html($("#item_template").tmpl([{"item":{"created_at":"2011-12-09T10:24:01Z","id":1,"name":"wer","updated_at":"2011-12-09T10:24:01Z"}},{"item":{"created_at":"2011-12-09T10:24:03Z","id":2,"name":"werr","updated_at":"2011-12-09T10:24:03Z"}},{"item":{"created_at":"2011-12-09T10:24:05Z","id":3,"name":"rwer","updated_at":"2011-12-09T10:24:05Z"}},{"item":{"created_at":"2011-12-09T10:24:07Z","id":4,"name":"rewwww","updated_at":"2011-12-09T10:24:07Z"}}]));

    });


    //$("#items").html($("#item_template").tmpl({"item":{"title":"milk"}}));
        //$("#items").html($("#item_template").tmpl({"item":[{"title":"milk" },{"title":"curd"}]));
//        alert("it supports");
         }
    else
        {
         alert("it wont supports");
        }

})