const submitButton = document.getElementById("lookupbutton")
const input = document.getElementById("postcode")

input.addEventListener("keyup",(e) => {
    const value = e.currenttarget.value;
    submitButton.disabled = false;
    if(value === ""){
        submitButton.disabled = true;
    } 
    
})