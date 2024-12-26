document.querySelectorAll(".expandable-header").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const chevron = this.querySelector(".chevron");

    content.classList.toggle("expanded");
    chevron.classList.toggle("expanded");
  });
});

const volunteerLink = "placeholder"

function redir(a){
  if(confirm("Do you want to go to " + a)){
    window.open(a, '_blank').focus();
  }
}