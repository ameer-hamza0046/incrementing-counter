const h1Nums = document.querySelectorAll(".container > .box > h1");

const duration = 2000;

h1Nums.forEach((e) => {
  const num = Number(e.innerHTML);
  for (let i = 1; i <= num; i++) {
    setTimeout(() => {
      e.innerHTML = i;
    }, (i * duration) / num);
  }
});

const extra = document.createElement("div");
// let str = ""
// nums.forEach(e => {
//     str += e.innerHTML;
// })

// extra.innerHTML = str;

// const body = document.querySelector("body")
// body.appendChild(extra)
