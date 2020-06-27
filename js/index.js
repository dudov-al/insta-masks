let images = document.querySelectorAll(".infinity-slider1 img");
let images1 = document.querySelectorAll(".infinity-slider2 img");
let images2 = document.querySelectorAll(".infinity-slider3 img");

let current = 0;
let current1 = 0;
let current2 = 0;

function slider(perem, cur) {
  for (let i = 0; i < perem.length; i++) {
    perem[i].classList.add("opacity0");
  }
  perem[cur].classList.remove("opacity0");
}

slider(images, current);
slider(images1, current1);
slider(images2, current2);

//document.querySelector(".infinity-slider").onclick = slider;
document.querySelector(".btn-infinity-up").onclick = function () {
  if (current - 1 === -1) {
    current = images.length - 1;
  } else {
    current--;
  }
  slider(images, current);
  if (current1 - 1 === -1) {
    current1 = images1.length - 1;
  } else {
    current1--;
  }
  slider(images1, current1);
  if (current2 - 1 === -1) {
    current2 = images2.length - 1;
  } else {
    current2--;
  }
  slider(images2, current2);
};
document.querySelector(".btn-infinity-down").onclick = function () {
  if (current + 1 === images.length) {
    current = 0;
  } else {
    current++;
  }
  slider(images, current);
  if (current1 + 1 === images1.length) {
    current1 = 0;
  } else {
    current1++;
  }
  slider(images1, current1);
  if (current2 + 1 === images2.length) {
    current2 = 0;
  } else {
    current2++;
  }
  slider(images2, current2);
};
/*Плавный переход*/
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

//Обработка формы

$("#sendMail").on("click", function () {
  var email = $("#email").val().trim();
  var name = $("#name").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();

  if (name == "") {
    $("#errorMes").text("Введите имя");
    return false;
  } else if (email == "") {
    $("#errorMes").text("Введите Email");
    return false;
  } else if (phone == "") {
    $("#errorMes").text("Введите телефон");
    return false;
  } else if (message.length < 5) {
    $("#errorMes").text("Введите пожелание не менее, чем 5 символов");
    return false;
  }

  $("#errorMes").text("");

  $.ajax({
    url: "ajax/mail.php",
    type: "POST",
    cache: false,
    data: { 'name': name, 'phone': phone, 'email': email, 'message': message, },
    dataType: 'html',
    beforeSend: function(){
      $("#sendMail").prop('disabled', true);
    },
    success: function(data){
      if(!data){
        alert('Были ошибки, сообщение не отправлено');
      } else {
        $("#forma").trigger('reset');
      }
      $("#sendMail").prop('disabled', false)
    }
  });
});

$("#sendApp").on("click", function () {
  var emailm = $("#emailm").val().trim();
  var namem = $("#namem").val().trim();
  var phonem = $("#phonem").val().trim();
  var messageArea = $("#messageArea").val().trim();

  if (namem == "") {
    $("#errorMesm").text("Введите имя");
    return false;
  } else if (emailm == "") {
    $("#errorMesm").text("Введите Email");
    return false;
  } else if (phonem == "") {
    $("#errorMesm").text("Введите телефон");
    return false;
  } else if (messageArea.length < 5) {
    $("#errorMesm").text("Введите пожелание не менее, чем 5 символов");
    return false;
  }

  $("#errorMesm").text("");

  $.ajax({
    url: "ajax/mailm.php",
    type: "POST",
    cache: false,
    data: { 'namem': namem, 'phonem': phonem, 'emailm': emailm, 'messageArea': messageArea, },
    dataType: 'html',
    beforeSend: function(){
      $("#sendApp").prop('disabled', true);
    },
    success: function(data){
      if(!data){
        alert('Были ошибки, сообщение не отправлено');
      } else {
        $("#formam").trigger('reset');
      }
      $("#sendApp").prop('disabled', false)
    }
  });
});
