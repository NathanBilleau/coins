{
    const stack = 50
    if (stack > 1) {
        const first = (stack - 1) % 6 || 5
        console.log(`alti plays ${first} and wins`)
    }
    else {
        console.log(`sophie wins`)
    }
}