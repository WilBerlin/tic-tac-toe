input.onButtonPressed(Button.A, function () {
    if (!(MODE == "OVER")) {
        if (MODE == "PLAY") {
            MODE = "VIEW"
        } else if (MODE == "VIEW") {
            IDX = X + Y * 3
            basic.showString("" + (BOARD[IDX]))
            basic.pause(150)
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
        chrckWinner()
        if (WINNER != "") {
            MODE = "WIN"
        } else {
            if (BOARD.indexOf("-") == -1) {
                MODE = "OVER"
            } else {
                MODE = "VIEW"
            }
        }
    }
})
function chrckWinner () {
    WINNER = ""
    for (let index = 0; index <= 2; index++) {
        v1 = BOARD[index * 3 + 0]
        v2 = BOARD[index * 3 + 1]
        v3 = BOARD[index * 3 + 2]
        if (v1 == v2 && v1 == v3) {
            WINNER = v1
            break;
        }
    }
    if (WINNER == "") {
        for (let index = 0; index <= 2; index++) {
            v1 = BOARD[index * 1 + 0]
            v2 = BOARD[index * 1 + 3]
            v3 = BOARD[index * 1 + 6]
            if (v1 == v2 && v1 == v3) {
                WINNER = v1
                break;
            }
        }
    }
    if (WINNER == "") {
        v1 = BOARD[0]
        v2 = BOARD[4]
        v3 = BOARD[8]
        if (v1 == v2 && v1 == v3) {
            WINNER = v1
        }
    }
    if (WINNER == "") {
        v1 = BOARD[2]
        v2 = BOARD[4]
        v3 = BOARD[6]
        if (v1 == v2 && v1 == v3) {
            WINNER = v1
        }
    }
}
let X2 = 0
let v3 = ""
let v2 = ""
let v1 = ""
let Y = 0
let X = 0
let IDX = 0
let BOARD: string[] = []
let MODE = ""
let PLAYER = ""
let WINNER = ""
WINNER = ""
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
    if (MODE == "VIEW") {
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
    }
})
