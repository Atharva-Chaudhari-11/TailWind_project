const menuBtn = document.getElementById('menuOptions')
function onClickHandler(){
    menuBtn.classList.toggle('hidden')
}
let initialTranslateLtR = -48 *4; 
let initialTranslateRtL = 38 *4;

function setIntersectObserver(element,isLtR,speed){
    const intersecttionCallBack = (entries)=>{
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener("scroll", handleScroll)
        }else{
            document.removeEventListener("scroll", handleScroll)
        }
    } 
    const intersectionObserver = new IntersectionObserver(intersecttionCallBack);
    
    intersectionObserver.observe(element)

    function handleScroll(){
        const translateX = (window.innerHeight-element.getBoundingClientRect().top)*speed
        let totaltranslate = 0;
        if(isLtR){
            totaltranslate = initialTranslateLtR + translateX
        }else{
            totaltranslate = -(initialTranslateRtL + translateX)
        }
        element.style.transform = `translateX(${totaltranslate}px)`;
    }
}

const line1 = document.getElementById("line-1")
const line2 = document.getElementById("line-2")
const line3 = document.getElementById("line-3")
const line4 = document.getElementById("line4")
setIntersectObserver(line1,true,0.15)
setIntersectObserver(line2,false,0.15)
setIntersectObserver(line3,true,0.15)
setIntersectObserver(line4,true,0.8)




const dtElement = document.querySelectorAll('dt')

dtElement.forEach(element =>{
    element.addEventListener("click",()=>{
        const dtController = element.getAttribute('aria-controls')
        const ddControllerValue = document.getElementById(dtController)
        const arrowController = element.querySelectorAll('i')[0]

        ddControllerValue.classList.toggle('hidden')
        arrowController.classList.toggle('rotate-180')

    })
})