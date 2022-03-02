// 1
let c = 0
let stack = 120
c++

class Player {
    name: string

    constructor(name: string) {
        this.name = name
        c++
    }

    play(coins: number): void { // 12
        // 1
        const maxCoins = stack
        c++

        // 1 + 1
        coins = coins > 0 ? coins : 1
        c += 2

        // 2
        c += 2
        if (maxCoins !== 0) {
            // 2 + 1
            c += 2 + 1
            const takingCoins = coins > maxCoins ? 1 : coins
            // 1 + 1
            c += 1 + 1
            stack -= takingCoins
            // console.log(`${this.name} takes ${takingCoins} 🪙`)
            // console.log(`${stack} 🪙 left`)
            // console.log(`---`)

            // 2
            c += 2
            if (stack === 0) {
                // 1
                c++
                looser = this
            }
        }
    }
}

// 5
c += 5
const alti = new Player('Alti')
// 5
c += 5
const sophie = new Player('Sophie')
// 1
c++
let looser = undefined

do {
    // 4
    if (stack >= 7 && stack <= 12) {
        c += 2
        // (3 + 1 + 12) * x
        c += 3 + 1 + 12
        alti.play(stack - 7)
    }
    // 2
    else if (stack < 7) {
        c += 2
        // (3 + 1 + 12) * x
        c += 3 + 1 + 12
        alti.play(stack - 1)
    }
    else {
        // (3 + 12) * x
        c += 3 + 12
        alti.play(5)
    }

    // (3 + 1 + 12 + 3 + 3) * x
    c += 3 + 1 + 12 + 3 + 3
    sophie.play(Math.floor(Math.random() * 5 + 1))

    c += 2
} while (stack > 0) // 2x

// @ts-ignore
console.log(`${looser?.name} lost!`)

console.log(`${c} complexity`)