# basic-api-server

## LAB - 03

### Author: Ibrahem Sarayrah

### LINKS

* [github action](https://github.com/IbrahemSarayrah/basic-api-server/actions)

* [github action test](https://github.com/IbrahemSarayrah/basic-api-server/runs/3353331221)

* [local test](uml-img/test-lab3-locally.PNG)

* HEROKU Prod : [https://ibrahem--basic-api-server.herokuapp.com/](https://ibrahem--basic-api-server.herokuapp.com/)

* pull request : [https://github.com/IbrahemSarayrah/basic-api-server/pull/1](https://github.com/IbrahemSarayrah/basic-api-server/pull/1)

### Setup

* **.env** requirements:
>
> PORT=3000
>
> POSTGRES_URI=postgres://localhost/postgres
>

### Running the app

* npm start / nodemon

* Endpoint: `/food`
* Endpoint: `/clothes`

* Returns Objects

```

{
    "clothesType": "shirt",
    "clothesColor": "black"
}

{
    "foodMeal": "pizza",
    "drink": "none",
    "totalPrice":"10"
}

```

### UML

![UML](uml-img/uml-diagram-03.png)
