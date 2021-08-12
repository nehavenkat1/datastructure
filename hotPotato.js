function HotPotato(list, num) {
    let queue = new Queue() 
    for(let i=0; i<list.length; i++) {
        queue.enqueue(list[i])
    }
    let eliminated = ''
    
    while(queue.size() > 1) {
        for(let i=0; i<num; i++) {
            queue.enqueue(queue.dequeue())
        }
        eliminated = queue.dequeue()
        console.log(eliminated + ' was eliminated.')
    }
    return queue.dequeue()
}
let names = ['a', 'b', 'c', 'd', 'e']
let winner = HotPotato(names, 6)
console.log('The winner is ', winner)

