function change() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
var countDownDate = new Date ("Jan 1 2023, 15:37:25").getTime();
var x = setInterval(function () {
 var now = new Date().getTime();
 var distance = countDownDate - now;
 var days = Math.floor(distance/ (1000*60*60*24));
 var hours = Math.floor( (distance % (1000*60*60*24) ) / (1000*60*60) );
 var minutes = Math.floor( (distance % (1000*60*60)) / (1000*60) );
 var seconds = Math.floor( (distance % (1000*60)) / 1000);

 document.getElementById("demo").innerHTML = days + " Hari : " + hours+ " Jam : " + minutes + " Menit : " + seconds+ " Detik ";
console.log(distance)
 if (distance < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "Kadaluarsa!!"
 }
},1000)

window.onload = function() { jam(); }
   
    function jam() {
     var e = document.getElementById('jam'),
     d = new Date(), h, m, s;
     h = d.getHours();
     m = set(d.getMinutes());
     s = set(d.getSeconds());
   
     e.innerHTML = h +':'+ m +':'+ s;
   
     setTimeout('jam()', 1000);
    }
   
    function set(e) {
     e = e < 10 ? '0'+ e : e;
     return e;
    }

