function dados() {
    //dicionario de dados
    const ds = [
                  {id:1, login:"capitão", senha:"1234", nome:"Steve Rogers", email:"capamerica@ig.com"}, //0
                  {id:2, login:"th da mare", senha:"12345", nome:"jonas", email:"capa@ig.com"}, //1
                  {id:3, login:"jonas", senha:"123456", nome:"Th", email:"camerica@ig.com"}  //2

            ]
       
            let pipoca =  JSON.stringify(ds)
            
            localStorage.setItem("banco", json)




 }

 
function logar(){
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value

    alert(lg + "\n" + sn)
}