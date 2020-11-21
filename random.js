const facts = [
    "Favorite food is Japanese food, especially salmon🍣",
    "First time coding was in year 6, trying to make a minecraft mod🎮",
    "Young Creator Camp 2 participant✨",
    "determined to be a Full Stack Web Developer💻 and a Game Developer🕹",
    "Passed KMUTT computer engineering admission",
    "Free time activities: Gaming🎮 Reading📖 Baking🍪 Drawing✏",
    "Favorite subjects are computer, physics, English",
    "Have been to England and Romania for exchange programmes",
    "is the KMS student president 2020",
    "Has experience coding Line bot and Discord bot📱",
    "Started writing novels in English since year 6",
    "Favorite YT channels: CS, TryGuys, BA"
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