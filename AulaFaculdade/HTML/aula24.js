function alterar(){
    let objc = document.getElementById("c1")
    let objx = document.getElementById("x1")
    let objy = document.getElementById("y1")
    objc.style.left = `${objx.value}px`;
    objc.style.top = `${objy.value}px`;
    objc.innerHTML = `(${objx.value}, ${objy.value})`
}