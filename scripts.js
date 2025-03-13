const employees = {
    "523520": { 
        name: "Dhani Sinha", 
        role: "Cloud Engineer, Project Contributor",
        image: "images/dhani-image.jpg" // Replace with actual image URL
    },
    "908839": { 
        name: "Yashwant G", 
        role: "Full-Stack Developer, Project Contributor",
        image: "images/yashwant-image.jpg" // Replace with actual image URL
    }
};

// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get Employee ID from URL
const empId = getQueryParam("id");

// Select elements
const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");
const profilePicElement = document.getElementById("profilePic");

// Display Employee Data or Error Message
if (empId && employees[empId]) {
    nameElement.innerText = employees[empId].name;
    roleElement.innerText = employees[empId].role;
    profilePicElement.src = employees[empId].image; // Update profile picture
} else {
    nameElement.innerText = "Employee Not Found";
    roleElement.innerText = "Please check the ID or contact admin.";
    profilePicElement.src = "https://prolixisofficial.github.io/images/default.jpg"; // Default profile picture

    // Optional: Redirect to homepage after 5 seconds if no employee found
    setTimeout(() => {
        window.location.href = "https://prolixisofficial.github.io/contributors/";
    }, 5000);
}
