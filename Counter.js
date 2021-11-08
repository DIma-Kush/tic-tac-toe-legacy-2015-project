


var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');

var winScreen = document.getElementById('container');
var slime = document.getElementById('slime');
var quote = document.getElementById('quote');
var shadow = document.getElementById('shadow');

winScreen.style.display = 'none';

var move = 1;

 var blue = [9];
 var red = [9];
 var ri = 0;
 var bi = 0;

function restart(){
	move = 1;
	t1.style.background = "#DCDCCA";
	t2.style.background = "#DCDCCA";
	t3.style.background = "#DCDCCA";
	t4.style.background = "#DCDCCA";
	t5.style.background = "#DCDCCA";
	t6.style.background = "#DCDCCA";
	t7.style.background = "#DCDCCA";
	t8.style.background = "#DCDCCA";
	t9.style.background = "#DCDCCA";

	winScreen.style.display = 'none';
	slime.style.display = 'none';
	quote.style.display = 'none';
	shadow.style.display = 'none';

	arr = [];
}

var arr = [9];

function tileClick(tile){
	if( (tile.style.background != '#7C7CDE') & (tile.style.background != '#F23F51')
       & (move%2 != 0)){
        tile.style.background = '#7C7CDE';
    	switch(tile.id){
    		case 't1':
    		arr[0] = 'b';
    		break;
    		case 't2':
    		arr[1] = 'b';
    		break;
    		case 't3':
    		arr[2] = 'b';
    		break;
    		case 't4':
    		arr[3] = 'b';
    		break;
    		case 't5':
    		arr[4] = 'b';
    		break;
    		case 't6':
    		arr[5] = 'b';
    		break;
    		case 't7':
    		arr[6] = 'b';
    		break;
    		case 't8':
    		arr[7] = 'b';
    		break;
    		case 't9':
    		arr[8] = 'b';
    		break;
    	}
    }
    else{
	    if( (tile.style.background != '#7C7CDE') & (tile.style.background != '#F23F51')
	       & (move%2 == 0)){
	        tile.style.background = '#F23F51';
	    	switch(tile.id){
    		case 't1':
    		arr[0] = 'r';
    		break;
    		case 't2':
    		arr[1] = 'r';
    		break;
    		case 't3':
    		arr[2] = 'r';
    		break;
    		case 't4':
    		arr[3] = 'r';
    		break;
    		case 't5':
    		arr[4] = 'r';
    		break;
    		case 't6':
    		arr[5] = 'r';
    		break;
    		case 't7':
    		arr[6] = 'r';
    		break;
    		case 't8':
    		arr[7] = 'r';
    		break;
    		case 't9':
    		arr[8] = 'r';
    		break;
    	}
	    }
    }
    
    gameCheck();
    move++;
}


t1.addEventListener("click", function() {
    tileClick(t1);
});
t2.addEventListener("click", function() {
    tileClick(t2);
});
t3.addEventListener("click", function() {
    tileClick(t3);
});
t4.addEventListener("click", function() {
    tileClick(t4);
});
t5.addEventListener("click", function() {
    tileClick(t5);
});
t6.addEventListener("click", function() {
    tileClick(t6);
});
t7.addEventListener("click", function() {
    tileClick(t7);
});
t8.addEventListener("click", function() {
    tileClick(t8);
});
t9.addEventListener("click", function() {
    tileClick(t9);
});
// 0 - 1 - 2
// 3 - 4 - 5
// 6 - 7 - 8
function gameCheck(){
	if( (arr[0] == 'r' & arr[1] == 'r' & arr[2] == 'r')||
		(arr[3] == 'r' & arr[4] == 'r' & arr[5] == 'r')||
		(arr[6] == 'r' & arr[7] == 'r' & arr[8] == 'r')||
		(arr[0] == 'r' & arr[3] == 'r' & arr[6] == 'r')||
		(arr[1] == 'r' & arr[4] == 'r' & arr[7] == 'r')||
		(arr[2] == 'r' & arr[5] == 'r' & arr[8] == 'r')||
		(arr[0] == 'r' & arr[4] == 'r' & arr[8] == 'r')||
		(arr[2] == 'r' & arr[4] == 'r' & arr[6] == 'r')){
		winScreen.style.display = 'block';
		winScreen.style.background = '#F23F51';
		winScreen.innerHTML = "<span>ЧЕРВОНІ ВИГРАЛИ</span>";
		slime.style.display = 'block';
		quote.style.display = 'block';
		shadow.style.display = 'block';
        var Player1 = 100;
	}
	if( (arr[0] == 'b' & arr[1] == 'b' & arr[2] == 'b')||
		(arr[3] == 'b' & arr[4] == 'b' & arr[5] == 'b')||
		(arr[6] == 'b' & arr[7] == 'b' & arr[8] == 'b')||
		(arr[0] == 'b' & arr[3] == 'b' & arr[6] == 'b')||
		(arr[1] == 'b' & arr[4] == 'b' & arr[7] == 'b')||
		(arr[2] == 'b' & arr[5] == 'b' & arr[8] == 'b')||
		(arr[0] == 'b' & arr[4] == 'b' & arr[8] == 'b')||
		(arr[2] == 'b' & arr[4] == 'b' & arr[6] == 'b')){
		winScreen.style.display = 'block';
		winScreen.style.background = '#7C7CDE';
		winScreen.innerHTML = "<span>СИНІ ВИГРАЛИ</span>";
		slime.style.display = 'block';
		quote.style.display = 'block';
		shadow.style.display = 'block';
	}

if(		((arr[0] == 'b') ||  (arr[0] == 'r'))&
		((arr[1] == 'b') ||  (arr[1] == 'r'))&
		((arr[2] == 'b') ||  (arr[2] == 'r'))&
		((arr[3] == 'b') ||  (arr[3] == 'r'))&
		((arr[4] == 'b') ||  (arr[4] == 'r'))&
		((arr[5] == 'b') ||  (arr[5] == 'r'))&
		((arr[6] == 'b') ||  (arr[6] == 'r'))&
		((arr[7] == 'b') ||  (arr[7] == 'r'))&
		((arr[8] == 'b') ||  (arr[8] == 'r'))) {
	winScreen.style.display = 'block';
	winScreen.style.background = "#E8E8E8";
	winScreen.innerHTML = "<span>НІЧИЯ</span>";
	slime.style.display = 'block';
	quote.style.display = 'block';
	shadow.style.display = 'block';
}
}
var randQ;

var quoteArray = [
"Тисніть 'рестарт', швидше!",
"Як Ви думаєте, чому я такий веселий?",
"Думаю Вам час натискати 'рестарт'",
"Моя мама грає краще за Вас",
"Просто натисніть 'рестарт'",
"Капітошка? Ні, не чув...",
"Довго будете на мене дивитись?",
"Браузери не моя стихія...",
"Обожнюю цю гру!",
"Як Ви думаєте, чому я такий веселий?",
"Колись я жив біля лісу...",
];

setInterval(function() {
	randQ = Math.floor(Math.random( )*10);
	quote.innerHTML = quoteArray[randQ];
}, 7000);

