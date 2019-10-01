# COMO FUNCIONA EL EVENT CICLE DE NODE

## Premisas
1. Javascript es asyncrónico por naturaleza.

Sincronica

llamar a A 00
A termina en 05
B empieza en 05
B termina en 10
C empieza en 10
C termina en 15

Asincronica
A comienza en 00
B comineza en 00
C comienza en 00
A termina en 05
C termina en 07
B termina en 10

A();
B();
C();

event pool 

2  Injección de Dependencias
---  Programación Funcional  

Function recibe la siguiente a ejecutar 

Javascript ofrece 
promises 

Nomeclatura de Acuerdo de Caballeros

function  nodejs, handler   (err, )

A()
  .then(B())
  .catch(err)
