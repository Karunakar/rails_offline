// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function() {
  if ($.support.localStorage) {
    $(window.applicationCache).bind("error", function() {
      console.log("There was an error when loading the cache manifest.");
    });
    if (!localStorage["pendingItems"]) {
      localStorage["pendingItems"] = JSON.stringify([]);
    }
    $.retrieveJSON("/items.json", function(data) {
      var pendingItems = $.parseJSON(localStorage["pendingItems"]);
      $("#items").html($("#item_template").tmpl(data.concat(pendingItems)));
    });
    $("#new_item").submit(function(e) {
      var pendingItems = $.parseJSON(localStorage["pendingItems"]);
      var item = {"data":$(this).serialize(), "item":{"name":$("#item_name").val()}};
      $("#item_template").tmpl(item).appendTo("#items");
      pendingItems.push(item);
      localStorage["pendingItems"] = JSON.stringify(pendingItems)
      $("#item_name").val("");
      sendPending();
      e.preventDefault();
    });
    function sendPending() {
      if (window.navigator.onLine) {
        var pendingItems = $.parseJSON(localStorage["pendingItems"]);
        if (pendingItems.length > 0) {
          var item = pendingItems[0];
          $.post("/items", item.data, function(data) {
            var pendingItems = $.parseJSON(localStorage["pendingItems"]);
            pendingItems.shift();
            localStorage["pendingItems"] = JSON.stringify(pendingItems)
            setTimeout(sendPending, 100);
          });
        }
      }
    }
    sendPending();
    $(window).bind("online", sendPending);
  } else {
    alert("Try a different browser.");
  }
});
