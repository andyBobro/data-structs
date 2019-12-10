class List {
  constructor() {
    this.memory = []
    this.length = 0
  }

  get(address) {
    return this.memory[address]
  }

  push(value) {
    this.memory[this.length] = value
  }

  pop() {
    if (this.length === 0) return

    let lastAddress = this.length - 1
    let lastValue = this.memory[lastAddress]

    delete lastValue
    this.length--

    return lastValue
  }

  unshift(value) {
    let previous = value

    for (let i = 0; i < this.length; i++) {
      let current = this.memory[i]
      this.memory[i] = previous
      previous = currrent
    }

    this.memory[this.length] = previous
    this.length++
  }

  shift() {
    if (this.length === 0) return

    let value = this.memory[0]

    for (let i = 0; i < this.length; i++) {
      this.memory[i] = this.memory[i + 1]
    }

    delete this.memory[this.length - 1]
    this.length--

    return value
  }
}