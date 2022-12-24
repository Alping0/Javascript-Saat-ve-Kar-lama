let user = prompt("Lutfen adinizi giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} ${user}`
myName.classList.add('text-center')

      function showTime() {
          var date = new Date().toLocaleString('tr-TR');
          document.getElementById("myClock").innerHTML = date;
      }
      setInterval(showTime, 1000); 
 
