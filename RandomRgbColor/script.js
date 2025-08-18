const generateRGBColor=()=>{
   const randomNum_r= Math.floor(Math.random()*255)
   const randomNum_g= Math.floor(Math.random()*255)
   const randomNum_b= Math.floor(Math.random()*255)

   return `rgb(${randomNum_r},${randomNum_g},${randomNum_b})`
}
const updateColor=()=>{
    const color=generateRGBColor()
const colorBox= document.getElementById('colorBox')
const colorCode= document.getElementById('color-code')

colorBox.style.backgroundColor=color;
colorCode.innerText=color
}
const copyColorCode=()=>{
const colorCode=document.getElementById('color-code')
const inputTag=document.createElement('input')
document.body.appendChild(inputTag)
inputTag.value=colorCode.innerText
inputTag.select()
document.execCommand('copy')
document.body.removeChild(inputTag)
alert('color Copied to Clipboard')
}
document.getElementById('copycode').addEventListener('click',()=>{
copyColorCode()
})
// document.getElementById('new-color').addEventListener('click',generateNewColor())
function generateNewColor(){

updateColor()
}
