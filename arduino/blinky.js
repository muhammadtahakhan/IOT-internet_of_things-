var j5 = require("johnny-five");
var board = new j5.Board({
  port: "COM30"
});




var LEDPIN = 13;
var OUTPUT = 1;

board.on("ready", function(){
  var led = new j5.Led(LEDPIN);
//   led.strobe();
// led.blink(5000);
  led.fadeIn();

  // Toggle the led after 5 seconds (shown in ms)
  this.wait(5000, function() {
    led.fadeOut();
  });
  
  
});