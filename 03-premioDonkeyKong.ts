function solucao(simbolo1: string, simbolo2: string, simbolo3: string):string{
	let frase:string;
    for (let cont:number = 0; cont < 2;){
        if(simbolo1 !== "<3"){
            	cont -= 1;
        	}else{
            	cont += 1;
        		}
        	if(simbolo2 !== "<3"){
            cont -= 1;
        	}else{ 
            	cont += 1;
        	}
        	if(simbolo3 !== "<3"){
            	cont -= 1;
        	}else{
            	cont += 1;
        	}
    		if(cont == 3){
        		frase = "GANHOU";
        		return frase;
    		}else{
        		frase = "PERDEU";
        		return frase;
    		}
    
		}
}

