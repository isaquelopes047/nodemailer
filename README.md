# PROJETO NODEMAILER

<p>Esse projeto foi feito com a intenção de acelerar o envio de e-mails padrões, eu tinha um problema onde tinha a necessidade de autorizar o abastecimento de ARLA 32 aos postos de combustíveis. O motorista encaminha uma mensagem solicitando o abastecimento e era feito um e-mail autorizado, porque não criar um formulário onde o e-mail já estará pré definido, e o usuário somente vai preencher os dados que não são constantes?</p>

<p>Pensando nisso criei com a lib do nodemailer esse projeto, onde o usuario que vai autorizar o abastecimento precisa preencher somente três informaçoes necessarias</p>

<li> E-mail do posto de destino </li>
<li> Nome do motorista </li>
<li> Frota ( numero de identificação do caminhão ) </li>

<br />

<p>Com essas três informações preenchidas por um formulário no front-end, a aplicação alem de encaminhar o e-mail ao posto de destino, pode colocar em cópia pessoa que são do interesse do e-mail também, isso pode ser pré definido no arquivo .env e colocado como variável de ambiente no arquivo ListTo/listContacts.js, assim podemos ter segurança nos e-mails que vão receber a copia</p>

<p>As configurações do e-mail que vai enviar devem ser colocadas no arquivo index.js na linha 18 a linha 29, porem suas credencias você deve criar no arquivo .env e não esquecer de colocar no .gitignore</p>

> ~ Isaque Lopes