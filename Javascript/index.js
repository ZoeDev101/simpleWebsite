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
    // 下面這行會錯，是因為nodelist，用 nextSibling 會將 span與 ul中間空格也計算進去
    // (x) e.target.nextSibling.classList.toggle("hidden");
    //要使用，將空格也算入
    // (O) e.target.nextSibling.nextSibling.classList.toggle("hidden");
    e.target.nextElementSibling.classList.toggle("hidden");
    e.target.childNodes[1].classList.toggle("rot-90");
  });
});
