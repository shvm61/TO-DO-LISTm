const edit = document.querySelectorAll(".w-25");
const btn = document.querySelectorAll(".update-item");
const calendar = document.querySelectorAll(".cal");
// console.log(calendar);
for (let i = 0; i < edit.length; i++) {
  edit[i].addEventListener("input", function () {
    console.log("input event triggerd");
    calendar[i].style.display = "none";
    btn[i].classList.remove("d-none");
  });
}
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    // console.log(edit[i].textContent);
    update_item(edit[i].textContent, btn[i].getAttribute("data-id"));
  });
}

const update_item = async function (content, id) {
  await axios.put("/update-item", { content: content.trim(), id: id.trim() });
  window.location = "/";
};
