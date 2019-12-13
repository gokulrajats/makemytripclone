const addOffer = () => {
    document.getElementById("root").style.filter="blur(3px)";
    document.getElementById("add").style.display="block";
}
let ids=0;
const main_div1 = document.getElementsByClassName("slick-track");
const cloned=main_div1["0"].childNodes[1];
const clonedSlide=cloned.cloneNode(true);
const offerSubmit = () => {
    const offerName=document.getElementById("offername").value;
    const offerDescription=document.getElementById("offerDes").value;
    const extraOffer=document.getElementById("extraOff").value;
    const coupon=document.getElementById("coupon").value;
    const imgUrl=document.getElementById("image").value;
    const priority=document.getElementById("ppty").value;
    document.getElementById("root").style.filter="none";
    document.getElementById("add").style.display="none";
    clonedSlide.childNodes[1].firstElementChild.firstElementChild.firstElementChild.childNodes[3].firstElementChild.innerText=offerName;  
    clonedSlide.childNodes[1].lastElementChild.childNodes[1].firstElementChild.childNodes[3].childNodes[3].innerText=offerDescription;
    clonedSlide.childNodes[1].firstElementChild.firstElementChild.firstElementChild.childNodes[3].lastElementChild.innerText=extraOffer;  
    clonedSlide.childNodes[1].firstElementChild.firstElementChild.childNodes[3].childNodes[3].firstElementChild.innerText="COUPON : "+coupon;
    clonedSlide.childNodes[1].lastElementChild.childNodes[1].firstElementChild.firstElementChild.childNodes[1].childNodes[1].src=imgUrl;
    if(priority==5){
        var divs = document.createElement("div");
        divs.id=ids;
        var slick_node=document.getElementById("slicks");
        
        var tempNode=clonedSlide.cloneNode(true);
        divs.appendChild(tempNode);
        if(ids==0){
        slick_node.insertBefore(divs,document.getElementById("highPriority"));
        }
        else{
            slick_node.insertBefore(divs,document.getElementById(ids-1));
        }
        // document.getElementById("highPriority").prepend(divs);
        ids=ids+1;
 
    }
    else if (priority>2){
        var divs = document.createElement("div");
        divs.id=ids;
        var slick_node=document.getElementById("slicks");
        
        var tempNode=clonedSlide.cloneNode(true);
        divs.appendChild(tempNode);
        if(ids==0){
        slick_node.insertBefore(divs,document.getElementById("avgPriority"));
        }
        else{
            slick_node.insertBefore(divs,document.getElementById(ids-1));
        }
        // document.getElementById("highPriority").prepend(divs);
        ids=ids+1;
        // document.getElementById("avgPriority").prepend(divs);
       
    }
    else if(priority>0){
        var divs = document.createElement("div");
        divs.id=ids;
        var tempNode=clonedSlide.cloneNode(true);
        divs.appendChild(tempNode);

        document.getElementById("lowPriority").appendChild(divs);
        ids=ids+1;
        
    }
}
let count=0;
let root = document.documentElement;
let trans=0;
const superClick = () =>{
    count=count+1;
    document.getElementById("slicks").setAttribute("class", " slick-track scroll");
    if(count>0 && trans<=0){
        root.style.setProperty("--xval",trans+"px");
        trans=trans+(-956);
        console.log(trans);
    }
    else if(trans>=0){
        trans=0;
        root.style.setProperty("--xval",trans+"px");
        count=0;
    }
}
let scount=0;
const prevOff = () =>{
    scount=count-1;
    // document.getElementById("slicks").setAttribute("class", " slick-track scroll");
    if(scount>0 && trans <=0){
        root.style.setProperty("--xval",trans+"px");
        trans=trans-(-956);
        console.log(trans);

    }
    else if(trans>=0)
    {
        trans=0;
        root.style.setProperty("--xval",trans+"px");
        count=0;
    }
}
MotionUI.animateIn('#add', 'fade-in');

// You can also pass a callback that runs when the transition finishes
MotionUI.animateOut('#add', 'fade-out', function() {
  console.log('Transition done!');
});




     
 