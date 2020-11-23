input.onButtonPressed(Button.A, function () {
    current_character_index += 1
    basic.showString("" + (list[current_character_index]))
})
input.onButtonPressed(Button.B, function () {
    basic.showString(name)
    basic.clearScreen()
    name = "" + name + list[current_character_index]
    current_character_index = 0
    basic.showString("" + (list[current_character_index]))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(name)
    basic.showString(name)
    basic.showString(name)
    name = ""
    basic.showString("" + (list[current_character_index]))
})
let list: string[] = []
let name = ""
let current_character_index = 0
current_character_index = 0
name = ""
list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
basic.showString("" + (list[current_character_index]))
basic.forever(function () {
	
})
