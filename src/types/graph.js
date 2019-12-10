class Graph {
  constructor() {
    this.nodes = []
  }

  addNode(value) {
    this.nodes.push({
      value,
      lines: []
    })
  }

  find(value) {
    return this.nodes.find((node) => node.value === value)
  }

  addLine(startValue, endValue) {
    let startNode = this.find(startValue)
    let endNode = this.find(endValue)

    if (!startNode || !endNode) {
      throw new Error('Both nodes must exist')
    }

    startNode.lines.push(endNode)
  }

}

export default Graph