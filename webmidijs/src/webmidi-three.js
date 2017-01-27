// webmidi readme:
// https://github.com/cotejp/webmidi

// setup variables for faders and knobs

var fade1, fade2, fade3, fade4,
    fade5, fade6, fade7, fade8 = undefined

var knob1, knob2, knob3, knob4,
    knob5, knob6, knob7, knob8 = undefined

WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  }

  // Plug in your midi controller. Is it being found in your console?
  console.log("available input", WebMidi.inputs);
  console.log("input", input)

  // Store the controller as your input
  var input = WebMidi.getInputByName("nanoKONTROL SLIDER/KNOB");

  // Listen to control change message on all channels (faders, knobs)
  input.addListener('controlchange', "all",
    function (e) {
      console.log("Received 'controlchange' message.", e);

      // Look at your midi device in the console and find the matching controller number. Plug it in below:

      //fade 1
      if (e.controller.number === 6) {
        fade1 = e.value
        console.log("fade 1:", fade1)
      }

      //fade 2
      if (e.controller.number === 7) {
        fade2 = e.value
        console.log("fade 2: ", fade2)
      }

      //fade 3
      if (e.controller.number === 8) {
        fade3 = e.value
        console.log("fade 3: ", fade3)
      }

      //fade 4
      if (e.controller.number === 4) {
        fade4 = e.value
        console.log("fade 4: ", fade4)
      }

      //fade 5
      if (e.controller.number === 51) {
        fade5 = e.value
        console.log("fade5: ", fade5)
      }

      //fade 6
      if (e.controller.number === 52) {
        console.log("fade 6: ", fade6)
        fade6 = e.value
      }

      //fade 7
      if (e.controller.number === 81) {
        console.log("fade 7: ", fade7)
        fade7 = e.value
      }

      //fade 8
      if (e.controller.number === 0) {
        console.log("fade 8: ", fade8)
        fade8 = e.value
      }

      /////////// knobs
    }
  )
})
