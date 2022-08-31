

showNotes();
let btn = document.getElementById("notebtn");
btn.addEventListener("click", function (e) {

  let addtxt = document.getElementById("txt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes)
  }
  noteobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  addtxt.value = "";
  showNotes();

})
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  
  }
  else {
    noteobj = JSON.parse(notes)
  }
  let html = "";
  noteobj.forEach(function (element, index) {
    html += `
                <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">Note ${index + 1}</h5>
                            <p class="card-text"> ${element}</p>
                            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
  });
  let notesshow = document.getElementById("notecon");
  if (noteobj.length != 0) {
    notesshow.innerHTML = html;
  } else {
    notesshow.innerHTML = `<div id="blanknote">Please add some note "thank you"</div>`;
    
  }
}

function deleteNote(index) {


  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  }
  else {
    noteobj = JSON.parse(notes)
  }
  noteobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

  let inputVal = search.value.toLowerCase();
  let noteCards = document.getElementsByClassName('noteCard');
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    else {
      element.style.display = "none";
    }

  })
})

let stor=document.getElementById("storage")
let disp=document.getElementsByClassName("contaner")
stor.addEventListener("click",function () 
{
  document.getElementById("disp").style.display ="none";
})

let home=document.getElementById("home")
home.addEventListener("click",function () 
{
  document.getElementById("disp").style.display ="block";
})




