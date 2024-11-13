const sponsorForm = document.getElementById('sponsorForm');
console.log(sponsorForm)

//function to read from local storage and return parsed data
function readLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

// function to save data to local storage
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

//collect and store sponsor form data
function sponsorFormHandler(event) {
    //event.preventDefault();

    //get form data and store into object
 

    //create object    
    const newSponsorData = {
      sponsorName: document.getElementById('sponsorName').value.trim(),
      numchildren: document.getElementById('numChildren').value,
      email: document.getElementById('email').value.trim(),
      phonenumber:  document.getElementById('phone').value.trim(),
     }
 
    //get existing sponsor date and add new entry
    const sponsorData = readLocalStorage('sponsors')
    sponsorData.push(newSponsorData);
    saveToLocalStorage('sponsors', sponsorData)
    //!!!!!! add this in once it exists
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



  
    