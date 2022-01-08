# NodeJs

# Observações importandes
<img width="100%" src="https://miro.medium.com/max/1400/0*MNVJq_8e0SJoqZb5.jpg">
Para execultar o projeto é com o nodemo siga os seguintes passos.

<ol>
<li>yarn init => inicia o projeto</li>
<li>yarn add express --save => instalar o express</li>
<li>yarn add nodemon -D => instala o nodemon</li>
<li>No arquivo package.json acressente as seguintes linhas:
    <p>"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
}</p>
</li>
<li>yarn start => para rodar o projeto</li>

</ol>

# Mysql: conectando ao servidor
<img width="100%" height="400px" src="https://professor-falken.com/wp-content/uploads/2017/06/Como-ver-las-consultas-que-se-estan-ejecutando-en-MySQL-professor-falken.com_.jpg">

<ol>
    <li>mysql -h localhost -u root -p</li>
    <li>Enter password: *******</li>
    <li>SHOW DATABASES; => mostra todos os bancos de dados</li>
</ol>

# Mysql: criando um banco de dados e acessando
<ol>
    <li>CREATE DATABASE nome_do_banco;</li>
    <li>USE nome_do_banco;</li>
    <li>SHOW TABLES; => mostras todas as tabelas</li>
    <li>
        <p>
            CREATE TABLE usuarios(<br>
                nome VARCHAR(50),<br>
                email VARCHAR(100),<br>
                idade INT<br>
            );
        </p>
    </li>
    <li>DESCRIBE nome_da_tabela; => mostra as descrições da tabela</li>
    <li>
    Insere valores na tabela
    <p>
    INSERT INTO usuarios(nome, email, idade) VALUES(
    "Jeovane dos Santos",
    "jeovane@gmail.com",
    8
);
    </p>
    </li>
    <li>SELECT * FROM ususuarios; => seleciona todos os usarios</li>
    <li>SELECT * FROM usuarios WHERE chave (=,=>,=<) valor_da_chave; Lista usuarios expecificos</li>
    <li>DELETE FROM usuarios WHERE chave = valor_da_chave => apaga um dado expecifico</li>
    <li>UPDATE usuarios SET chave = valor_novo WHERE chave = valor_antigo</li>
    
</ol>

# FERRAMENTAS

<ol>
<li>yarn add sequelize</li>
<li>yarn add mysql2</li>
<li>yarn add dotenv</li>
<li>const dotenv = require('dotenv/config')
<p>Para poder usar o process.env.PASWORD que estara dentro do seu arquivo .env</p>

</li>

</ol>

# PRIMEIRO PROJETO, FERRAMENTAS NECESSARIAS 

<ol>
    <li>Criar projeto, seguindo o passo a passo que está no inicio deste artigo.</li>
    <li>yarn add express-handlebars</li>
</ol>
