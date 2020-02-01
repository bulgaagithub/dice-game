// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогч 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шоо аль талаараа буусан бэ гэдгийг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// Dom oos id gaar ni elementiig olood ternii utgii update hiine.
// Dom iin neg object butsaj irne.

// document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!</em>"; // symantic tag
// text content дотор html бичих боломжгүй.

// html бичмээр байвал арай өөр property дээр бичнэ.
// innerHTML

// Програм эхлэх бэлтгэл
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

// global object ni function дотор гадна бүгдэд харагдана.
console.log("Шоо: ", dice);
