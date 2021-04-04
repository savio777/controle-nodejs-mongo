## API Controle

### criação do docker:

```sh
docker pull mongo
docker run --name controle-mongo --publish 27017:27017 -d mongo
```

### entrar no bash do mongo docker

```sh
docker exec -it controle-mongo bash
```
