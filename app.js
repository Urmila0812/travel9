
const burgerMenu = document.getElementById('burgerMenu')
let menuOpen = false;
burgerMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!menuOpen) {
        let elems = document.getElementsByClassName('nav-item-mobile-link');
        for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';
        }
        menuOpen = true;
    }else{
        let elems = document.getElementsByClassName('nav-item-mobile-link');
        for (let i=0;i<elems.length;i+=1){
        elems[i].style.display = 'none';
        }
        menuOpen = false;
    }
})

const vizag = document.querySelector("#vizInt")
const chennai = document.querySelector("#cheInt")
const banglore = document.querySelector("#banInt")
const kerala = document.querySelector("#kerInt")
const mumbai = document.querySelector("#mubInt")
const cgst = document.querySelector("#cgstInt")
const sgst = document.querySelector("#sgstInt")
const totalgst = document.querySelector("#totalInt")

const vizgBtn = document.getElementById('vizag-btn')
vizgBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = vizag.value * 5 / 100;
    cgst.value = CGST
    const SGST = vizag.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(vizag.value) + CGST+SGST;
    totalgst.value = Total
})

const chennaiBtn = document.getElementById('chennai-btn')
chennaiBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = chennai.value * 5 / 100;
    cgst.value = CGST
    const SGST = chennai.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(chennai.value) + CGST+SGST;
    totalgst.value = Total
})

const bangBtn = document.getElementById('bang-btn')
bangBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = banglore.value * 5 / 100;
    cgst.value = CGST
    const SGST = banglore.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(banglore.value) + CGST+SGST;
    totalgst.value = Total
})

const keralaBtn = document.getElementById('kerala-btn')
keralaBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = kerala.value * 5 / 100;
    cgst.value = CGST
    const SGST = kerala.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(kerala.value) + CGST+SGST;
    totalgst.value = Total
})

const mumbaiBtn = document.getElementById('mumbai-btn')
mumbaiBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const CGST = mumbai.value * 5 / 100;
    cgst.value = CGST
    const SGST = mumbai.value * 2.5 / 100;
    sgst.value = SGST
    const Total = parseInt(mumbai.value) + CGST+SGST;
    totalgst.value = Total
})

 const paynow = document.getElementById("pay-btn");

 paynow.addEventListener('click',(e)=>{
     alert ("Booked successfully")
 })

 

const fullimage = document.getElementById("fullimg")
const expandedimg = document.getElementById("expandImg")
const closeBtn = document.getElementById("img-btn")
const images = document.querySelectorAll(".images")


images.forEach((image)=>{
    image.addEventListener('click',function(){
        expandimg(image);
    });
});
closeBtn.addEventListener('click',function(){
    imgbtn();
});

function expandimg(image){
    expandedimg.src = image.src;
    fullimage.style.display = 'block';
}
function imgbtn(){
    fullimage.style.display = 'none';
}
 