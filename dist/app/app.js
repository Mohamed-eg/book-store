var  search =document.querySelector("#search");
var glass = document.querySelector('.fa-magnifying-glass');
var lib = document.querySelectorAll('.lib');
var lab1 = document.getElementById('lab1');
var lab2 = document.getElementById('lab2');
var lab3 = document.getElementById('lab3');
var lab4 = document.getElementById('lab4');
var lab5 = document.getElementById('lab5');
var lab6 = document.getElementById('lab6');
var lab7 = document.getElementById('lab7');
var left0 = document.querySelector('.left0');
var contaner = document.querySelector('.contaner');
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card6 = document.getElementById('card6');
var card7 = document.getElementById('card7');
var cards = document.querySelectorAll('.card');
var labels =document.getElementsByClassName('labels');
var navCH5 =document.getElementById('navCH5');
var mainu =document.getElementById('mainu');
var header1 =document.getElementById('header1');
var left =document.getElementById('left')
var i = 1 ;
var z= 0,m=0,t,y,h1=0,h2=0,h3=0,h4=0;
var right= document.getElementById('right');
var flotBtn =document.getElementById('flotBtn');
var body = document.getElementById('body');
var bookNumber=4;
var bar =document.querySelectorAll('.forsell');
var left1 =document.getElementById('left1');
var left2 =document.getElementById('left2');
var left3 =document.getElementById('left3');
var left4 =document.getElementById('left4');
var right1 =document.getElementById('right1');
var right2 =document.getElementById('right2');
var right3 =document.getElementById('right3');
var right4 =document.getElementById('right4');
var counter1 =document.getElementById('counter1');
var counter2 =document.getElementById('counter2');
var counter3 =document.getElementById('counter3');
var counter4 =document.getElementById('counter4');
const Theweb =document.querySelector('.Thewebsite');
const loder =document.querySelector('.loderFath');
const numberOfBooks= document.querySelector('.numberOfBooks');
const CardBtn =document.querySelectorAll('.CardBtn');
CardBtn.forEach((x)=>{x.addEventListener('click',addIt)});
// for(var i =0; i<CardBtn.length;i++){
//       CardBtn[i].addEventListener('click',addIt)
// }
function addIt(){
      NumperOfBuys= parseInt(numberOfBooks.innerHTML);
      NumperOfBuys=NumperOfBuys+1;
      numberOfBooks.innerHTML=`${NumperOfBuys}`;
      console.log(numberOfBooks.innerHTML);
      
}
//-------------------------------------------------------------
setTimeout(() => {
      Theweb.style.display='block';
      loder.style.display='none';
}, 000);
//-----------------------------------------------------------
window.addEventListener('scroll',()=>{
      const scrollabel =document.documentElement.scrollHeight - window.innerHeight-200;
      const scrolled =window.scrollY;
      if (scrolled>=scrollabel) {
            flotBtn.style.visibility='visible';  
      }
      else{
            flotBtn.style.visibility='hidden';
      }

})
//-------------------------------------------------------
setInterval(timeScroll,2000);
function timeScroll(){
     if (z<=contaner.clientWidth*2/contaner.childElementCount*3-5) {
      z=contaner.clientWidth*2/contaner.childElementCount+z;
      t=`${z}px`;
     }else{
           z=-z;
           t=`${z}px`;
     }
     bookNumber++;
     if (bookNumber==8) {
      bookNumber=1;
     }
  do1(z)
     contaner.style.marginLeft=`${t}`;
}
//---------------------------------------------------------------
right.onclick=()=>{
      if (z<=-contaner.clientWidth*2/contaner.childElementCount*3+5) {
            z=-z;
            y=`${z}px`;
            do1(z)
      }else{
            z=z-contaner.clientWidth*2/contaner.childElementCount*1;
            y=`${z}px`;
            do1(z);
       };   
      };
