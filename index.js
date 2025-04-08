/* 
Je zvykem zobrazovat čísla na kalkulačce bez úvodní nuly. Nula na začátku tedy bude zobrazena pouze tehdy, když je na displeji nula jako taková.
Uvědmote si, že výše uvedené pravidlo znamená, že když je na displeji zobrazena nula, uživatelem zadanou číslici nechceme na displej přidat, ale chceme celý obsah displeje (tj. zobrazenou nulu) nahradit číslicí, na kterou uživatel klinul.
Do handleDigitClick přidáte podmínku, která podle obsahu displeje (zda je na něm zobrazena jen nula) rozhodne, zda chceme číslici na displej přidat, nebo zda chceme obsah displeje zadanou číslicí přepsat.
Díky výše uvedené podmínce už se nikdy nemůže stát, že by na displeji bylo zobrazeno jiné číslo začínající nulou, třeba 01. Tyto případy tedy nemusíme ošetřovat a komplikovat kód dalšími podmínkami.
Když je na displeji zobrazena nula a uživatel klikne na nulu, nahradí se nula nulou. Z lidského pohledu je to nelogické, práce navíc. Pro počítač to ale není skoro žádná práce. Kdybychom to chtěli řešit, kód bude jenom složitější – proto to takto necháme. Přehlednost kódu má přednost před tím, že bychom počítači ušetřili pár nanosekund práce.
*/


const displayElm = document.querySelector(".display");
const handleDigitClick = (event) => {
  if (displayElm.textContent === "0") {
    const digit = event.target.textContent;
    displayElm.textContent = digit;
  }
  else if (displayElm.textContent.length < 9) {
  const digit = event.target.textContent;
  displayElm.textContent += digit;}
}

const digitButtons = document.querySelectorAll("#btn-0, #btn-1, #btn-2, #btn-3, #btn-4, #btn-5, #btn-6, #btn-7, #btn-8, #btn-9");

digitButtons.forEach(button => {
  button.addEventListener("click", handleDigitClick);
})


/*document.querySelector("#btn-7").addEventListener("click", handleDigitClick);
document.querySelector("#btn-8").addEventListener("click", handleDigitClick);
document.querySelector("#btn-9").addEventListener("click", handleDigitClick);
document.querySelector("#btn-4").addEventListener("click", handleDigitClick);
document.querySelector("#btn-5").addEventListener("click", handleDigitClick);
document.querySelector("#btn-6").addEventListener("click", handleDigitClick);
document.querySelector("#btn-1").addEventListener("click", handleDigitClick);
document.querySelector("#btn-2").addEventListener("click", handleDigitClick);
document.querySelector("#btn-3").addEventListener("click", handleDigitClick);
document.querySelector("#btn-0").addEventListener("click", handleDigitClick);*/
