input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A E - B C5 D - F ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(100)
})
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
	
})