left.onclick=()=>{
if (z>=contaner.clientWidth*2/contaner.childElementCount*3-5) {
      z=-z;
      y=`${z}px`;
      do1(z);
      }else {
      z=z+contaner.clientWidth*2/contaner.childElementCount*1;
      y=`${z}px`;
      do1(z);
      };
    };
    //----------------------------------------------------
    function do1(n) {
      contaner.style.marginLeft=`${y}`;
      if (n<=contaner.clientWidth*2/contaner.childElementCount*3+5 && n>=contaner.clientWidth*2/contaner.childElementCount*3-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab1.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card1.classList.add('UP');
      };
      if (n<=contaner.clientWidth*2/contaner.childElementCount*2+5 && n>=contaner.clientWidth*2/contaner.childElementCount*2-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab2.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card2.classList.add('UP');
      };
      if (n<=contaner.clientWidth*2/contaner.childElementCount*1+5 && n>=contaner.clientWidth*2/contaner.childElementCount*1-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab3.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card3.classList.add('UP');
      };
      if (n<=5 && n>=-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab4.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card4.classList.add('UP');
      };
      if (n<=-contaner.clientWidth*2/contaner.childElementCount*1+5 && n>=-contaner.clientWidth*2/contaner.childElementCount*1-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab5.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card5.classList.add('UP') ;
      };      
      if (n<=-contaner.clientWidth*2/contaner.childElementCount*2+5 && n>=-contaner.clientWidth*2/contaner.childElementCount*2-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab6.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card6.classList.add('UP');  
      };  
      if (n<=-contaner.clientWidth*2/contaner.childElementCount*3+5 && n>=-contaner.clientWidth*2/contaner.childElementCount*3-5) {
            lib.forEach((x)=>{x.classList.remove('chicked')});
            lab7.classList.add('chicked');
            cards.forEach((o)=>{o.classList.remove('UP')});
            card7.classList.add('UP');          
      };  
     }
//----------------------------------------------------
search.onfocus = ()=>{
      glass.style.display='none';
}
//------------------------------------------------------
navCH5.onclick= ()=>{
      i=i*-1;
      if (i<0) {
      mainu.style.marginLeft='100%';
      navCH5.classList.add('clicked');
} else {
      mainu.style.marginLeft='200%';
      navCH5.classList.remove('clicked');
}
};
//---------------------------------------------------------
lab1.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab1.classList.add('chicked')
      z=contaner.clientWidth*2/contaner.childElementCount*3;
      contaner.style.marginLeft=`${z}px`;
      card1.classList.add('UP');
      card2.classList.remove('UP');
      card3.classList.remove('UP');
      card4.classList.remove('UP');
      card5.classList.remove('UP');
      card6.classList.remove('UP');
      card7.classList.remove('UP');
};
lab2.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab2.classList.add('chicked')
      z=contaner.clientWidth*2/contaner.childElementCount*2;
      contaner.style.marginLeft=`${z}px`;
      card2.classList.add('UP');
      card1.classList.remove('UP');
      card3.classList.remove('UP');
      card4.classList.remove('UP');
      card5.classList.remove('UP');
      card6.classList.remove('UP');
      card7.classList.remove('UP');
};
lab3.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab3.classList.add('chicked');
      z=contaner.clientWidth*2/contaner.childElementCount*1;
      contaner.style.marginLeft=`${z}px`;
       card3.classList.add('UP');
       card2.classList.remove('UP');
       card1.classList.remove('UP');
       card4.classList.remove('UP');
       card5.classList.remove('UP');
       card6.classList.remove('UP');
       card7.classList.remove('UP');
};
lab4.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab4.classList.add('chicked');
      z=0;
      contaner.style.marginLeft=`${z}px`;
       card4.classList.add('UP');
       card2.classList.remove('UP');
       card3.classList.remove('UP');
       card1.classList.remove('UP');
       card5.classList.remove('UP');
       card6.classList.remove('UP');
       card7.classList.remove('UP');
};
lab5.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab5.classList.add('chicked')
      z=-contaner.clientWidth*2/contaner.childElementCount*1;
      contaner.style.marginLeft=`${z}px`;
       card5.classList.add('UP');
       card2.classList.remove('UP');
       card3.classList.remove('UP');
       card4.classList.remove('UP');
       card1.classList.remove('UP');
       card6.classList.remove('UP');
       card7.classList.remove('UP');
};
lab6.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab6.classList.add('chicked')
      z=-contaner.clientWidth*2/contaner.childElementCount*2;
      contaner.style.marginLeft=`${z}px`
       card6.classList.add('UP');
       card2.classList.remove('UP');
       card3.classList.remove('UP');
       card4.classList.remove('UP');
       card5.classList.remove('UP');
       card1.classList.remove('UP');
       card7.classList.remove('UP');
};
lab7.onclick= ()=>{
      lib.forEach(
            (x)=>{
                  x.classList.remove('chicked')
            }
      ) 
      lab7.classList.add('chicked')
      z=-contaner.clientWidth*2/contaner.childElementCount*3;
      contaner.style.marginLeft=`${z}px`;
       card7.classList.add('UP');
       card2.classList.remove('UP');
       card3.classList.remove('UP');
       card4.classList.remove('UP');
       card5.classList.remove('UP');
       card6.classList.remove('UP');
       card1.classList.remove('UP');
};

