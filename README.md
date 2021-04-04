## API Controle

### comandos docker

#### criação do docker:

```sh
docker pull mongo
docker run --name controle-mongo --publish 27017:27017 -d mongo
```

#### criar database e collection

```sh
docker exec -it controle-mongo bash
mongo
use test
db.test.insertOne({test:true})
db.test.find({})
show dbs
```
