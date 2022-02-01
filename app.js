
//Amount to  pay for specific places
var board=[500,1000,1200,1400,1600,1800,800,400,2000,600,800,700,800,200,300,100,800,100,200,2000];
const player1_button = document.getElementById('btn1');
const player2_button = document.getElementById('btn2');
const printAmt1 = document.getElementById('player1');
const printAmt2 = document.getElementById('player2');



player1_button.addEventListener('click',rolldice1);
player2_button.addEventListener('click',rolldice2);


//  array
var player1=["player1",0,10000];
var player2=["player2",0,10000];

// player-1 rolling dice 
function rolldice1(){
    let position=Math.floor(Math.random()*6)+1;
   
    changePosition1(player1[1],position);
}
// player-2 rolling dice
function rolldice2(){
    let position=Math.floor(Math.random()*(6)+1);
    
    changePosition2(player2[1],position);
}
// update player-1 position
function changePosition1(old,currentPos){
    var newPosition=old+currentPos;
    
    if(newPosition>20)
    {
        var updatedpos;
        updatedpos=newPosition-20;
        player1[1]=updatedpos;
        
            var element=document.getElementsByTagName("p");
            for(let i=0;i<element.length;i++)
            {
                //element[i].parentElement.style.backgroundColor="white";
                if(element[i].parentElement.style.backgroundColor=="red")
                {
                    element[i].parentElement.style.backgroundColor="white";
                }
             if(player1[1]===parseInt(element[i].innerHTML))
             {
                element[i].parentElement.style.backgroundColor="red";
                
             }
            }
        changeMoney_1(player1[1]);
    }
     else
    {
        player1[1]=newPosition;
        var element=document.getElementsByTagName("p");
           
            for(let i=0;i<element.length;i++)
            {
                //element[i].parentElement.style.backgroundColor="white";
                if(element[i].parentElement.style.backgroundColor=="red")
                {
                    element[i].parentElement.style.backgroundColor="white";
                }
             if(player1[1]===parseInt(element[i].innerHTML))
             {
               //element[i].style.backgroundColor="red";
               element[i].parentElement.style.backgroundColor="red";
               
             }
            }
        changeMoney_1(player1[1]);
    }
    
}
// update player-2 position
function changePosition2(old,currentPos){
    var newPosition=old+currentPos;
    
    if(newPosition>20)
    {
        var updatedpos;
        updatedpos=newPosition-20;
        player2[1]=updatedpos;
        var element=document.getElementsByTagName("p");
             for(let i=0;i<element.length;i++)
            {
                //element[i].parentElement.style.backgroundColor="white";
                if(element[i].parentElement.style.backgroundColor=="blue")
                {
                    element[i].parentElement.style.backgroundColor="white";
                }
             if(player2[1]===parseInt(element[i].innerHTML))
             {
                element[i].parentElement.style.backgroundColor="blue";
                
             }
            }
        //console.log("player-2",player2[1]);
        changeMoney_2(player2[1]);
    }
    else
    {
        player2[1]=newPosition;
        var element=document.getElementsByTagName("p");
             for(let i=0;i<element.length;i++)
            {
                //element[i].parentElement.style.backgroundColor="white";
                if(element[i].parentElement.style.backgroundColor=="blue")
                {
                    element[i].parentElement.style.backgroundColor="white";
                }
             if(player2[1]===parseInt(element[i].innerHTML))
             {
                element[i].parentElement.style.backgroundColor="blue";
                
             }
            }
        changeMoney_2(player2[1]);
    }
    
    
 
}
// update the money of player1

function changeMoney_1(p1){
    var updateMoney=0;
    if(p1<board.length)
    {
        //Adding Bonus
        if((p1==20) || (p1==9) ||(p1==1)){
            updateMoney=player1[2]+board[p1-1];
        }
        else{
        updateMoney=player1[2]-board[p1-1];
        }
    }

    else
   {
      p1=p1%19;
      //Adding Bonus
      if((p1==20) || (p1==9)||(p1==1))
        {
          updateMoney=player1[2]+board[p1-1];
        }
       else
         {
           updateMoney=player1[2]-board[p1-1];
         }
    }
    player1[2]=updateMoney;

if(player1[2]<=0)
{
    printAmt1.innerHTML=0;
    window.location.href='./lose.html';
}
else
{
    printAmt1.innerHTML=player1[2];
}

}
// update the money of player1
function changeMoney_2(p2)
{
    var updateMoney=0;
    if(p2<board.length)
     {
      //Adding Bonus
    
        if((p2==20) || (p2==9) ||(p2==1))
        {
        updateMoney=player2[2]+board[p2-1];
        }
        else{
            updateMoney=player2[2]-board[p2-1];
            }
     }
    
    else
    {
        p2=p2%19;
        //Adding Bonus
        if((p2==20) || (p2==9)||(p2==1))
        {
            updateMoney=player2[2]+board[p2-1];
        }
        else
        {
        updateMoney=player2[2]-board[p2-1];
        }
    }
    player2[2]=updateMoney;
    if(player2[2]<=0)
    {
        printAmt2.innerHTML=0;
        //alert("Playert1 Won Hurray...");
        window.location.href='./win.html';
        
    }
    else
    {
    printAmt2.innerHTML=player2[2];
    
    
    }
}