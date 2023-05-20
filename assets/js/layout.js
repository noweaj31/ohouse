(() => {
  Promise.all([
    fetch("/layout/footer.html").then(response => response.text()),
    fetch("/layout/header.html").then(response => response.text())
  ])
    .then(data => {
      const footerData = data[0];
      const headerData = data[1];
  
      document.querySelector("footer").innerHTML = footerData;
      document.querySelector("header").innerHTML = headerData;
    })
    .catch(error => {
      console.log("레이아웃을 찾을 수 없습니다.", error);
    });

})()