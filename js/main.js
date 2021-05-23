let button = document.getElementById("spin");
const resultext = document.getElementById("result");
const group= document.getElementById("lista");
const names = ["Alisa", "Amanda", "Ana G.", "Ana L.", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sònia", "Taiza", "Yasmin"];
group.innerText = names.join(", ");

function selectName() {
    if (names.length > 0) { // cuando la cantidad de elementos del objeto names sea mayor a 0
        const position = Math.floor(Math.random() * names.length);
        let winner = names[position];
        resultext.innerHTML = winner;
        names.splice(position, 1);
        group.innerText = names.join(", ");
        const soundBtn = document.querySelector('.spin')
        let burbujas = document.querySelector('#burbujas');
        soundBtn.addEventListener('clic',()=>{
            burbujas.play();
        });
    }
    else {
        resultext.innerHTML = "You must reload game";
        document.getElementById("spin").disabled=true;
    }
}
button.addEventListener("click",selectName);

document.getElementById('id-sun').onclick = function(onclick){
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
    button.addEventListener("click",onclick);
}
document.getElementById('id-moon').onclick = function(onclick){
    document.getElementById('page').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
    button.addEventListener("click",onclick);
}

