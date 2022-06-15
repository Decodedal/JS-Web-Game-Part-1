
// function creates new images
function newimg(url,left,bottom){
let obj = document.createElement('img')
obj.src = url
obj.style.position = 'fixed'
obj.style.left = left + "px"
obj.style.bottom = bottom +'px'
document.body.append(obj)
return obj
}
// adding new images
newimg('assets/green-character.gif',"100","100")
newimg("assets/pine-tree.png","450","200")
newimg("assets/tree.png","200","300")
newimg("assets/pillar.png","350","100")
newimg("assets/crate.png","150","200")
newimg("assets/well.png","500","425")

// a function creates new items that dissapear on double click
function pickUp(url,left,bottom){
    let sword = newimg(url,left,bottom)

    sword.addEventListener("dblclick", function(){
         sword.remove()
    })
}
// objects ti be picked up 
pickUp("assets/sword.png","500","405")
pickUp("assets/sheild.png","165","185")
pickUp("assets/staff.png","600","100")





// let pineTree =document.createElement("img")
// pineTree.src = "assets/pine-tree.png"
// pineTree.style.position = "fixed"
// pineTree.style.left = "450px"
// pineTree.style.bottom = "200px"
// document.body.append(pineTree)