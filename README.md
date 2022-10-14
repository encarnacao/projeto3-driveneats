# Projeto #03 - DrivenEats

Temos nosso primeiro projeto com a implementação de JavaScript. Devemos criar um site mobile do DrivenEats, um restaurante que *supostamente* entrega sua refeição em 6 minutos.

O usuário deve selecionar um combo de prato, comida e sobremesa, realizando essa escolha o pedido é enviado diretamente para WhatsApp do restaurante.

# Requisitos

## Versionamento

+ Uso do Github para Versionamento. A cada função implementada deve ser feito um commit.

## Layout

+ É necessário aplicar o layout para mobile seguindo o projeto do [Figma]. Não é necessário a criação de um site para desktop;

+ Os itens devem ter preços variados dentro da mesma categoria;

+ As fontes a serem utilizadas são **Righteous**(nome do restaurante e títulos das categorias) e **Roboto**(demais textos);

+ Alguns elementos precisam ter sombreamento, e os produtos precisam rolar horizontalmente (utilizando `overflow-x: scroll`).

## Seleção de Itens

+ Ao clicar sobre um item, ele deve ser marcado como selecionado; (Tela 3 no Figma)

+ Apenas um item pode ser selecionado em cada categoria. Caso mais de um seja selecionado, o anterior precisa ser desmcarcado;

+ Não é necessário desmacar um item já selecionado ao cicar novamente sobre ele.

## Botão de envio

+ Por padrão, o botão inicia desabilitado e nada acontece ao clicar sobre ele;

+ Quando três itens foram selecionados, seu layout muda. (Tela 5 no Figma)

+  Ao finalizar o pedido, o usuário deverá ser encaminhado para o **WhatsApp Web**, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida
    
    + **Dica**: Para criar um link que envia uma mensagem via WhatsApp, veja [essa página] de ajuda do WhatsApp.
    
    + **Dica 2**: Para preparar a mensagem para o formato que o WhatsApp espera, pesquise por uma função chamada `encodeURIComponent(minhaString)`
    
+  Essa mensagem deverá seguir este **formato** (igualzinho, sem nenhum caracter a mais):
    
    ```css
    Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27.70
    ```
    
    + **Dica**: para formatar um número decimal no formato 27.70, pesquise por `toFixed` 

# Bônus

+ Pedir nome e endereço após finalização do pedido através de dois `prompt`. Essas informações devem ser passadas pelo WhatsApp nesse **formato** (igualzinho, sem nenhum caracter a mais):

```
Olá, gostaria de fazer o pedido:
- Prato: Frango Yin Yang
- Bebida: Coquinha Gelada
- Sobremesa: Pudim
Total: R$ 27.70

Nome: Fulano
Endereço: Rua...
```

+ Confirme os dados do pedido ao clicar em "Finalizar pedido", em vez de ir para o WhatsApp direto. Revise a compra seguindo a tela Bônus disponível no Figma.
   
    
[Figma]: https://www.figma.com/file/TsltYvVQb0LYeYAdFC42aL/DrivenEats-(Copy)?node-id=0%3A1
[essa página]: https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat?lang=pt
