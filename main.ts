input.onPinPressed(TouchPin.P0, function () {
    basic.showString(name)
    basic.showString(name)
    basic.showString(name)
    name = ""
    basic.showString("" + (alphabet[current_character_index]))
})
input.onButtonPressed(Button.A, function () {
    if (current_character_index < 26) {
        current_character_index += 1
    } else {
        current_character_index = 0
    }
    basic.showString(alphabet.charAt(current_character_index))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.pause(100)
    name = "" + name + alphabet.charAt(current_character_index)
    current_character_index = 0
    basic.showString("" + (alphabet[current_character_index]))
})
let alphabet = ""
let name = ""
let current_character_index = 0
current_character_index = 0
name = ""
alphabet = "abcdefghijklmnopqrstuvwxyz"
basic.showString(alphabet.charAt(current_character_index))
