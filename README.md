# Graphql project

## Reference posts

* [GraphQL —A flexibilidade do formato de dados](https://medium.com/trainingcenter/graphql-os-dados-no-formato-requisitado-964f5555d467)
* [GraphQL — Aprendendo na prática](https://medium.com/trainingcenter/graphql-aprendendo-na-pr%C3%A1tica-569a6866065b)

## Command

### Setup

#### Create a postgres container

```bash
# Create a postgres container
$ sudo docker run --name database-postgres -e "POSTGRES_PASSWORD=<password>" -p 5432:5432 -d postgres
```
enter in your postgres and create a databse named `project-graphql`

#### Installing Project

```bash
# clone it
$ cd ~
$ mkdir www && cd www
$ git clone git@github.com:ZaqueuLima3/project-graphql.git
```

Now, access your project diretory. We will be working with it now:
```bash
$ cd project-graphql

# Install dependencies
$ npm i

# Copy the file env
$ cp .env.example .env
```
Access your .env file and then change the line `DB_PASS` and if you need `DB_USER`

#### Create the first tables

Now, you need run the sequelize migrations
```bash
# create your tables
npx sequelize db:migrate
```

and if you need some test data
```bash
# populate some tables
npx sequelize db:seed:all
```

#### Final Steps
start your project in `http://localhost:4000`
```bash
# start the project
npm run dev
```

#### Some examples
```graphql
  # Create new study
  mutation {
    createStudy(
      data: {
        scopeDefinition:"Learn node.js",
        successDefinition:"Create an API",
        paths: [1, 2, 3],
        references: [1, 2, 3]
      }
    ) {
      scopeDefinition
      successDefinition
    }
  }

  # List all studies
  query {
    studies {
      id
      scopeDefinition
      successDefinition
      paths {
        order
        description
      }
      references {
        url
        category {
          name
        }
      }
    }
  }
```
