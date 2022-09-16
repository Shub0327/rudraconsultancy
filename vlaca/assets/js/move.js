window.addEventListener('scroll', (e) => {

    const target = document.querySelectorAll('.scroll')
    const windowOffset = window.pageYOffset
   
    let index = 0, length = target.length 

    if(windowOffset < window.innerHeight){
        //The target is still on the screen so continue with the affect
        for(index; index < length; index++){
            let pos = window.pageYOffset * target[index].dataset.rate
            target[index].style.display = 'block'
            target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)'
        }
    }else{
        //The target is no longer on the screen so we don't really need it to be active
        for(index; index < length; index++){
            target[index].style.display = 'none'
        }
    }
})