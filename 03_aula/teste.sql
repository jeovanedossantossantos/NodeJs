CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Fabiano",
    "Fabiano@gmail.com",
    19
);

SELECT * FROM usuarios WHERE idade = 8

DELETE FROM usuarios WHERE nome = "Fabiano";

UPDATE usuarios SET nome = "Nome de teste", email = "jojo@gamil.com" WHERE nome = "Fabiana"