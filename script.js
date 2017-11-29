var squares=document.querySelectorAll(".square");
var counter=0;  //number of plays
var rawwin=[3]; //to pain the winning squares
var winner=0;   //no winner yet.
var myid;       //to paint the winning squares.
for(var i=0;i<squares.length;i++){
        squares[i].addEventListener("click",clicked);
}
//matrix representing the grid.
var r=new Array(3);
for(i=0;i<r.length;i++){
    r[i]= new Array(3);
}
//intialization
for(i=0;i<3;i++)
    for(j=0;j<3;j++)
        r[i][j]=0;
                      
var turn='X';
function clicked(e){
    if(winner==1){     //we have a winner
        return;
    }  
    //array indexes
    var i=parseInt(this.id.toString().substr(1).substr(0,1));//convert the name of the square to string, then chop the first letter 
    var j=parseInt(this.id.toString().substr(1).substr(1,1));//divide the string into two strings and convert each one to a number
    if(r[i][j]==0)   //check to see the square has not been clicked yet.
    {
        if(turn==='X')
            {
                turn='O';
                this.classList.add("redcolor");//change color
            }
        else
            {
               turn='X';
            }
        counter++;
        this.innerHTML=turn;
        r[i][j]=turn;                   //write the symbole into the matrix
        if(counter>4){  //>4 plays is a possible win
                if(r[i][0]==r[i][1] && r[i][2]==r[i][0])
                    {
                         winner=1;          //row win
                         myid="a"+i.toString();
                        for(var t=0;t<3;t++){ //change the color for the winner
                            rawwin[t]=document.getElementById(myid+(t.toString()));
                            rawwin[t].classList.add("win");
                        }
                    }
                else if(r[0][j]==r[1][j] && r[2][j]==r[0][j])
                    {
                        winner=1;          //column win
                        myid="a";
                        for(var t=0;t<3;t++){ //change the color for the winner
                            rawwin[t]=document.getElementById(myid+(t.toString())+j.toString());
                            rawwin[t].classList.add("win");
                        }
                    }
                else if(r[0][0]==r[1][1] && r[0][0]==r[2][2]){
                        winner=1;           //diagnosal win
                        myid="a";
                        for(var t=0;t<3;t++){ //change the color for the winner
                            rawwin[t]=document.getElementById(myid+(t.toString())+(t.toString()));
                            rawwin[t].classList.add("win");
                        }
                    }
                else if(r[2][0]==r[1][1] && r[2][0]==r[0][2]){
                       winner=1;           //diagnosal win
                       rawwin[0]=document.getElementById("a02");//change the color for the winner
                       rawwin[1]=document.getElementById("a11");
                       rawwin[2]=document.getElementById("a20");
                       for(var t=0;t<3;t++)
                          rawwin[t].classList.add("win");
                    }    
        }                                            
    }
}