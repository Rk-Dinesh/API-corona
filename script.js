let div = document.createElement("div");
div.style.textAlign= "center";
div.style.margin= "200px";

let input = document.createElement("input");
input.setAttribute("type","text");
input.id="country"

let button = document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="click Me";
button.style.margin="15px";
button.addEventListener("click",getdata);

div.append(input,button);
document.body.append(div);

async function getdata() {
    let res = document.getElementById("country").value;
    try {
        let res1 = await  fetch(`https://api.covid19api.com/total/country/${res}`);
        let result = await res1.json();
        index=result.length-1;
        document.writeln(`Active:${result[index].Active} ; Deaths:${result[index].Deaths} ; Recovered:${result[index].Recovered}`);
    } catch (error) {
        console.log("error");
        
    }


}

