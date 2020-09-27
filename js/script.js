var switchElem=document.getElementById("customSwitches")
var basic=document.getElementById("text1")
var pro=document.getElementById("text2")
var master=document.getElementById("text3")
switchElem.addEventListener("click",function(){
    if(this.checked) {
        basic.innerText="$199.99"
    pro.innerText="$249.99"
    master.innerText="$399.99"
        
    } else {
        basic.innerText="$19.99"
    pro.innerText="$24.99"
    master.innerText="$39.99"
        
    }
    

})