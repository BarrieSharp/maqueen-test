// Using the speaker
input.onButtonPressed(Button.A, function () {
    Play_Melody = true
    while (Play_Melody) {
        music.playMelody("A G A F G E F D ", 200)
    }
})
input.onGesture(Gesture.Shake, function () {
    Play_Melody = false
    music.stopAllSounds()
})
// Display IR messages
maqueen.IR_callbackUser(function (IRmessage) {
    basic.showNumber(IRmessage)
})
let BLUE = 0
let GREEN = 0
let RED = 0
let Play_Melody = false
let RGB_Light = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.showLeds(`
    . # # # .
    # . # . #
    # . # . #
    # . # . #
    . # # # .
    `)
// Colour changing ambient LEDs
basic.forever(function () {
    RED = 0
    GREEN = 0
    BLUE = 255
    for (let index = 0; index < 255; index++) {
        RED += 1
        BLUE += -1
        basic.pause(1)
        RGB_Light.showColor(neopixel.rgb(RED, GREEN, BLUE))
    }
    for (let index = 0; index < 255; index++) {
        GREEN += 1
        RED += -1
        basic.pause(1)
        RGB_Light.showColor(neopixel.rgb(RED, GREEN, BLUE))
    }
    for (let index = 0; index < 255; index++) {
        BLUE += 1
        GREEN += -1
        basic.pause(1)
        RGB_Light.showColor(neopixel.rgb(RED, GREEN, BLUE))
    }
})
// Display light level
basic.forever(function () {
    basic.showNumber(input.lightLevel())
})
