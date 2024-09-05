const randomColor = () => {
  let variables = "0123456789ABCDEF";
  let shade = "#";
  for (let i = 0; i < 6; i++) {
    shade += variables[Math.floor(Math.random() * 16)];
  }
  const myElement = document.getElementById("demo");
  myElement.style.backgroundColor = shade;
  return shade;
};
