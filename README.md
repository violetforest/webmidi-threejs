# webmidi.js + three.js
Webmidi-ready Three JS examples for VJing in the browser with midi controllers.
Listens to control change message on all channels, including but not limited to knobs and faders.

This repository comes with:
* webmidi.js
* the entire Three.js library with native examples to start VJing in the browser right away
* custom webmidi.js script to pull values from a connected midi controller and store them as variables

## Step 1: Configure webmidi.js.
1. Install webmidi. Instructions here https://github.com/cotejp/webmidi#installation
2. To use WebMidi.js on Safari, Firefox and Internet Explorer, you will first need to install Jazz-Plugin. Instructions here: https://github.com/cotejp/webmidi#using-webmidijs-with-the-jazz-plugin

## Step 2: Add webmidi.js to three.js
1. Add a webmidi and webmidi-three.js `<script>` reference at the top of any three.js example of your choice.
`<script src="src/js/webmidi.js"></script>
<script src="src/js/webmidi-three.js"></script>`

## Step 3: Assign your midi controller as the input.
1. Plug in your midi controller.
2. Open your example in a browser.
3. Open the browser's console.
![available input in console](/readme-images/available-input.png "available input in console")
4. Copy the name of the midi controller and assign it to the `input` variable in webmidi-three.js:

`var input = WebMidi.getInputByName("nanoKONTROL SLIDER/KNOB");`

## Step 4: Store knob/faders as variables.
1. Turn a knob or slide a fader while the console is still open.
2. Take note of the controller number:
![controller number](/readme-images/controller-number.png "controller number")
3. Assign that number as your fade1 or knob1 variable.
`if (e.controller.number === 6) {
    fade1 = e.value
    console.log("fade 1:", fade1)
  }`

## Step 3: Use that variable in the rest of your program.
1. Add the script to any three.js sketch
2. Use that variable

## Step 5: Open the example in a browser and turn some knobs.


