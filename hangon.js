const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const profile = document.getElementsByClassName("profile")[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  profile.classList.toggle('active')
});

const btn = document.getElementById('button');
const closeBtn = document.querySelector('.close');
btn.addEventListener("click", function() {
  document.querySelector('.bg-modal').style.display = "flex";
});

closeBtn.addEventListener("click", function() {
document.querySelector('.bg-modal').style.display = "none";
  });
  