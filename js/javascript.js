
let scacchiera = document.getElementById("container-scacchiera");

for (let i=1 ; i < 100 ; i++){

    const rowCols = document.querySelector(".row-cols-7")
    // inserimento variabili  i diversi multipli
    let backgroundColor = "bg-primary";
    let text = i;

    const multiploDi3 = i % 3 === 0
    const multiploDi5 = i % 5 === 0

    if (multiploDi3){
        backgroundColor = "bg-success"

        text = "fizz"

    }


    if (multiploDi5){
        backgroundColor = "bg-warning"
        text = "buzz"
    }


    if (multiploDi3 && multiploDi5){
        backgroundColor = "bg-danger"
        text = "fizzbuzz"
    }
     
    


    rowCols.innerHTML += `  <div class="p-1">
                                <div class="ratio ratio-1x1 ${backgroundColor} ">
                                    <div class="d-flex justify-content-center align-items-center fs-4">${text}</div>
                                </div>
                            </div> `


} 