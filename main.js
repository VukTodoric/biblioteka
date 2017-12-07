var nobel = document.getElementById('nobel');
var books = document.getElementById('books');
var booksBtn = document.getElementById('booksBtn');
var nobelBtn = document.getElementById('nobelBtn');


booksBtn.addEventListener('click',displayData);
nobelBtn.addEventListener('click',displayDataNobelPrize);

var xml = new XMLHttpRequest();
var xml1 = new XMLHttpRequest();


xml.open('GET',"http://mysafeinfo.com/api/data?list=bestnovels&format=json");
xml.addEventListener('readystatechange',function () {
  if (xml.readyState == 4 && xml.status == 200) {
        displayData();
  }
})
xml.send();
// console.log(xml.responseText);

xml1.open('GET','http://mysafeinfo.com/api/data?list=nobelwinners&format=json');
xml1.addEventListener('readystatechange',function () {
  if (xml1.readyState == 4 && xml1.status == 200) {
        displayDataNobelPrize();

  }
})
xml1.send();
console.log(xml1.responseText);

function displayData() {
  var data = JSON.parse(xml.responseText);
  var text = "";
  for (var i = 0; i < data.length ; i++) {
    text += `
    <tr>
       <td>${data[i].rank}</td>
       <td>${data[i].tt}</td>
       <td>${data[i].au}</td>
       <td>${data[i].yr}</td>
       <td><a class="btn btn-primary" href="https://en.wikipedia.org/wiki/${data[i].tt}">Read More!</a></td>
    </tr>
    `
  }
  books.innerHTML = text;
  booksRow.style.display = 'block';
  nobelRow.style.display = 'none';

}

function displayDataNobelPrize() {
    var data = JSON.parse(xml1.responseText);
    var text = "";
    for (var i = 0; i < data.length; i++) {
      text += `
      <tr>
        <td>${data[i].yr}</td>
        <td>${data[i].ctry}</td>
        <td>${data[i].nm}</td>
        <td>${data[i].awd}</td>
        <td><a class="btn btn-primary" href="https://en.wikipedia.org/wiki/${data[i].nm}">Read More!</a></td>
      </tr>
      `
    }
    nobel.innerHTML = text;
    booksRow.style.display = 'none';
    nobelRow.style.display = 'block';
}

var obj = {

  name : "vuk",
  age : 26
}
for (prop in obj){
  console.log(obj[prop]);
}
