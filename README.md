# Skyfall

> Skyfall

## Build Setup

``` bash
# install dependencies
docker-compose up
```

Fala Devs!!!

Antes de tudo tentei deixar a aplicação da maneira mais simples possível, no momento em que o comando do docker-compose up fosse feito todo serviço necessário para rodar a aplicação iria subir no local de vocês, porém acabei esquecendo alguns detalhes, as migrations iriam criar as tabelas necessárias porém não me atentei com a criação do banco. Na minha maquina eu criei na mão o banco e no script ele cria apenas as tabelas, sendo assim a aplicação não vai rodar podendo dar alguns erros de conexão. A aplicação não ficou completa e estou disponibilizando o que consegui fazer. 

A idéia está no fluxograma abaixo e pode ser vista no código, teriamos um serviço para o backend sendo a API em node, um serviço para o front que foi feito em Vue, no banco A cujo o acesso a esses dados não precisa ser tão performática, seria utilizado postgres, MySql ou qualquer outro banco relacional. Já para as consultas e extração de dados por meio de algoritmos de aprendizado de máquina e aplicações web de tempo real, poderiam ser utilizados banco de dados não relacionais como o Mongo, Redis entre outros. 


![Are you at a financially stable position_](https://user-images.githubusercontent.com/22729595/71387651-95d03980-25d3-11ea-8d9f-2d55dceacfaf.jpg)
