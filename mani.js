/*const jaunaspele = () =>{
    visasPogas(16);
    dzivibas(3);
}*/
//Funkcija pogu ģenerēšanai
//Pogu masīva izveide
const visasPogas = (n) =>{
    for(let i=0; i<n; i++) jaunaPoga(i);

}
//Vienas pogas izveide
const jaunaPoga = (i) => {
    const poguRamis = document.querySelector(".pogas-pogas");
    // Ģenerēsim gadījuma burtu
    const burti ="ABCDEFGHIJKLMNOPSTRUVZ"; //22
    let jaunaPoga1 = document.createElement("button");
    jaunaPoga1.setAttribute("class","poga1");
    let p_id = "poga"+String(i);
    jaunaPoga1.setAttribute("id",p_id);
    let burts = burti[Math.floor(Math.random() * 22)]
    jaunaPoga1.innerHTML=burts;
    jaunaPoga1.addEventListener("click",()=>{
        alert("button is clicked: "+p_id);
       // clickPoga(p_id);
    })
    poguRamis.appendChild(jaunaPoga1);
}

//Pogas notikuma onclick apstrāde
const clickPoga = (a) => {
    const nosPoga = document.querySelector("#"+a);
    nosPoga.setAttribute("class","nospiesta-poga");;
    console.log("Nospiesta poga");
    console.log(a);
    console.log(nosPoga.innerHTML);
    alert("Apstrāde: "+a);
}

const clickPoga1 = (a) => {
  //  const nosPoga = document.querySelector("#"+a);
   // nosPoga.setAttribute("class","nospiesta-poga");;
   // console.log("Nospiesta poga");
  //  console.log(a);
  //  console.log(nosPoga.innerHTML);
    alert("Apstrāde: "+a);
}

//Dzīvību izveide
const vienadziviba = (dzRam) =>{
    //const dzivibuRamis = document.querySelector(".dziviba");
    let jaunaDz = document.createElement("img");
    jaunaDz.setAttribute("src","sirds.png");
    jaunaDz.setAttribute("alt","Sirds");
    jaunaDz.setAttribute("width","20");
    jaunaDz.setAttribute("height","20");
    dzRam.appendChild(jaunaDz);
}
const dzivibas = (i) => {
    const dzivibuRamis = document.querySelector(".dziviba");
    dzivibuRamis.innerHTML = "Dzīvību skaits: "
    for(let j=0;j<i;j++) vienadziviba(dzivibuRamis);   
}