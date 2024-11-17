// Function to display sponsor and children data based on the number of children sponsored
function displayThankYouData() {
    // Retrieve sponsor and children data from local storage
    const sponsors = readLocalStorage('sponsors');
    const children = readLocalStorage('families');
    const assignedChildren = readLocalStorage('assignedChildren'); // Keep track of already assigned children

    // Get the latest sponsor (most recent)
    const sponsor = sponsors[sponsors.length - 1];

    // Populate sponsor name
    const sponsorNameElement = document.getElementById('sponsorTy');
    if (sponsor && sponsor.sponsorName) {
        sponsorNameElement.textContent = sponsor.sponsorName;
    } 

    // Get the number of children the sponsor wants to sponsor
    const numChildren = sponsor && sponsor.numchildren ? parseInt(sponsor.numchildren, 10) : 0;
 
    // Filter unassigned children
    const unassignedChildren = children.filter(
        child => !assignedChildren.some(assigned => assigned.childName === child.childName)
    );
      // Limit the displayed children to the number specified by the sponsor
    const childrenToDisplay = unassignedChildren.slice(0, numChildren);

    // Update the assignedChildren list in local storage
    saveToLocalStorage('assignedChildren', [...assignedChildren, ...childrenToDisplay]);

    // Display the selected children
    const childRefContainer = document.getElementById('childRef');
    childRefContainer.innerHTML = ''; // Clear existing content

    if (childrenToDisplay.length > 0) {
        if (unassignedChildren.length < numChildren && unassignedChildren.length > 0) {
            const infoMessage = document.createElement('p');
            infoMessage.textContent = 'Sorry, currently we have only the following children available for sponsorship.';
            childRefContainer.appendChild(infoMessage); // Add the message before the children list
        }
        childrenToDisplay.forEach(child => {
            const childSection = document.createElement('div');
            const firstNAme = child.childName.split(' ')[0];
            childSection.innerHTML = `
                <h2>${firstNAme}</h2>
                <h3>Age: ${child.childAge}</h3>
                <h3>Wishlist:</h3>
                <ul>
                    ${child.childInterest
                        .split(',')
                        .map(item => `<li>${item.trim()}</li>`)
                        .join('')}
                </ul>
            `;
            childRefContainer.appendChild(childSection);
        });
    } 
    else {
        // If no children are available for display
        childRefContainer.innerHTML = '<p>No children available for sponsorship at this time.</p>';
    }
}

// Ensure assignedChildren is initialized in local storage
if (!localStorage.getItem('assignedChildren')) {
    saveToLocalStorage('assignedChildren', []);
}

// Call the function to populate the thank-you page on load
document.addEventListener('DOMContentLoaded', displayThankYouData);