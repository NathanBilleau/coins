let stack = 1

class Player {
    name: string

    constructor(name: string) {
        this.name = name
    }

    play(coins: number): void {
        const maxCoins = stack

        if (maxCoins !== 0) {
            const takingCoins = coins > maxCoins ? 1 : coins
            stack -= takingCoins
            console.log(`${this.name} takes ${takingCoins} 🪙`)
            console.log(`${stack} 🪙 left`)
            console.log(`---`)
        }

        if (stack > 0) {
            winner = this
        }
    }
}

const alti = new Player('Alti')
const sophie = new Player('Sophie')
let winner = alti

do {
    if (stack >= 7 && stack <= 12) {
        alti.play(stack - 7)
    }
    else if (stack < 7) {
        alti.play(stack - 1)
    }
    else {
        alti.play(5)
    }

    sophie.play(Math.floor(Math.random() * 5 + 1))
} while (stack > 0)

console.log(`${winner.name} won!`)