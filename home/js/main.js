// // ZeroClipboard.config({swfPath: "javascripts/zeroclipboard/dist/ZeroClipboard.swf"});  $(document).ready(function() {

$(document).ready(function() {

  var clip = new ZeroClipboard($("#target-to-copy"), {
      moviePath: "home/js/zeroclipboard/ZeroClipboard.swf",
      debug: false
  });

  clip.on("ready", function() {
    debugstr("Flash movie loaded and ready.");

    this.on("aftercopy", function(event) {
      debugstr("Copied text to clipboard: " + event.data["text/plain"]);
    });
  });

  clip.on("error", function(event) {
    $(".demo-area").hide();
    debugstr('error[name="' + event.name + '"]: ' + event.message);
    ZeroClipboard.destroy();
  });

  // jquery stuff (optional)
  function debugstr(text) {
    $("#d_debug").append($("<p>").text(text));
  }

});

// $("textarea").keydown(function(e) {
//     if(e.keyCode === 9) { // tab was pressed
//         // get caret position/selection
//         var start = this.selectionStart;
//         var end = this.selectionEnd;
//         var $this = $(this);
//         var value = $this.val();
//         // set textarea value to: text before caret + tab + text after caret
//         $this.val(value.substring(0, start)
//                     + "\t"
//                     + value.substring(end));
//         // put caret at right position again (add one for the tab)
//         this.selectionStart = this.selectionEnd = start + 1;
//         // prevent the focus lose
//         e.preventDefault();
//     }
// });

// main.js
var client = new ZeroClipboard( document.getElementById("copy-button") );

client.on( "ready", function( readyEvent ) {
  // alert( "ZeroClipboard SWF is ready!" );

  client.on( "aftercopy", function( event ) {
    // `this` === `client`
    // `event.target` === the element that was clicked
    event.target.style.display = "none";
    alert("Copied text to clipboard: " + event.data["text/plain"] );
  } );
} );