{
    const stack = 50
    const min = 1
    const max = 5
    if (stack > 1 && !((min + max + 1) === stack)) {
        const first = (stack - 1) % (min + max) || max
        console.log(`alti plays ${first} and wins`)
    }
    else {
        console.log(`sophie wins`)
    }
}