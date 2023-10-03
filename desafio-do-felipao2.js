let rankReturn = calculaRank(1800)
console.log(`"O rank do personagem com esse número de vitórias é: ${rankReturn}"`)


function calculaRank(vitorias = 0, derrotas = 0){
    let saldo = vitorias - derrotas
    if (saldo < 10) {rank = "Ferro";
	    }	else if (11 < saldo && saldo <= 20){rank = "Bronze";
    	}	else if (21 < saldo && saldo <= 50){rank = "Prata";
    	}	else if (51 < saldo && saldo <= 80){rank = "Ouro";
    	}	else if (81 < saldo && saldo <= 90){rank = "Diamante";
    	}   else if (91 < saldo && saldo <= 100){rank = "Lendário";
    	}	else {rank = "Imortal";
    } return rank
}