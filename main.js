const notifications = document.querySelectorAll(".notification");
const num = document.querySelector(".num");
const remove = document.querySelector(".remove");
const dot = document.querySelectorAll(".red");

let max = 7;
for (let i = 0; i < notifications.length; i++) {
  notifications[i].addEventListener("click", function () {
    if (this.classList.contains("unread")) {
      this.classList.remove("unread");
      dot[i].style.display = "none";
      if (max > 0) {
        max--;
        num.innerText = max;
      }
    }
  });
}
remove.addEventListener("click", function () {
  for (let i = 0; i < notifications.length; i++) {
    notifications[i].classList.remove("unread");
    dot[i].style.display = "none";
  }
  num.innerText = 0;
});
