// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd

    document.getElementById("name").addEventListener("change", function(e){
      let nameOutput = document.getElementById("nameOutput");
      console.log(e);
      nameOutput.innerText = e.target.value;

    });
    document.getElementById("type").addEventListener("change", function(e){
      // let nameOutput = document.getElementById("info");
      // console.log(e);
      console.log(e);
      let info = document.getElementById("info");
      info.innerText = e.target.value;

    });


    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (e) {
        e.preventDefault();// stop page to reload 
        console.log(e.target)
        var formData = new FormData(e.target);
        formData = Object.fromEntries(formData);
        // output as an object
        // console.log(Object.fromEntries(formData));
      
        // ...or iterate through the name-value pairs
        // for (var pair of formData.entries()) {
        //   console.log(pair[0] + ": " + pair[1]);
        // }
        let nameOutput = document.getElementById("nameOutput");
        let info = document.getElementById("info");
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;
      });
    // Log readiness to console
    console.log("Ready");
});

function processForm(form){

}

//aditional thigns 

// let info = getElementById("info");
// info.classList.add("test");
// let nameOutput = getElementById("info");
// info.classList.remove("someClass");