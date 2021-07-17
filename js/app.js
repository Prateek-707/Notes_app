// quotes javascript 

const quotes = [`“No one is perfect - that’s why pencils have erasers.”`, `"You always pass failure on the way
to success"`, `"It always seems impossible until it
is done"`, `“Keep your face to the sunshine and you cannot see a shadow.”`]

// console.log(quotes);

let quote = document.getElementById("quotes");

let html = `<blockquote class="blockquote mb-0">
                <p>${quotes[Math.floor(Math.random() * quotes.length)]}</p>
            </blockquote>`
    quote.innerHTML = html ;


// Main notes javascript 

showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {

    let addText = document.getElementById('addText');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (addText.value != "") {
        notesObj.push(addText.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addText.value = "";
        showNotes();
    }
})

function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    let len = notesObj.length ;
    let temp = 1 ;
        if(temp <= 5 && temp <= len)
        {
            notesObj.forEach(function (element, index) {

                html += `
                    <div class="card my-2 me-2 bg-info text-dark noteCard"style="width: 19rem;">
                        <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id= "${index}" onclick= deleteNote(id)  class="btn btn-primary"  > Remove Note </button>
                        </div>
                    </div>
                `;
            });

            temp = temp + 1 ;
        }

        else
        {
            
            
        }


    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = html;
        let text = document.createTextNode(`Nothing to Display use "Add Note" to add notes `);
        notesElm.appendChild(text);
    }

}

// remove note functionality 

function deleteNote(index) {

    // console.log('Note is delete',index);

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}


// Top search functionality:- 

let search = document.getElementById("searchTxt");

search.addEventListener("input",function(){

    let inputval = search.value ;

    let notecards = document.getElementsByClassName("noteCard") ;
    console.log(notecards)

    Array.from(notecards).forEach(function(elements){

        let cardTxt = elements.getElementsByTagName("p")[0].innerText ;
        // console.log(cardTxt) ;

        if(cardTxt.includes(inputval)){
            elements.style.display = "block" ;
        }

        else 
        {
            elements.style.display = "none" ;
        }
    })
})