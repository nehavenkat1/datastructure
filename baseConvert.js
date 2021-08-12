function baseConvert(num, base) {
    let str = '0123456789ABCDEF'
    let s = new stack()
    let converted = ''
    while(num > 0) {
        s.push(str[num % base])
        num = Math.floor(num / base)
    }
    while(!s.isEmpty()) {
        converted += s.pop()
    }
    return converted
}

console.log(baseConvert(32, 2))