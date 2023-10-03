let rankReturn = calculaRank(1800)
console.log(`"O rank do personagem com esse número de vitórias é: ${rankReturn}"`)


function calculaRank(vitorias){
    if (vitorias < 10) {rank = "Ferro";
	    }	else if (11 < vitorias && vitorias <= 20){rank = "Bronze";
    	}	else if (21 < vitorias && vitorias <= 50){rank = "Prata";
    	}	else if (51 < vitorias && vitorias <= 80){rank = "Ouro";
    	}	else if (81 < vitorias && vitorias <= 90){rank = "Diamante";
    	}   else if (91 < vitorias && vitorias <= 100){rank = "Lendário";
    	}	else {rank = "Imortal";
    } return rank
}