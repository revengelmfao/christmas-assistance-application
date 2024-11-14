// variable declaration
const sponsorModal = document.getElementById('sponsorModal');
const familyModal = document.getElementById('childSignupModal');
const sponsorBtn = sponsorModal.querySelector('btn btn-primary');
const familyBtn = familyModal.querySelector('btn btn-primary');
const sponsorName = document.getElementById('sponsorName');
const numChildren = document.getElementById('numChildren');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const childName = document.getElementById('childName');
const childAge = document.getElementById('childAge');
const childGender = document.getElementById('childGender');
const childInterest = document.getElementById('childInterest');


// Sponsor event listener
sponsorBtn.addEventListener('click', function() {

    // Check if all fields are filled out
    if (!sponsorName.value || !numChildren.value || !email.value || !phone.value) {
        alert('Please fill out all fields');
        return;
    }
    sponsorFormHandler();
});

// Family event listener
familyBtn.addEventListener('click', function() {
    
    // Check if all fields are filled out, and the list of preferred gifts does not go over five
    let interestList = childInterest.value.split(',');
    if (!childName.value || !childGender.value || !childAge.value || !childInterest.value) {
        alert('Please fill out all fields');
        return;
    } else if (interestList.length > 5) {
        alert('Please list no more than five preferred gifts');
        return;
    }

    // Create object with child data
    const newChildData = {
        childName: childName.value.trim(),
        childGender: childGender.value,
        childAge: childAge.value,
        childInterest: interestList
    }
    
    // get existing family data and add new entry
    const childData = readLocalStorage('families');
    childData.push(newChildData);
    saveToLocalStorage('families', childData);

    // Redirect to thank you page for child
    //redirectPage('thankYou.html');
});