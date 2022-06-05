input.onButtonPressed(Button.A, function () {
    if (!(MODE == "OVER")) {
        if (MODE == "PLAY") {
            MODE = "VIEW"
        } else if (MODE == "VIEW") {
            IDX = X + Y * 3
            basic.showString("" + (BOARD[IDX]))
            if (BOARD[IDX] == "-") {
                MODE = "PLAY"
            } else {
                MODE = "VIEW"
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (MODE == "PLAY") {
        BOARD[IDX] = PLAYER
        if (PLAYER == "*") {
            PLAYER = "+"
        } else {
            PLAYER = "*"
        }
        if (BOARD.indexOf("-") == -1) {
            MODE = "OVER"
        } else {
            MODE = "VIEW"
        }
    }
})
let X2 = 0
let Y = 0
let X = 0
let IDX = 0
let BOARD: string[] = []
let MODE = ""
let PLAYER = ""
PLAYER = "*"
MODE = "VIEW"
BOARD = "---------".split("")
IDX = 4
X = 1
Y = 1
let TL: Image[] = []
TL.push(images.createImage(`
    . . # # #
    . . # . #
    . . # # #
    . . . . .
    . . . . .
    `))
TL.push(images.createImage(`
    . . . . .
    . . # # #
    . . # . #
    . . # # #
    . . . . .
    `))
TL.push(images.createImage(`
    . . . . .
    . . . . .
    . . # # #
    . . # . #
    . . # # #
    `))
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -500) {
        X += -1
    }
    if (input.acceleration(Dimension.X) > 500) {
        X += 1
    }
    if (input.acceleration(Dimension.Y) < -400) {
        Y += -1
    }
    if (input.acceleration(Dimension.Y) > 400) {
        Y += 1
    }
    X = Math.constrain(X, 0, 2)
    X2 = 2 - X
    Y = Math.constrain(Y, 0, 2)
    TL[Y].showImage(X2)
    basic.pause(300)
    basic.clearScreen()
})
