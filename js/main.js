function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.display= "block"; 
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display= "none";

  }
  function openshop(){
	  document.getElementById("shopbag").style.display = "block";
  }
  function closeshop(){
	  document.getElementById("shopbag").style.display = "none";
  }
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  //teacher biographies
  function showbio1(){
    if (document.getElementById("teacherbio1").style.display=="none"){
      document.getElementById("teacherbio1").style.display="block";
      document.getElementById("igicon1").style.display="block";
    }
  }
  function showbio2(){
    if (document.getElementById("teacherbio2").style.display=="none"){
      document.getElementById("teacherbio2").style.display="block";
      document.getElementById("igicon2").style.display="block";
    }
  }
  function showbio3(){
    if (document.getElementById("teacherbio3").style.display=="none"){
      document.getElementById("teacherbio3").style.display="block";
      document.getElementById("igicon3").style.display="block";
    }
  }
  function showbio4(){
    if (document.getElementById("teacherbio4").style.display=="none"){
      document.getElementById("teacherbio4").style.display="block";
      document.getElementById("igicon4").style.display="block";
    }
  }
  function hidebio1(){
    if (document.getElementById("teacherbio1").style.display=="block"){
      document.getElementById("teacherbio1").style.display="none";
      document.getElementById("igicon1").style.display="none";
    }
  }
  function hidebio2(){
    if (document.getElementById("teacherbio2").style.display=="block"){
      document.getElementById("teacherbio2").style.display="none";
      document.getElementById("igicon2").style.display="none";
    }
  }
  function hidebio3(){
    if (document.getElementById("teacherbio3").style.display=="block"){
      document.getElementById("teacherbio3").style.display="none";
      document.getElementById("igicon3").style.display="none";
    }
  }
  function hidebio4(){
    if (document.getElementById("teacherbio4").style.display=="block"){
      document.getElementById("teacherbio4").style.display="none";
      document.getElementById("igicon4").style.display="none";
    }
  }
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.getElementById("defaultOpen").click();
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
function openCity1(evt, cityName) {
  var i, prodtabcontent, prodtablinks;
  prodtabcontent = document.getElementsByClassName("prodtabcontent");
  for (i = 0; i < prodtabcontent.length; i++) {
    prodtabcontent[i].style.display = "none";
  }
  prodtablinks = document.getElementsByClassName("prodtablinks");
  for (i = 0; i < prodtablinks.length; i++) {
    prodtablinks[i].className = prodtablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}