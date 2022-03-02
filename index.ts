let stack = 1

class Player {
    name: string

    constructor(name: string) {
        this.name = name
    }

    play(coins: number): void {
        const maxCoins = stack

        coins = coins > 0 ? coins : 1

        if (maxCoins !== 0) {
            const takingCoins = coins > maxCoins ? 1 : coins
            stack -= takingCoins
            console.log(`${this.name} takes ${takingCoins} 🪙`)
            console.log(`${stack} 🪙 left`)
            console.log(`---`)
            
            if (stack === 0) {
                looser = this
            }
        }
    }
}

const alti = new Player('Alti')
const sophie = new Player('Sophie')
let looser = undefined

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

// @ts-ignore
console.log(`${looser?.name} lost!`)