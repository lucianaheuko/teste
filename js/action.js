var one = document.getElementById("one");


var activate = function(){
	one.className = 'hugo';

	one.removeEventListener('click');
	
	one.addEventListener('click', restore);
};


var restore = function(){
	one.className="none";
	one.removeEventListener('click');
	one.addEventListener('click', activate);
};


restore();


// recebe como primeiro argumento a funcao a ser executada apos X tempo,
// sendo X o segundo argumento
// setTimeout(activate,1000);
// setTimeout(restore,2000);
