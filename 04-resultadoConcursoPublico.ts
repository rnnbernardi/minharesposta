function solucao(aprovados: string[], numeroInscricao: string): string {
	// seu código aqui
	let status =  false;
    let frase:string;
    for (let ind of  aprovados){
        if(ind == numeroInscricao){
            status = true;
            break;
        }
    }
    if (status == true){
        frase = "APROVADO";
        return frase;
    }else{
        frase = "REPROVADO";
        return frase;
    }
}
