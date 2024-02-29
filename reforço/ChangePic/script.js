function changeImage() {
    const html = document.documentElement;
    html.classList.toggle("light");
  
    var imagem = document.querySelector("#profile");
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");
  
    var registro = new Date();
  
    dt = registro;
  
    if (html.classList.contains("light")) {
      imagem.setAttribute("src", "./image/img1.png");
      btn.style.color = "lightgreen";
      btn.style.borderColor = "lightgreen";
      document.getElementById("data").textContent = formatarData(dt);
      document.getElementById("colorTxt").style.color = "#ffff";
    } else {
      imagem.setAttribute("src", "./image/img2.png");
      btn.style.color = "purple";
      btn.style.borderColor = "purple";
      document.getElementById("data").textContent = formatarData(dt);
      document.getElementById("colorTxt").style.color = "black";
    }
  }
  
  function formatarData(item) {
    var options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
  
    return item.toLocaleString("pt-BR", options);
  }