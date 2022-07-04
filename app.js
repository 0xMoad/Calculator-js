let output = document.getElementById("output")
let buttons = Array.from(document.getElementsByClassName("btn"))

buttons.map(btn => {
    btn.addEventListener("click", function(e){
        output.classList.add("p");

        switch(e.target.innerHTML){
            case "C":
            output.innerHTML = ""
            break;
            case "←":
                if(output.innerHTML){
                    output.innerHTML = output.innerHTML.slice(0, -1)
                }    
            break;
            case "=":
                try {
                    output.innerHTML = eval(output.innerHTML)
                } catch {
                    output.innerHTML = "Error 404"
                }
                
                break;
            default:
                output.innerHTML += e.target.innerHTML

        }
    })
})
