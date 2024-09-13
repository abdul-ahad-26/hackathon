document.addEventListener("DOMContentLoaded", () => {
  // Handle form submission
  document
    .getElementById("resumeForm")
    ?.addEventListener("submit", function (event: Event) {
      event.preventDefault(); // Prevent traditional form submission

      // Get the resume output  and create container
      const resumeElement = document.getElementById(
        "resumeOutput"
      ) as HTMLElement | null;
      const createContainer = document.getElementById(
        "createContainer"
      ) as HTMLElement | null;

      // Check if resume output element is found
      if (resumeElement) {
        // Remove the 'hidden' class to show the resume output

        resumeElement.classList.remove("hidden"); // Show the resume output
        createContainer?.classList.add("hidden"); // Hide the create container

        // Retrieve input values from the form
        // const username = (document.getElementById('username') as HTMLInputElement).value;
        const name = (document.getElementById("name") as HTMLInputElement)
          .value;
        const email = (document.getElementById("email") as HTMLInputElement)
          .value;
        const contact = (document.getElementById("contact") as HTMLInputElement)
          .value;
        const education = (
          document.getElementById("education") as HTMLTextAreaElement
        ).value;
        const skills = (
          document.getElementById("skills") as HTMLTextAreaElement
        ).value;
        const workExperience = (
          document.getElementById("workExperience") as HTMLTextAreaElement
        ).value;

        // Handle Profile Picture upload
        const profilePictureInput = document.getElementById(
          "profilePicture"
        ) as HTMLInputElement;
        let profilePictureURL = "";

        if (
          profilePictureInput &&
          profilePictureInput.files &&
          profilePictureInput.files.length > 0
        ) {
          const file = profilePictureInput.files[0];
          profilePictureURL = URL.createObjectURL(file); // Create a URL for the image
        }

        resumeElement.innerHTML = `
                <h2>Resume</h2>
                <h3>Profile Picture</h3>
                ${
                  profilePictureURL
                    ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
                    : ""
                }
                
                <p contenteditable="true" id="editable-name"><strong>Name:</strong> ${name}</p>
                <p contenteditable="true" id="editable-email"><strong>Email:</strong> ${email}</p>
                <p contenteditable="true" id="editable-contact"><strong>Contact:</strong> ${contact}</p>
                <h3>Education</h3>
                <p contenteditable="true"  id="editable-education">${education}</p>
                <h3>Skills</h3>
                <p contenteditable="true" id="editable-skills">${skills}</p>
                <h3>Work Experience</h3>
                <p contenteditable="true"  id="editable-work-experience">${workExperience}</p>
                <br>
                 <button class="submit" id="downloadPDF">Download PDF</button>
            `;
      } else {
        console.error("Element with id 'resumeOutput' not found.");
      }
    });

  // Toggle visibility for each section
  document.querySelectorAll(".btn-toggle").forEach((button) => {
    button.addEventListener("click", function () {
      // Get the target section ID from data attribute
      const targetId = (this as HTMLElement).getAttribute("data-target");
      if (targetId) {
        const sectionContent = document.getElementById(targetId);

        // Toggle visibility
        if (sectionContent) {
          if (sectionContent.classList.contains("hidden")) {
            sectionContent.classList.remove("hidden");
            (this as HTMLElement).textContent = "-"; // Change button text to '-' when visible
          } else {
            sectionContent.classList.add("hidden");
            (this as HTMLElement).textContent = "+"; // Change button text to '+' when hidden
          }
        }
      }
    });
  });
});
