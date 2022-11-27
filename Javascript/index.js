//navbar toggle
function toggleMenu(type) {
  var muneType = document.querySelector("#" + type);
  muneType.classList.toggle("hidden");
}

//dropdown menu
var dropdownItems = document.getElementsByClassName("dropdown");
//此時型態為 HTMLCollection，不是 Array 所以需要轉換
var dropdownArray = Array.prototype.slice.call(dropdownItems);
dropdownArray.forEach((element) => {
  element.addEventListener("click", function (e) {
    //修正如果點到 Icon 不會展開/收合問題
    if (e.target.classList[0] === "svg-icon") {
      e.target.parentElement.nextElementSibling.classList.toggle("hidden");
      e.target.classList.toggle("rot-90");
    } else {
      // 下面這行會錯，是因為 nodelist，用 nextSibling 會將 span與 ul中間空格也計算進去
      // (x) e.target.nextSibling.classList.toggle("hidden");
      //要使用，將空格也算入
      // (O) e.target.nextSibling.nextSibling.classList.toggle("hidden");
      e.target.nextElementSibling.classList.toggle("hidden");
      e.target.childNodes[1].classList.toggle("rot-90");
    }
  });
});

//modal
var modalBtns = document.querySelectorAll("#myBtn");
var closeBtns = document.querySelectorAll(".close");
// 將 nodelist 轉成 Array
var modalBtnsArray = Array.prototype.slice.call(modalBtns);
var closeBtnsArray = Array.prototype.slice.call(closeBtns);

modalBtnsArray.forEach(function (modalBtn) {
  modalBtn.onclick = function () {
    modalBtn.nextElementSibling.style.display = "block";
  };
});

closeBtnsArray.forEach(function (modalBtn) {
  modalBtn.onclick = function (e) {
    e.target.parentElement.parentElement.style.display = "";
  };
});

window.onclick = function (e) {
  if (e.target.id === "myModal" && e.target.style.display === "block") {
    e.target.style.display = "";
  }
};
