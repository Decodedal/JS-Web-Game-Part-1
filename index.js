
function newimg(url,left,bottom){
let obj = document.createElement('img')
obj.src = url
obj.style.position = 'fixed'
obj.style.left = left + "px"
obj.style.bottom = bottom +'px'
document.body.append(obj)
return obj
}

newimg('assets/green-character.gif',"100","100")
newimg("assets/pine-tree.png","450","200")
newimg("assets/sheild.png","165","185")
newimg("assets/staff.png","600","100")






// let pineTree =document.createElement("img")
// pineTree.src = "assets/pine-tree.png"
// pineTree.style.position = "fixed"
// pineTree.style.left = "450px"
// pineTree.style.bottom = "200px"
// document.body.append(pineTree)