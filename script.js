

// Throttling Function
const throttleFunction=(func, delay)=>{

  let prev = 0;
  return (...args) => {
    
    let now = new Date().getTime();
 
    // console.log(now-prev, delay);
     
    if(now - prev> delay){
      prev = now;
 
      return func(...args); 
    }
  }
}
document.querySelector(".content")
.addEventListener("mousemove",
  throttleFunction((dets)=>{
  console.log("chal gya");
// jitni baar mousemove hoga utni baar mouse move hoga
var div = document.createElement("div");
div.classList.add("imgdiv");
div.style.left = dets.clientX+'px';
div.style.top = dets.clientY+'px';
document.body.appendChild(div)

var img = document.createElement("img");
img.setAttribute("src" , "https://images.unsplash.com/photo-1567878673942-be055fed5d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a3Jpc2huYSUyMGFuZCUyMHJhZGhhfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60");
div.appendChild(img);
    
gsap.to(img,{
  y:"0",
  ease: Power2,
  duration: 0.7
})

setTimeout(function(){
div.remove();
} ,2000)
}, 400));
