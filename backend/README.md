### GUIA

Adicionando os models: 
```knex migrate:latest```

#### Como está o formato de json até o momento: 

**Usuários:** 
```
{
    "username": "string",
    "email": "string",
    "imageURL": "string",
    "password": "string"
}
```

**Animais:** 
```
{
    "title": "string",
    "type": "String",
    "description": "string",
    "category": "string",
    "cep": "number", 
    "imageURL": "string"
}
```

#### Como ativar as chaves de segurança: 

**No terminal:** 
```
generatekeys.sh
```

*Logo em seguida pressione enter em todas as opções sem preencher nada. O resultado irá gerar uma chave 3 arquivos indicando as chaves únicas*

### Inicando a API

**No terminal:** 
```
npm run start
```

#### Para usar os testes automatizados

**No terminal:**
```
npx jest
```

No momento, trata-se de uma arquitetura em MVC (Models, Views, Controllers), Para o uso do app *Adote-me* que logo estará disponível.

### Detalhes

**Ainda sendo implementado o socket.io e envios de emails, em alguns dias serão totalmente resolvidos.**

**Backend sendo criado com muito carinho por:** Luiz Lima