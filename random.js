const facts = [
    "ชอบทานอาหารญี่ปุ่นโดยเฉพาะปลาแซลมอน🍣",
    "ประสบการณ์การเขียนโค้ดครั้งแรกคือเขียนม็อดมายคราฟตอนประถมหก🎮",
    "เป็นเด็กค่าย Young Creator Camp 2✨",
    "ตั้งใจที่จะเป็น Full Stack Web Developer💻 และ Game Developer🕹",
    "ติดวิศวกรรมคอมพิวเตอร์นานาชาติ มหาวิทยาลัยพระจอมเกล้าธนบุรีแล้ว",
    "กิจกรรมยามว่างคือเล่นเกม🎮 อ่านหนังสือ📖 ทำขนม🍪 วาดรูป✏",
    "วิชาที่ชอบคือคอมพิวเตอร์ ฟิสิกส์ ภาษาอังกฤษ",
    "เคยไปแลกเปลี่ยนที่ประเทศอังกฤษและโรมาเนีย",
    "เป็นประธานนักเรียนของโรงเรียน ปีการศึกษา 2563",
    "เคยลองเขียนไลน์บอทและดิสคอร์ดบอทเล็กน้อย📱",
]

function randomFacts() {
    document.getElementById('modal').style.display = 'flex'
    let i = Math.floor(Math.random() * facts.length)
    document.getElementById('fact').innerText = facts[i]
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
  }