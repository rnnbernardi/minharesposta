function solucao(precosCarrinho: number[], minimoParaDesconto: number, desconto: number): number {
	// seu código aqui
	let total:number = 0;
    let carteira: number = 0;
    for(let precos of precosCarrinho){
        total += precos;
        }
    if(total > minimoParaDesconto){
        carteira = total - desconto;
        return carteira;
    }else{}
}
