// Function to populate the sponsor's name
function displaySponsorName() {
    //Target the <span> and <h1> elements
    const sponsorNameSpan = document.getElementById('sponsorTy');
    const sponsorRefHeading = document.getElementById('sponsorRef');
    // Set the text content to the sponsor's name
    sponsorNameSpan.textContent = sponsorData.name;
    sponsorRefHeading.innerHTML = `Thank you, <span id="sponsorTy">${sponsorData.name}</span>!`;
}
// Function to retrieve and display child data from localStorage
function displayChildren() {
    const childRef = document.getElementById('childRef');
  // Retrieve child data from localStorage
  const childrenData = JSON.parse(localStorage.getItem('children')) || [];    
  if (childrenData.length === 0) {
    childRef.innerHTML = '<p>No children data available.</p>';
    return;
}
// Loop through the children and create HTML elements for each child
childrenData.forEach(child => {
    // Create a div for each child
    const childDiv = document.createElement('div');
    // Create and append the child's name (h2)
    const childName = document.createElement('h2');
    childName.textContent = child.name;
    childDiv.appendChild(childName);
    // Create and append the Wishlist heading (h3)
    const wishlistHeading = document.createElement('h3');
    wishlistHeading.textContent = 'Wishlist:';
    childDiv.appendChild(wishlistHeading);
    // Create and append the Wishlist items (ul and li)
    const wishlistList = document.createElement('ul');
    child.wishlist.forEach(item => {
        const wishlistItem = document.createElement('li');
        wishlistItem.textContent = item;
        wishlistList.appendChild(wishlistItem);
    });
    childDiv.appendChild(wishlistList);

    // Append the child div to the childRef container
    childRef.appendChild(childDiv);
});
}
// Execute functions on page load
displaySponsorName();
displayChildren();