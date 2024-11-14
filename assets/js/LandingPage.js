// variable declaration
const sponsorForm = document.getElementById('sponsorForm');
const childForm = document.getElementById('childSignupForm');


// Sponsor event listener
sponsorForm.addEventListener('submit', function() {

    // Create object with sponsor data and store in local storage
    sponsorFormHandler();
});

// Child event listener
childForm.addEventListener('submit', function() {
    
    // Check that the list of preferred gifts does not go over five
    const childInterest = document.getElementById('preferredGifts');
    let interestList = childInterest.value.split(',');
    
    if (interestList.length > 5) {
        alert('Please list no more than five preferred gifts');
        return;
    }

    // Create object with child data
    const newChildData = {
        childName: document.getElementById('childName').value.trim(),
        childGender: document.getElementById('gender').value,
        childAge: document.getElementById('age').value,
        childInterest: document.getElementById('preferredGifts').value,
    }
    
    // get existing family data and add new entry
    const childData = readLocalStorage('families');
    childData.push(newChildData);
    console.log(childData);
    saveToLocalStorage('families', childData);

    // Redirect to thank you page for child
    //redirectPage('thankYou.html');
});