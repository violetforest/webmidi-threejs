# webmidi.js + three.js
Webmidi-ready Three JS examples for VJing in the browser with midi controllers.
Listens to control change message on all channels, including but not limited to knobs and faders.

This repository comes with:
* webmidi.js
* the entire Three.js library with native examples to start VJing right away
* custom webmidi.js script to pull values from a connected midi controller and store them as variables

## Step 1: Configure webmidi.js.
1. To use WebMidi.js on Safari, Firefox and Internet Explorer, you will first need to install Jazz-Plugin. Instructions here: https://github.com/cotejp/webmidi#using-webmidijs-with-the-jazz-plugin

2. Install webmidi. Instructions here https://github.com/cotejp/webmidi#installation

## Step 2: Find the controllers you want to use and store them as a variable.
1. Plug in your midi controller and assign it as your input.
2. Find the knob or fader's controller number in the console.
3. Assign that controller number

## Step 3: Use that variable in the rest of your program.
1. Add the script to any three.js sketch
2. Use that variable

## Step 4: Open the example in a browser and turn some knobs.


