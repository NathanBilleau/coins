export class Player {
    _name: string

    constructor(name: string) {
        this._name = name
    }

    play(coins: number): void {
        const maxCoins = stack

        if (maxCoins !== 0) {
            const takingCoins = coins > maxCoins ? 1 : coins
            stack -= takingCoins
            console.log(`${this._name} takes ${takingCoins} coins`)
            console.log(`${stack} coins left`)
            console.log(`---`)
        }

        if (stack > 0) {
            winner = this
        }
    }

    getName() {
        return this._name
    }
}