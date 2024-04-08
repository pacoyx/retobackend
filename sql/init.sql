
--  create database dbTest;

--  use dbTest;

CREATE TABLE IF NOT EXISTS tb_usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(100) ,
    apellido varchar(100) ,
    area varchar(100) ,
    puesto varchar(100) ,
    estado int(11)
);


INSERT INTO tb_usuario (nombre, apellido, area,puesto,estado) VALUES ('carlos','bazan','sistemas','AF', 1);
INSERT INTO tb_usuario (nombre, apellido, area,puesto,estado) VALUES ('Michael','Jordan','atencion','Player one', 1);
INSERT INTO tb_usuario (nombre, apellido, area,puesto,estado) VALUES ('Bill','Gates','Desarrollo','theBoss', 1);
