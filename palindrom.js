function palindrom(str) {
    let s = new stack()
    let reverse = ''
    for(let i=0; i<str.length; i++) {
        s.push(str[i])
    }
    
    while(!s.isEmpty()) {
        reverse += s.pop()
    }
    return `${str} is ${reverse === str ? 'a palindrom' : 'not a palindrom'}`
}

console.log(palindrom('madam'))