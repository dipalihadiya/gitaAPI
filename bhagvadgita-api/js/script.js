
 let slokPrint = document.getElementById(" slokPrint");
 let id = document.querySelector("id");
 let bhagvadgita = document.getElementById("bhagvadgita")
 let name = document.getElementById("name");
 let char = document.getElementById("char");
 let slok = document.getElementById("slok");

  const gita2 = () => {
      fetch('https://vedicscriptures.github.io/chapters/').then((res) => {

          return res.json();
     }).then((data) => {

       
        console.log("data", data);

        data.forEach(element => {
            char.innerHTML += `<li   class="pd-3"><a href="#" class="text-decoration-none text-danger " onclick="return printSlok(${element.chapter_number} , ${element.verses_count})" style="font-size: 35px;" >${element.name}</a></li>`;
        });
      }).catch((err) => {
          console.log(err);
     })
  }

  const printSlok = (chapter_number , verses_count) => {
    console.log(chapter_number , verses_count);
    slok.innerHTML = "";
   for(let i = 1 ; i < verses_count ; i++){ // 1 < 47 // 2 < 47
        fetch(`https://vedicscriptures.github.io/slok/${chapter_number}/${i}`).then((res) => { // 1 47 // 1 47
            return res.json()
       }).then((data) => {
          console.log("data", data);
           slok.innerHTML += data.slok + "<br><br>"; 
       }).catch((err) => {
            console.log(err);
       })
    }
  }

 gita2();
