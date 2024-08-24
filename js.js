
      
      
      // تعريف كائن التعليقات بشكل عام
      const comments = {
        "مشفى الباب": [],
        "مشفى الفتح": [],
        "مشفى الفارابي": [],
        "مشفى الماجد": [],
      };
      // متغير لتخزين اسم المشفى الحالي
      let currentHospital = "";

      function display_comment(button) {
        document.getElementById("hospital-comment").style.display = "block";
  document.getElementById("results").style.display = "none";
document.getElementById("search").style.display = "none";




        // عرض قسم التعليقات وإخفاء الأقسام الأخرى إذا وجدت
        document.getElementById("hospital-comment").style.display = "block";

        // الحصول على عنصر بطاقة المشفى واسم المشفى
        const hospitalCard = button.parentElement;
        const hospitalName = hospitalCard.getAttribute("data-name");
        currentHospital = hospitalName;

        // تحديث عنوان قسم التعليقات باسم المشفى الحالي
        document.getElementById("hospital-name").innerText = hospitalName;

        // عرض التعليقات الحالية للمشفى
        showme_comment();
      }

      function send() {
        const codeInput = document.getElementById("codes");
        const commentText = codeInput.value.trim();

        if (commentText !== "") {
          // إضافة التعليق إلى قائمة التعليقات الخاصة بالمشفى الحالي
          comments[currentHospital].push(commentText);

          // إعادة تعيين حقل الإدخال
          codeInput.value = "";
          codeInput.style.border = "";

          // تحديث عرض التعليقات
          showme_comment();
        } else {
          codeInput.style.border = "1px solid red";
        }
      }

      function showme_comment() {
        const commentsList = document.getElementById("comments-list");
        // مسح التعليقات السابقة
        commentsList.innerHTML = "";

        // الحصول على التعليقات الخاصة بالمشفى الحالي
        const hospitalComments = comments[currentHospital];

        if (hospitalComments.length === 0) {
          commentsList.innerHTML = "<p>لا توجد تعليقات حتى الآن.</p>";
        } else {
          // إنشاء عناصر HTML لكل تعليق
          hospitalComments.forEach((comment, index) => {
            const commentItem = document.createElement("div");
            commentItem.className = "comment-item";
            commentItem.innerText = comment;
            commentsList.appendChild(commentItem);
          });
        }
      }






      function searchHospital() {
  let searchQuery = document.querySelector("#search input").value.toLowerCase();

  let hospitalCards = document.querySelectorAll(".hospital-card");

  hospitalCards.forEach(function (card) {
    let hospitalName = card.getAttribute("data-name").toLowerCase();
    let hospitalLocation = card.getAttribute("data-location").toLowerCase();

    if (
      hospitalName.includes(searchQuery) ||
      hospitalLocation.includes(searchQuery)
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function viewDetails(button) {
  document.getElementById("results").style.display = "none";
  document.getElementById("search").style.display = "none";

  let hospitalCard = button.parentElement;

  let hospitalName = hospitalCard.querySelector("h2").textContent;
  let hospitalLocation = hospitalCard.getAttribute("data-location");
  let hospitalImage = hospitalCard.querySelector("img").src;

  document.getElementById("details-name").textContent = hospitalName;
  document.getElementById(
    "details-location"
  ).textContent = `الموقع: ${hospitalLocation}`;
  document.getElementById("details-image").src = hospitalImage;

  const doctorsList = {
    "مشفى الباب": [
      { name: "د. نوبليز", specialization: "طب عام" },
      { name: "د.كنتاكي", specialization: "جراحة" },
    ],
    "مشفى الفتح": [],
    "مشفى الفارابي": [],
    "مشفى الماجد": [],
  };

  const doctors = doctorsList[hospitalName] || [];
  const doctorsListElement = document.getElementById("details-doctors");
  doctorsListElement.innerHTML = doctors
    .map((doc) => `<li>${doc.name} - ${doc.specialization}</li>`)
    .join("");

  document.getElementById("hospital-details").style.display = "block";
}

function closeDetails() {
  document.getElementById("hospital-details").style.display = "none";

  document.getElementById("results").style.display = "block";
  document.getElementById("search").style.display = "block";
}

function showSearch() {
  document.getElementById("search").style.display = "block";
  document.getElementById("results").style.display = "block";
  document.getElementById("hospital-details").style.display = "none";
}

function makeReservation() {
  alert("تم النقر على زر الحجز.");
}
function contactHospital() {
  let cards = document.querySelectorAll(".hospital-card");
  cards.forEach((card, index) => {
    let contactButton = card.querySelector(
      'button[onclick="contactHospital()"]'
    );
    contactButton.addEventListener("click", () => {
      let contactNumber = card.getAttribute("data-contact");
      let url = "https://wa.me/" + contactNumber;
      window.open(url, "_blank").focus();
    });
  });
}


function close_comment(){
  document.getElementById("hospital-comment").style.display = "none";
  document.getElementById("results").style.display = "block";
document.getElementById("search").style.display = "block";
}


var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
