
// if User Add a NOte
shownote();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function(e){

    //add note titel
    let addtitel = document.getElementById('addtitel');
    let addTxt = document.getElementById("addTxt");

    let titel = localStorage.getItem('titel');
    
    if(titel == null){
        titelobj = [];
    }else{
        titelobj =JSON.parse(titel);
    }

    let myobj = {
        title : addtitel.value,
        text : addTxt.value
    }

    titelobj.push(myobj);
    localStorage.setItem("titel", JSON.stringify(titelobj));

    addtitel.value ="";
    addTxt.value = "";

    // titelobj.push(addtitel.value);

    console.log(titelobj);

    //add notes
    // let addTxt = document.getElementById("addTxt");
    // let notes = localStorage.getItem("notes");
    //     if (notes == null) {
    //         notesObj = [];
    //     } else {
    //         notesObj = JSON.parse(notes);
    //     }

    // notesObj.push(addTxt.value);
    // localStorage.setItem("notes", JSON.stringify(notesObj));
    // addTxt.value = "";
    
    // console.log(notesObj)

    

    shownote();
});

function shownote(){

    let titel = localStorage.getItem('titel');
    
    if(titel == null){
        titelobj = [];
    }else{
        titelobj =JSON.parse(titel);
    }
    
    let titelhtml = "";

    titelobj.forEach(function(element, index) {
        titelhtml += `
        <div class="card border-success Searchcard x" style="max-width: 20rem">
          <div class="card-header S d-flex" id="${index +1}">${element.title}
          </div>
          <div class="card-body ">
            <p class="card-text">
              ${element.text}
            </p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-outline-danger ">Delete Note</button>
          </div>
          
        </div>      
       `
    });

    let titelelem = document.getElementById('1');
    if(titelobj.length != 0){
        titelelem.innerHTML = titelhtml;
    }else {
        titelelem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }


    //   let notes = localStorage.getItem("notes");
    //   if (notes == null) {
    //       notesObj = [];
    //   } else {
    //       notesObj = JSON.parse(notes);
    //   }

    //   let phtml ="";

    //   notesObj.forEach(function(element){
    //     phtml += `
        
    //     <p class="card-text" >
    //       ${element}
    //     </p>
    //     `
    //   });

    //   let notelm = document.getElementById('2');
    //   if(notesObj.length !=0){
    //     notelm.innerHTML = phtml;
    //   }
    //   else{
    //     notelm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    //   }

}

function deleteNote(index){
    

    let titel = localStorage.getItem('titel');
    
    if(titel == null){
        titelobj = [];
    }else{
        titelobj =JSON.parse(titel);
    }
    titelobj.splice(index, 1);
    localStorage.setItem("titel", JSON.stringify(titelobj));
    shownote();
}


let search = document.getElementById('search');

search.addEventListener("input", function(){

    let inputval = search.value.toLowerCase();

    let Cardtitle = document.getElementsByClassName("Searchcard");
    Array.from(Cardtitle).forEach(function (element){
        let crd = element.getElementsByClassName('S')[0].innerText;
        if(crd.includes(inputval)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
        
    })

})



































// let showNote = ()=>{
// note  = localStorage.getItem("note");

//     if(note == null){
//         notearr =[];
//     }
//     else{
//         notearr = JSON.parse(note);
//     }
//     let html = '';
//     notearr.forEach(function (arrayItem,index) {
//         html += `<div class="card border-success .col-4" style="max-width: 20rem">
//         <div class="card-header">${index}</div>
//         <div class="card-body">
//           <h4 class="card-title">Success card title</h4>
//           <p class="card-text">
//           ${arrayItem}
//           </p>
//         </div>
//       </div>
//     `;
//     });
//     let noteelem = document.getElementById('notes');
//     if(note.length != 0){
//         noteelem.innerHTML = html;
//     }
//     else{
//         noteelem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
// }