import List from './list'

class Stack () {
  constructor() {
    this.list = new List()
    this.length = 0
  }

  push(value) {
    this.length++
    this.list.push(value)
  }

  pop() {
    if (this.length === 0) return

    this.length--
    this.list.pop()
  }

  peek() {
    return this.list[this.lenth - 1]
  }
}