function progressbar(){
    let progressbar=document.querySelector('.progressbar')
    window.addEventListener('scroll',function(){
        let scrollY=window.scrollY
        let percent=scrollY/(document.body.offsetHeight - this.window.innerHeight)*100
        progressbar.style.width=`${percent}%`
    })    
}
progressbar()

//hide header
function hideHeader(){
    let lastScroll=0,
        header=document.querySelector('.header')
    document.addEventListener('scroll',function(){
        const scrollCurrent= window.pageYOffset
        if (scrollCurrent == lastScroll) return

        if (scrollCurrent > lastScroll && scrollCurrent > header.clientHeight){
            header.classList.add('hide')
        }else if (scrollCurrent<lastScroll){
            header.classList.remove('hide')
        }
        lastScroll=scrollCurrent
    })
}
hideHeader()

// //
// function changeClHeader(){
//     let slider=document.querySelector('.slider'),
//         header=document.querySelector('.header')

//     window.addEventListener('scroll',function(){
//         const scrollY = window.pageYOffset
//         if (scrollY > slider.clientHeight){
//             header.classList.add('active')
//         }else{
//             header.classList.remove('active')
//         }
//     })
// }
// changeClHeader()