

//collect and store sponsor form data
function sponsorForm(event) {
    //get form data and store into object
    const sponsorName = document.getElementById('sponsorName').value.trim();
    const numChildren = document.getElementById('numChildren').value;
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone');

    //create object
    const newSponsor = {
        sponsorname: sponsorName,
        numchildren: numChildren,
        email: email,
        phonenumber: phoneNumber,
    }
    console.log(newSponsor)
    storeLocalStorage(newSponsor);
   // redirectPage(thankYou.html)
}
//generic function to store into local storage
 function storeLocalStorage (newEntry) {
        let data = readLocalStorage();
        //add new entry to the storage array
        data.push(newEntry)
        //save the updated blog dstorage to local storage
        localStorage.setItem('data', JSON.stringify(data));
       }


//Test Code
document.addEventListener('DOMContentLoaded', function() {
  
    // Select the child signup form and add a submit event listener
    const childSignupForm = document.getElementById('childSignupForm');
    childSignupForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission behavior
      
      // Logic to handle child signup submission
      console.log("Child signup form submitted!");
      
      // Add your form processing logic here (e.g., save data, update the UI)
      
      // Close the modal (if needed)
      $('#childSignupModal').modal('hide');
    });
  
    // Select the sponsor form and add a submit event listener
    const sponsorForm = document.getElementById('sponsorForm');
    sponsorForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevents the default form submission behavior
      
      // Logic to handle sponsor form submission
      console.log("Sponsor form submitted!");
      
      // Add your form processing logic here (e.g., save data, update the UI)
      
      // Close the modal (if needed)
      $('#sponsorModal').modal('hide');
    });
    
  });
