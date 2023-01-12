radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Ghost)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Skull)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else {
        basic.showIcon(IconNames.Duck)
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(1, 4))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("3584")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(60)