function moveRight(x1,x2,x3,x4){
      if (x1===true) {
      h1=h1+counter1.clientWidth*2/counter1.childElementCount;
      counter1.style.marginLeft=`${h1}px`;
      console.log(h1+"h1");
      }else{
                  if (x2=== true) {
            h2=h2+counter2.clientWidth*2/counter2.childElementCount;
            counter2.style.marginLeft=`${h2}px`;
            console.log(h2+"h2");
      }else{
                  if(x3===true) {
                  h3=h3+counter3.clientWidth*2/counter3.childElementCount;
                  counter3.style.marginLeft=`${h3}px`;
                  console.log(h3+"h3");
            }else{
                        if(x4===true){
                  h4=h4+counter4.clientWidth*2/counter4.childElementCount;
                  counter4.style.marginLeft=`${h4}px`;
                        console.log(h4+"h4")
                  };
                    }

                     }
     
      }
}
function moveleft(x){
      if (x1===true) {
            h1=h1-counter1.clientWidth*2/counter1.childElementCount;
            counter1.style.marginLeft=`${h1}px`;
            console.log(h1+"h1");
            }else{
                        if (x2=== true) {
                  h2=h2-counter2.clientWidth*2/counter2.childElementCount;
                  counter2.style.marginLeft=`${h2}px`;
                  console.log(h2+"h2");
            }else{
                        if(x3===true) {
                        h3=h3-counter3.clientWidth*2/counter3.childElementCount;
                        counter3.style.marginLeft=`${h3}px`;
                        console.log(h3+"h3");
                  }else{
                              if(x4===true){
                        h4=h4-counter4.clientWidth*2/counter4.childElementCount;
                        counter4.style.marginLeft=`${h4}px`;
                              console.log(h4+"h4")
                        };
                          }
      
                           }
                        }     
}
left1.onclick= ()=>{moveRight(x1=true,x2=false,x3=false,x4=false);} ;
right1.onclick =()=>{moveleft(x1=true,x2=false,x3=false,x4=false);} ;
left2.onclick= ()=>{moveRight(x1=false,x2=true,x3=false,x4=false);} ;
right2.onclick =()=>{moveleft(x1=false,x2=true,x3=false,x4=false);} ;
left3.onclick= ()=>{moveRight(x1=false,x2=false,x3=true,x4=false);} ;
right3.onclick =()=>{moveleft(x1=false,x2=false,x3=true,x4=false);} ;
left4.onclick= ()=>{moveRight(x1=false,x2=false,x3=false,x4=true);} ;
right4.onclick =()=>{moveleft(x1=false,x2=false,x3=false,x4=true);} ;

