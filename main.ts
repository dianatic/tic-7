let X: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    led.stopAnimation()
})
input.onButtonPressed(Button.B, function () {
    X = game.createSprite(1, 2)
})
