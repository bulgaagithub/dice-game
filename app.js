// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шоо аль талаараа буусан бэ гэдгийг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// Dom oos id gaar ni elementiig olood ternii utgii update hiine.
// Dom iin neg object butsaj irne.

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>"; // symantic tag
// text content дотор html бичих боломжгүй.

// html бичмээр байвал арай өөр property дээр бичнэ.
// innerHTML

// Програм эхлэх бэлтгэл
document.getElementById("score-0").textContent = 0; // илүү хурдтай ажилладаг. id хайж байгаа тохиолдолд энэ функцийг ашиглана.
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // Шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";
  // alert("Шоог шидлээ: " + diceNumber);

  // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ. Тоглогчийн ээлжийн оноог өөрчилнө.

  if (diceNumber !== 1) {
    // 1 -ээс ялгаатай тоо буулаа.
    roundScore += diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
    switchToNextPlayer();
  }
});

// global object ni function дотор гадна бүгдэд харагдана.

// HOLD товчийг ажиллагаанд оруулах
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноо нь дээр нь нэмж өгнө.
  scores[activePlayer] += roundScore;
  // Дэлгэц дээр оноог нь өөрчилнө.
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
  if (scores[activePlayer] >= 10) {
    // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.toggle("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчийн ээлжийг солино.
    switchToNextPlayer();
  }
});

// бид нар ямар нэг кодоо хуулж ашиглахад ирээдүйд maintaince хийхэд хэцүү болоод байдаг.
// системээ өөрчилж сайжруулах үед гэсэн үг

// Энэ функц нь тоглох ээлжийг дараачийн тоглогч руу шилжүүлнэ.
function switchToNextPlayer() {
  // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Хэрвээ идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг нэг болго.
  // Үгүй бол идэвхтэй тоглогчийг 0 болго.

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // Улаан цэгийг шилжүүлэх кодыг хийнэ.
  // toggle функц нь энэ тагийн класс дотор тухайн класс байвал устгана байхгүй бол нэмнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // Шоог түр алга болгоно.
  diceDom.style.display = "none";
}
