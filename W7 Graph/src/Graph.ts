class Vertex {
    [ID: string]: string[] //Index Signatures
}

class Graph {
    adjacentList: Vertex = {} // สร้าง object ที่เป็น key-value pair โดย key เป็น string และ value เป็น array ของ string
    numberOfNodes: number = 0 // จำนวน node ทั้งหมดใน graph
 
    addVertex(node: string) { // เพิ่ม node ใหม่เข้าไปใน graph
        this.numberOfNodes++ // เพิ่มจำนวน node ทั้งหมดใน graph
        this.adjacentList[node] = [] // สร้าง key ใหม่ใน object โดย key คือ node ที่เพิ่มเข้ามา และ value เป็น array ว่าง
    }

    //undirected graph
    addEdge(node1: string, node2: string) { // เพิ่ม edge ระหว่าง node 2 ตัว
        this.adjacentList[node1].push(node2) // เพิ่ม node2 เข้าไปใน array ของ node1
        this.adjacentList[node2].push(node1) // เพิ่ม node1 เข้าไปใน array ของ node2
    }

    showConnections() { // แสดง node และ edge ทั้งหมดใน graph
        const allNodes = Object.keys(this.adjacentList) // ดึง key ทั้งหมดของ object มาเก็บไว้ในตัวแปร allNodes
        for (const node of allNodes) { // วนลูปเพื่อแสดง node และ edge ทั้งหมดใน graph
            const edges = this.adjacentList[node as keyof object] // ดึง value ของ key นั้น ๆ มาเก็บไว้ในตัวแปร edges
            let connections = '' // สร้างตัวแปร connections เพื่อเก็บ edge ทั้งหมดของ node นั้น ๆ
            for (const edge of edges) { // วนลูปเพื่อเก็บ edge ทั้งหมดของ node นั้น ๆ
                connections += edge + ' ' // เก็บ edge ลงในตัวแปร connections
            }
            console.log(node + ' --> ' + connections) // แสดง node และ edge ทั้งหมดของ node นั้น ๆ
        }
    }
}

const g = new Graph() // สร้าง object จาก class Graph
g.addVertex('0') 
g.addVertex('1') 
g.addVertex('2')
g.addVertex('3')
g.addEdge('0', '2')
g.addEdge('2', '1')
g.addEdge('2', '3')
g.addEdge('3', '1')
g.showConnections()