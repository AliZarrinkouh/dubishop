document.getElementById("defaultOpen").click();
//menu hover effects
var image = document.getElementById("image");
  
  
  function mousehover1(){
    document.getElementById("image").src = "../images/homeyel.png";
  }
  function mouseunhover1(){
    document.getElementById("image").src = "../images/home.png";
    }
    function mousehover2(){
    document.getElementById("image2").src = "../images/paperyel.png";
  }
  function mouseunhover2(){
    document.getElementById("image2").src = "../images/paper.png";
    }
//charts
Chart.defaults.global.defaultFontFamily ='iransans',
        new Chart(document.getElementById("bar-chart"), {
            type: 'line',
            data: {
              fill: false,
              labels: ["ش", "ی", "د", "س", "چ" , "پ" , "ج"],
              datasets: [
                {
                  label: "Number of developers (millions)",
                  backgroundColor: ["red", "blue","yellow","green","pink"],
                  data: [7,4,6,9,3]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
              },
         
              scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
         
            }
         
         
        });
        new Chart(document.getElementById("bar-chart2"), {
            type: 'line',
            data: {
              fill: false,
              labels: ["ش", "ی", "د", "س", "چ" , "پ" , "ج"],
              datasets: [
                {
                  label: "Number of developers (millions)",
                  backgroundColor: ["red", "blue","yellow","green","pink"],
                  data: [0,25,30,50,75,80,100]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
              },
         
              scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
         
            }
         
         
        }); 
        new Chart(document.getElementById("bar-chart3"), {
            type: 'line',
            data: {
              fill: false,
              labels: ["ش", "ی", "د", "س", "چ" , "پ" , "ج"],
              datasets: [
                {
                  label: "Number of developers (millions)",
                  backgroundColor: ["red", "blue","yellow","green","pink"],
                  data: [7,4,6,9,3]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
              },
         
              scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
         
            }
         
         
        });     
        //chart tabs   
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
          //show notifications
          function shownotifs(){
            if(document.getElementById("notifications").style.display == "none"){  
                document.getElementById("notifications").style.display="block";
                document.getElementById("latestheading").style.opacity = "0.5";
            }
          }
          function hidenotifs(){
            if(document.getElementById("notifications").style.display == "block"){  
                document.getElementById("notifications").style.display = "none";
                document.getElementById("latestheading").style.opacity = "1";
            }
        }