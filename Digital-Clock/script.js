document.querySelector('#clock')
let date=new Date()


setInterval(function(){
  let date=new Date()
  // console.log(date.toLocaleString())
  clock.innerHTML=date.toLocaleTimeString()
},1000)