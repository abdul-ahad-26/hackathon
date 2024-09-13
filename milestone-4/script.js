document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // Handle form submission
    (_a = document
        .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent traditional form submission
        // Get the resume output  and create container
        var resumeElement = document.getElementById("resumeOutput");
        var createContainer = document.getElementById("createContainer");
        // Check if resume output element is found
        if (resumeElement) {
            // Remove the 'hidden' class to show the resume output
            resumeElement.classList.remove("hidden"); // Show the resume output
            createContainer === null || createContainer === void 0 ? void 0 : createContainer.classList.add("hidden"); // Hide the create container
            // Retrieve input values from the form
            // const username = (document.getElementById('username') as HTMLInputElement).value;
            var name_1 = document.getElementById("name")
                .value;
            var email = document.getElementById("email")
                .value;
            var contact = document.getElementById("contact")
                .value;
            var education = document.getElementById("education").value;
            var skills = document.getElementById("skills").value;
            var workExperience = document.getElementById("workExperience").value;
            // Handle Profile Picture upload
            var profilePictureInput = document.getElementById("profilePicture");
            var profilePictureURL = "";
            if (profilePictureInput &&
                profilePictureInput.files &&
                profilePictureInput.files.length > 0) {
                var file = profilePictureInput.files[0];
                profilePictureURL = URL.createObjectURL(file); // Create a URL for the image
            }
            resumeElement.innerHTML = "\n                <h2>Resume</h2>\n                <h3>Profile Picture</h3>\n                ".concat(profilePictureURL
                ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">")
                : "", "\n                \n                <p contenteditable=\"true\" id=\"editable-name\"><strong>Name:</strong> ").concat(name_1, "</p>\n                <p contenteditable=\"true\" id=\"editable-email\"><strong>Email:</strong> ").concat(email, "</p>\n                <p contenteditable=\"true\" id=\"editable-contact\"><strong>Contact:</strong> ").concat(contact, "</p>\n                <h3>Education</h3>\n                <p contenteditable=\"true\"  id=\"editable-education\">").concat(education, "</p>\n                <h3>Skills</h3>\n                <p contenteditable=\"true\" id=\"editable-skills\">").concat(skills, "</p>\n                <h3>Work Experience</h3>\n                <p contenteditable=\"true\"  id=\"editable-work-experience\">").concat(workExperience, "</p>\n                <br>\n                 <button class=\"submit\" id=\"downloadPDF\">Download PDF</button>\n            ");
        }
        else {
            console.error("Element with id 'resumeOutput' not found.");
        }
    });
    // Toggle visibility for each section
    document.querySelectorAll(".btn-toggle").forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the target section ID from data attribute
            var targetId = this.getAttribute("data-target");
            if (targetId) {
                var sectionContent = document.getElementById(targetId);
                // Toggle visibility
                if (sectionContent) {
                    if (sectionContent.classList.contains("hidden")) {
                        sectionContent.classList.remove("hidden");
                        this.textContent = "-"; // Change button text to '-' when visible
                    }
                    else {
                        sectionContent.classList.add("hidden");
                        this.textContent = "+"; // Change button text to '+' when hidden
                    }
                }
            }
        });
    });
});
