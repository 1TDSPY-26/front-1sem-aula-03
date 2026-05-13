const pessoa = {
    nome : "Gustavo",
    idade : 21,
    casado : false,
    email : "gustavo@example.com"
}

console.log(pessoa.nome + " tem " + pessoa.idade + " anos " + (pessoa.casado ? "e é casado." : "e não é casado.") + " Seu email é: " + pessoa.email);

console.log(`${pessoa.nome} tem ${pessoa.idade} anos ${(pessoa.casado ? "e é casado." : "e não é casado.")} Seu email é: ${pessoa.email}`);
