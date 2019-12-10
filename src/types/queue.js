import linkedList from './linkedList'

class Queue {
  constructor() {
    this.list = new linkedList()
    this.length = 0
  }

  enqueue(value) {
    let last = this.list.add(value, this.length - 1)

    last.length++
  }
}