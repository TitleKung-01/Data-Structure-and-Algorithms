class Vertex {
    [ID: string]: string[]
}

class Graph {
    adjacentList: Vertex = {}
    numberOfNodes: number = 0
    matrix: number[][] = [] // เพิ่ม property matrix

    addVertex(node: string) {
        this.numberOfNodes++
        this.adjacentList[node] = []
        
        // เพิ่ม row และ column ใหม่ใน matrix
        this.matrix.push(new Array(this.numberOfNodes).fill(0))
        for (let i = 0; i < this.numberOfNodes - 1; i++) {
            this.matrix[i].push(0)
        }
    }

    addEdge(node1: string, node2: string) {
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
        
        // อัพเดท matrix
        const index1 = Object.keys(this.adjacentList).indexOf(node1)
        const index2 = Object.keys(this.adjacentList).indexOf(node2)
        this.matrix[index1][index2] = 1
        this.matrix[index2][index1] = 1
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList)
        for (const node of allNodes) {
            const edges = this.adjacentList[node]
            let connections = ''
            for (const edge of edges) {
                connections += edge + ' '
            }
            console.log(node + ' --> ' + connections)
        }
    }

    // เพิ่มฟังก์ชันแสดง matrix
    showMatrix() {
        const nodes = Object.keys(this.adjacentList)
        
        // แสดงหัวคอลัมน์
        console.log('  | ' + nodes.join(' '))
        console.log('--+-' + '-'.repeat(nodes.length * 2))
        
        // แสดงแต่ละแถวของ matrix
        for(let i = 0; i < nodes.length; i++) {
            console.log(`${nodes[i]} | ${this.matrix[i].join(' ')}`)
        }
    }
}

// ตัวอย่างการใช้งาน
const g = new Graph()

// เพิ่ม vertices
g.addVertex('1')
g.addVertex('2')
g.addVertex('3')
g.addVertex('4')
g.addVertex('5')

// เพิ่ม edges
g.addEdge('5', '1')
g.addEdge('5', '2')
g.addEdge('5', '3')
g.addEdge('5', '4')

// แสดงผล
console.log("Connections:")
g.showConnections()

console.log("\nAdjacency Matrix:")
g.showMatrix()