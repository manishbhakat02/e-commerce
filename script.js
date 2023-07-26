window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('#header');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });
  const bar=document.getElementById('bar');
  const cros=document.getElementById('cross');
  const na=document.getElementById('navbar');
  if(bar){
    bar.addEventListener('click',()=>{
      na.classList.add('active');
    })
  }
  if(cros){
    cros.addEventListener('click',()=>{
      na.classList.remove('active');
    })
  }