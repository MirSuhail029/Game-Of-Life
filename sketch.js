let sWidth=600, sHeight=sWidth; 
let boxes=sWidth/40;
let rows=sWidth/boxes, cols=sHeight/boxes;
let totalBoxes=rows*cols;
let array=[], array2=[] ;
let k=1,l=1;
let neighborSum;

function setup(){
    createCanvas(sWidth,sHeight);
    
    for(let i=0;i<totalBoxes;i++){
        array[i]=floor(random(2));
    }
    
    for(let i=0;i<totalBoxes;i++){
        array2[i]=0;
    }
}



function draw(){
    background(0);
    
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(array2[i*rows+j]==1){
                fill(0);
            }else{
                fill(255);
            }
            rect(j*boxes,i*boxes,boxes,boxes);  
        }
    }
    
    for(let i=0;i<totalBoxes;i++){
        if(i<39 && i>0){
            neighborSum=array[i+(rows*(rows-1)-1)]+array[i+(rows*(rows-1))]+array[i+(rows*(rows-1)+1)]+array[i-1]+array[i+1]+array[i+(-1+rows)]+array[i+rows]+array[i+(1+rows)];    
        }
        
        else if( i==40*k && k<39){
            neighborSum=array[(i-(1+rows))+rows*3]+array[i-rows]+array[i-(-1+rows)]+array[i-1]+array[i+1]+array[i+(-1+rows)]+array[i+rows]+array[i+(1+rows)]; 
            k++;
        }
        
        else if( i==40*l+39 && l<39){
            neighborSum=array[i-(1+rows)]+array[i-rows]+array[(i-(-1+rows))+rows*3]+array[i-1]+array[i+1]+array[i+(-1+rows)]+array[i+rows]+array[i+(1+rows)]; 
            l++;
        }
        
        else if (i>1560 && i<1600){
            neighborSum=array[i-(1+rows)]+array[i-rows]+array[i-(-1+rows)]+array[i-1]+array[i+1]+array[(i+(-1+rows)) % totalBoxes]+array[(i+rows) % totalBoxes]+array[(i+(1+rows)) % totalBoxes];
            }
        
        else if(i==0 || i==39 || i==1560 || i==1600){
            neighborSum=1;
        }
        
        
        
        else{
            neighborSum=array[i-(1+rows)]+array[i-rows]+array[i-(-1+rows)]+array[i-1]+array[i+1]+array[i+(-1+rows)]+array[i+rows]+array[i+(1+rows)];    
        }
        
        if(array[i]==1){
                if(neighborSum>=2 &&    neighborSum<4){
                    array2[i]=1;
                }
                else if (neighborSum<2){
                    array2[i]=0;
                }
                else if(neighborSum>3){
                    array2[i]=0;
                }
            }else{
                if(neighborSum==3){
                array2[i]=1;
            }
            }
    }
    
    for(let i=0;i<totalBoxes;i++){
        array[i]=array2[i];
    }
    
}