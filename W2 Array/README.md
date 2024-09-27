# Array Data Structure and Algorithm การจัดเก็บข้อมูลแบบอาร์เรย์
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
  <style>
    text { font-family: Arial, sans-serif; font-size: 14px; }
    .title { font-size: 18px; font-weight: bold; }
    .function-title { font-size: 16px; font-weight: bold; }
  </style>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" class="title">การทำงานของฟังก์ชันต่างๆ ใน MyArray</text>

  <!-- Push Function -->
  <text x="50" y="70" class="function-title">1. ฟังก์ชัน push()</text>
  <rect x="50" y="80" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="100">0: 'A'</text>
  <text x="60" y="120">1: 'B'</text>
  <text x="150" y="100">2: 'C'</text>
  <path d="M360 110 L380 110" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <rect x="390" y="80" width="360" height="60" fill="none" stroke="black"/>
  <text x="400" y="100">0: 'A'</text>
  <text x="400" y="120">1: 'B'</text>
  <text x="490" y="100">2: 'C'</text>
  <text x="490" y="120">3: 'D'</text>
  <text x="50" y="160">เพิ่ม 'D' ต่อท้าย Array และเพิ่มค่า length</text>

  <!-- Pop Function -->
  <text x="50" y="200" class="function-title">2. ฟังก์ชัน pop()</text>
  <rect x="50" y="210" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="230">0: 'A'</text>
  <text x="60" y="250">1: 'B'</text>
  <text x="150" y="230">2: 'C'</text>
  <text x="150" y="250">3: 'D'</text>
  <path d="M360 240 L380 240" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <rect x="390" y="210" width="300" height="60" fill="none" stroke="black"/>
  <text x="400" y="230">0: 'A'</text>
  <text x="400" y="250">1: 'B'</text>
  <text x="490" y="230">2: 'C'</text>
  <text x="50" y="290">ลบ 'D' ออกจากท้าย Array และลดค่า length</text>

  <!-- Delete Function -->
  <text x="50" y="330" class="function-title">3. ฟังก์ชัน delete()</text>
  <rect x="50" y="340" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="360">0: 'A'</text>
  <text x="60" y="380">1: 'B'</text>
  <text x="150" y="360">2: 'C'</text>
  <text x="150" y="380">3: 'D'</text>
  <path d="M360 370 L380 370" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <rect x="390" y="340" width="300" height="60" fill="none" stroke="black"/>
  <text x="400" y="360">0: 'A'</text>
  <text x="400" y="380">2: 'C'</text>
  <text x="490" y="360">3: 'D'</text>
  <text x="50" y="420">ลบ 'B' ที่ index 1 และเลื่อนตำแหน่งที่เหลือ</text>

  <!-- Shift Function -->
  <text x="50" y="460" class="function-title">4. ฟังก์ชัน shift()</text>
  <rect x="50" y="470" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="490">0: 'A'</text>
  <text x="60" y="510">1: 'B'</text>
  <text x="150" y="490">2: 'C'</text>
  <text x="150" y="510">3: 'D'</text>
  <path d="M360 500 L380 500" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <rect x="390" y="470" width="300" height="60" fill="none" stroke="black"/>
  <text x="400" y="490">0: 'A'</text>
  <text x="400" y="510">1: 'C'</text>
  <text x="490" y="490">2: 'D'</text>
  <text x="50" y="550">เลื่อนตำแหน่งหลังจาก index 1 ไปทางซ้าย</text>

  <!-- Insert Function -->
  <text x="50" y="590" class="function-title">5. ฟังก์ชัน insert()</text>
  <rect x="50" y="600" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="620">0: 'A'</text>
  <text x="60" y="640">1: 'B'</text>
  <text x="150" y="620">2: 'C'</text>
  <path d="M360 630 L380 630" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <rect x="390" y="600" width="300" height="60" fill="none" stroke="black"/>
  <text x="400" y="620">0: 'A'</text>
  <text x="400" y="640">1: 'X'</text>
  <text x="490" y="620">2: 'B'</text>
  <text x="490" y="640">3: 'C'</text>
  <text x="50" y="680">แทรก 'X' ที่ index 1 และเลื่อนตำแหน่งที่เหลือ</text>

  <!-- Get Function -->
  <text x="50" y="720" class="function-title">6. ฟังก์ชัน get()</text>
  <rect x="50" y="730" width="300" height="60" fill="none" stroke="black"/>
  <text x="60" y="750">0: 'A'</text>
  <text x="60" y="770">1: 'B'</text>
  <text x="150" y="750">2: 'C'</text>
  <path d="M360 760 L380 760" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
  <text x="400" y="765">return 'B'</text>
  <text x="50" y="810">ดึงค่าที่ index 1 คือ 'B'</text>

  <!-- Arrowhead marker -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" />
    </marker>
  </defs>
</svg>
