var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactElement = document.getElementById("contact");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    var workExperienceElement = document.getElementById("workExperience");
    var profilePictureInput = document.getElementById("profilePicture");
    if (!nameElement.value ||
        !emailElement.value ||
        !contactElement.value ||
        !profilePictureInput ||
        !educationElement.value ||
        !skillsElement.value ||
        !workExperienceElement.value) {
        alert("Please fill out all fields.");
    }
    else {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var workExperience = workExperienceElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile
            ? URL.createObjectURL(profilePictureFile)
            : "";
        var resumeOutput = "\n        <h2 >Resume</h2>\n\n        <hr>\n\n        ".concat(profilePictureFile
            ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
            : "", "\n            <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n\n        <hr>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <hr>\n\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n\n        <hr>\n\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n\n        <hr>\n         ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Element with id'resumeOutput' not found.");
        }
    }
});
