const h1Nums = document.querySelectorAll(".container > .box > h1");

const duration = 2000;
const iteration = 200;

h1Nums.forEach((e) => {
  const num = Number(e.innerHTML);
  let val = 0;
  for (let i = 0; i < iteration; i++) {
    setTimeout(() => {
      val += num / iteration;
      e.innerHTML = Math.round(val);
    }, (i * duration) / iteration);
  }
});
