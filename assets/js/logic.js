


//function to read from local storage and return parsed data
function readLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key)) || [];
}

// function to save data to local storage
function saveToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let redirectURL = '';

const redirectPage = function (url) {
      redirectURL = url;
      location.assign(url);
      console.log(url);
 };


//generic function to store into local storage
 function storeLocalStorage (newEntry) {
        let data = readLocalStorage();
        //add new entry to the storage array
        data.push(newEntry)
        //save the updated blog dstorage to local storage
        localStorage.setItem('data', JSON.stringify(data));
       }




       

  
    