class HashTable {
  constructor() {
    this.memory = []
  }

  hashKey(key) {
    let hash = '';

    for (let index = 0; index < key.length; index++) {

      // Oh, shiii!@#^&!T@&#..
      let code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;

    }

    return hash;
  }

  get(key) {
    let address = this.hashKey(key)

    return this.memory[address]
  }

  remove(key) {
    let address = this.hashKey(key)

    if (this.memory[address]) {
      delete this.memory[address]
    }
  }
}