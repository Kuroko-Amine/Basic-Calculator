let rt=0;
let buffer="0";
let prev;


const screen=document.querySelector('.screen');

function Buttonclick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText=buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C' :
        buffer = '0';
        rt=0;
        break;
        case '=':
            if(prev===null){
                return 
            }
            flushOperation(parseInt(buffer));
            prev=null ;
            buffer = rt ;
            rt = 0 ;
            break ;
            case '←':
                if(buffer.length===1){
                    buffer='0';
                }else{
                    buffer=buffer.substring(0,buffer.length-1);
                }
                break ;
            case '+' :
            case '−' :
            case '×' :
            case '÷' :
                handleMath(symbol);
                break ;

    }
         

}


function handleMath(symbol){
    if(buffer==='0'){
        return;
    }

    const intbuffer= parseInt(buffer) ;
    if(rt===0){
        rt = intbuffer;
    }else{
        flushOperation(intbuffer);
    }
    prev = symbol;
    buffer='0';
}

function flushOperation(intbuffer){
    if(prev==='+'){
        rt+=intbuffer ;
    }else if(prev==='−'){
        rt-=intbuffer ;
    }else if(prev==='÷'){
        rt/=intbuffer;
    }else if(prev=== '×'){
        rt*=intbuffer;
    }
}


function handleNumber(numberst){
    if(buffer==='0'){
        buffer=numberst;
    }else{
        buffer+=numberst;
    }
}

function init(){
    document.querySelector('.calc_buts').addEventListener('click', function(event){
        Buttonclick(event.target.innerText);
    }) 
}

init();