const employees = {
    "523520": { name: "Dhani Sinha", role: "Cloud Engineer, Project Contributor" },
    "908839": { name: "Yashwant G", role: "Full-Stack Developer, Project Contributor" }
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

// Check if Employee exists
if (empId && employees[empId]) {
    nameElement.innerText = employees[empId].name;
    roleElement.innerText = employees[empId].role;
} else {
    nameElement.innerText = "Employee Not Found";
    roleElement.innerText = "Please check the ID or contact admin.";
    
    // Optional: Delay before redirecting to a default page
    setTimeout(() => {
        window.location.href = "index.html"; // Change this to a proper error page if needed
    }, 5000);
}
