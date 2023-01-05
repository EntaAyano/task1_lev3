input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    カウンター += -1
    led.plot(カウンター, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    カウンター += 1
    led.plot(カウンター, 2)
})
let カウンター = 0
カウンター = 2
led.plot(カウンター, 2)
