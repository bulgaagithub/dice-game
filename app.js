// Тоглоомын бүх газар ашиглагдах глобаль хувьсагчдыг энд зарлая
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Аль тоглогч шоо шидэх вэ гэдгийг энд хадгална.
var activePlayer;
// хоёр тоглогчийн цуглуулсан оноонууд
var scores;
// Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо.
var roundScore;
// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалья
var diceDom = document.querySelector(".dice");

// Тоглоомыг эхлүүлнэ.
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ.
function initGame() {
  // Тоглоом эхэллээ гэдэг төлөвт оруулна.
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;
  // Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;

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

  diceDom.style.display = "none";

  // Тоглогчдийн нэрийг эргүүлж гаргах
  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  //
  if (isNewGame) {
    // Шоо аль талаараа буусан бэ гэдгийг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
      switchToNextPlayer();
    }
  } else {
    alert("Тоглоом дууссан байна. Шинээр эхлүүлнэ үү.");
  }
});

// global object ni function дотор гадна бүгдэд харагдана.

// HOLD товчийг ажиллагаанд оруулах
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    // Уг тоглогчийн цуглуулсан ээлжийн оноог глобаль оноо нь дээр нь нэмж өгнө.
    scores[activePlayer] += roundScore;
    // Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // Уг тоглогч хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
    if (scores[activePlayer] >= 200) {
      // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
      // Тоглоомыг дууссан төлөвт оруулна.
      isNewGame = false;
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
  } else {
    alert("Тоглоом дууссан байна. Шинээр эхлүүлнэ үү.");
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

// New Game буюу Шинэ тоглоом эхлүүлэх товчний эвент листенер
document.querySelector(".btn-new").addEventListener("click", initGame);
