# Caderno com portfólio
___
**Descrição:** Esse projeto vai servir para registrar todos os meus conhecimentos relacionados a programação e também como portfólio embutido.

**Acesse web site**:[click aqui](https://victor-alex-moreira-gouveia.github.io/Caderno/)

___
# Iniciar o projeto com docker
Montagem da imagem:
``
    docker build -t caderno .
``
<br>

Executar em um container:
``
    docker run -it --name Notebook -p 80:80 -v \Caderno:/usr/share/nginx/html:ro caderno
``

<br>

Acesse [http://localhost:80](http://localhost:80) para acessar a web pag.