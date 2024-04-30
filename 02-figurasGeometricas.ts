function solucao(quantidadeLados: number):number{
	// seu código aqui
	let forma:string;
    switch(quantidadeLados){
        case 3:
            forma = "TRIANGULO"
            return forma;
            break;
        case 4:
            forma = "QUADRILATERO"
            return forma;
            break;
        case 5:
            forma = "PENTAGONO"
            return forma;
            break;
        case 6:
            forma = "HEXAGONO"
            return forma;
            break;
        case 7:
            forma = "HEPTAGONO"
            return forma;
            break;
    }
}
