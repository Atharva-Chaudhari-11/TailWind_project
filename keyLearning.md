```
Key Learning

1) we can provide our variable with the some color or font value || for screen so we can use that property using the set names

2) group property --> for creating a group and attach to the other property so that property also hover with the group one

3)max-w-4xl -- this also the way to give the width for mobile view

4)w-fit -- to fit the width according to content

5) aplly the primary size , font ,  or property for nody h1,h2,h3 or any tag go though the scc file

6) leading -- for line height

7) -scale-x-100 - it will mirror the element on horizonlty and `100` is  value means the element is scaled to its full size, and the negative sign - flips it.

8) IntersectionObserver -->

    step-1 -> creating the observer 
        ```
        function setIntersectObserver(element,RtL,speed){
                const intersecttionCallBack = (entries)=>{
                    const isIntersecting = entries[0].isIntersecting;
                    console.log(element,isIntersecting)
                }
                 const intersectionObserver = new IntersectionObserver(intersecttionCallBack);

                intersectionObserver.observe(element)
            }
        ```

     step-2 ->
       ```
       add the scroll event on the element if it is isIntersecting
       [
        if(isIntersecting){
            document.addEventListener("scroll", handleScroll)
        }else{
            document.removeEventListener("scroll", handleScroll)
        } ]
            
        hsndleScroll(){
            //getBoundingClientRect it contains some property like top , bottom ,left ,right
            const translateX = (window.innerHeight - element.getBoundingClientRect().top) *speed
            //small size so now we have to add the inital values of translateX
           let Totaltranslate = 0
            if(LtR){
                Totaltranslate = translateX + initialLtR
            }else{
                Totaltranslate = -(translateX + initialRtL)
            }
            element.style.transform = `translateX(${Totaltranslate}px)`;
        }
     ```


*** calling function
setIntersectObserver(line1,true,0.15)
setIntersectObserver(line2,false,0.15)
setIntersectObserver(line3,true,0.15)


9) Aria-Control 
        The aria-controls attribute in HTML is part of the ARIA (Accessible Rich Internet  Applications) specification. It's used to enhance the accessibility of web content, especially for users who rely on assistive technologies like screen  readers.

        Explanation of aria-controls:
            Purpose: The aria-controls attribute indicates that the element it is applied to controls another element on the page. It creates an association between the controlling element and the controlled element.
            
            Usage: The value of aria-controls should be the id of the element that is being controlled. This tells assistive technologies that there is a 
            relationship between the two elements.
            
              The <dt> element has the aria-controls="faq-1" attribute.
        The value of aria-controls is faq-1, which is the id of the <dd> element that follows it.

10( from-pink-400 via-amber-50
        to-yellow-100  backgorund)



        // "postcss": "^8.4.41",
// "vite": "^5.4.0"
```
