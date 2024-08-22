function searchHospital() {
    let searchQuery = document.querySelector('#search input').value.toLowerCase();
    
    let hospitalCards = document.querySelectorAll('.hospital-card');

    hospitalCards.forEach(function(card) {
        let hospitalName = card.getAttribute('data-name').toLowerCase();
        let hospitalLocation = card.getAttribute('data-location').toLowerCase();

        if (hospitalName.includes(searchQuery) || hospitalLocation.includes(searchQuery)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

function viewDetails(button) {
  
    document.getElementById('results').style.display = 'none';
    document.getElementById('search').style.display = 'none';


    let hospitalCard = button.parentElement;


    let hospitalName = hospitalCard.querySelector('h2').textContent;
    let hospitalLocation = hospitalCard.getAttribute('data-location');
    let hospitalImage = hospitalCard.querySelector('img').src;


    document.getElementById('details-name').textContent = hospitalName;
    document.getElementById('details-location').textContent = `الموقع: ${hospitalLocation}`;
    document.getElementById('details-image').src = hospitalImage;

  
    const doctorsList = {
        'مشفى الباب': [
            { name: 'د. نوبليز', specialization: 'طب عام' },
            { name: 'د.كنتاكي', specialization: 'جراحة' }
        ],
        'مشفى الفتح': [
           
        ],
        'مشفى الفارابي': [
            
        ],
        'مشفى الماجد': [
            
        ]
    };

    const doctors = doctorsList[hospitalName] || [];
    const doctorsListElement = document.getElementById('details-doctors');
    doctorsListElement.innerHTML = doctors.map(doc => `<li>${doc.name} - ${doc.specialization}</li>`).join('');


    document.getElementById('hospital-details').style.display = 'block';
}

function closeDetails() {
 
    document.getElementById('hospital-details').style.display = 'none';

    document.getElementById('results').style.display = 'block';
    document.getElementById('search').style.display = 'block';
}

function showSearch() {
    document.getElementById('search').style.display = 'block';
    document.getElementById('results').style.display = 'block';
    document.getElementById('hospital-details').style.display = 'none';
}

function makeReservation() {
    alert('تم النقر على زر الحجز.');
}
function contactHospital() {
let cards = document.querySelectorAll('.hospital-card');
cards.forEach((card, index) => {
    let contactButton = card.querySelector('button[onclick="contactHospital()"]');
    contactButton.addEventListener('click', () => {
        let contactNumber = card.getAttribute('data-contact');
        let url="https://wa.me/"+contactNumber;
        window.open(url, '_blank').focus();
      
    });
});
}



 // let cards = document.querySelectorAll(".hospital-card");
 //  cards.forEach((card, index) => {
 //    let contactButton = card.querySelector('button[onclick="contactHospital()"]');
 //    contactButton.addEventListener("click", () => {
 //      let contactNumber = card.getAttribute("data-contact");
 //      let whatsappUrl = `https://api.whatsapp.com/send?phone=${contactNumber}`;
    
    
 //      fetch(whatsappUrl)
 //        .then((response) => {
 //          if (response.ok) {
 //            window.location.href = whatsappUrl;
 //          } else {
 //            alert(" اخطأأأأأ ");
 //          }
 //        })
 //        .catch((error) => {
 //          console.error("Error:", error);
 //          alert(
 //            "لم يتم الاتصال"
 //          );
 //        });
 //    });
 //  }); 





// for home page
var open = document.getElementById("open");
var close = document.getElementById("close");
var container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));

//////////////// comments/////////////////
function display_comment() {
  document.getElementById("hospital-comment").style.display = "block";
  
}
////////////////////////////////////////////////////////////////////////////////////////
function send(button) {
    
  let codes = document.getElementById("codes");
  let submit = document.getElementById("submit");
  let show = document.getElementById("show");

  localStorage.setItem("comment",codes.value)
  if (codes.value != "") {
    show.innerHTML +=
      "<div id='comment'>" +
      "<h4 id='h4'>" +
      //codes.value +
      localStorage.getItem("comment")
     +
      "<button onclick='delete_comment()'>delete</button>" 
      +"<button onclick='edit_comment()'>edit</button>"
      "</div>";
    codes.value = "";
  } else {
    codes.style.border = "1px solid red";
    alert("enter you comment");
  }

}
function delete_comment(){
  let element = document.getElementById('comment');
  element.remove();
}
function cancel_comments(){
  document.getElementById("hospital-comment").style.display = "none";
}
function edit_comment(){
  alert("edit comment")
}
