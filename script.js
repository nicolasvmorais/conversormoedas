
const convertButton = document.querySelector(".button");
convertButton.addEventListener("click", convertValue);
const selecione = document.querySelector(".selecione-2")
const nomeMoeda = document.querySelector(".euro-ou-dol")
const bandeirinha =document.querySelector (".usa")
 
function convertValue() {
  const valorSelecionado= document.querySelector(".input").value;
  const realValor = document.querySelector(".quantidade");
  const dolarEuroValor = document.querySelector(".dois-pau");
  
  const dolarToday = 5.05;
  const euroToday = 5.31
  const convertedValue = valorSelecionado / dolarToday;
  
  
  realValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL"
  }).format(valorSelecionado)
  
  
  dolarEuroValor.innerHTML = new Intl.NumberFormat("en-US", {
    style:"currency",
    currency:"USD"
  }).format(valorSelecionado / dolarToday)

 
  if (selecione.value=="dolar"){

    dolarEuroValor.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD"
    }).format(valorSelecionado / dolarToday)
  

  }


  if (selecione.value== "euro"){

    dolarEuroValor.innerHTML = new Intl.NumberFormat("de-DE", {
      style:"currency",
      currency:"EUR"
    }).format(valorSelecionado/euroToday)
  

  }


}

function change() {
  if (selecione.value== "dolar") { 
    nomeMoeda.innerHTML= "Dólar Americano"
    bandeirinha.src ="./assets/estados-unidos (1) 1.png"
   
  }

  if (selecione.value== "euro") { 
    nomeMoeda.innerHTML="Euro"
    bandeirinha.src ="./assets/Design sem nome 3.png "
  }
  convertValue()
}



selecione.addEventListener("change",change)





