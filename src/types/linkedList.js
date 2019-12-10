class linkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  get(position) {
    if (position > this.length) {
      throw new Error('Your position is without of scope')
    }

    let current = this.head

    for (let c = 0; c < position; c++) {
      current = current.next
    }

    return current
  }

  add(value, position) {
    let node = {
      value,
      next: null
    }

    console.log(value, position);


    if (position === 0) {
      node.next = this.head
      this.head = node
    } else {
      console.log(value, position);
      let prev = this.get(position - 1)
      let next = prev.next

      node.next = next
      prev.next = node
    }

    this.length++
  }

  remove(position) {
    if (position === 0) {
      this.head = this.head.next
    } else {
      let prev = this.get(position - 1)

      prev.next = prev.next.next
    }

    this.length--
  }
}

export default linkedList