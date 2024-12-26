document.querySelectorAll(".expandable-header").forEach((button) => {
  button.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const chevron = this.querySelector(".chevron");

    content.classList.toggle("expanded");
    chevron.classList.toggle("expanded");
  });
});

function redir(a){
  alert(a)
}