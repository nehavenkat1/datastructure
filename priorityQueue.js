function PriorityQueue() {
    let items = []
    
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }

    this.enqueue = function(element, priority) {
        let queueElement = new QueueElement(element, priority)
        let added = false
        for(let i=0; i<items.length; i++) {
            if(queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true
                break
            }
        }
        if(!added) {
            items.push(queueElement)
        }
    }

    this.print = function() {
        for(let i=0; i<items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`)
        }
    }

}

let x = new PriorityQueue() 
x.enqueue('A', 1)
x.enqueue('B', 2)
x.enqueue('c', 3)
x.print()
x.enqueue('AA', 1)
x.print()
x.enqueue('BB', 2)
x.print()