#Question API endpoints

## GET
`official client only`  <br/>

### GET /question1
Gets all Marvel movies which each actor plays `official client only`

http://localhost:8080/question1

**Response**

```
// Array of actors object(from list of Marvel Actors ), with id, name , list of movies which played
[
    {
        "actorId": 3223,
        "name": "Robert Downey Jr.",
        "movies": [
            {
                "id": 1726,
                "name": "Iron Man",
                "character": "Tony Stark / Iron Man"
            },.....
            ...........,
            {
                "id": 1724,
                "name": "The Incredible Hulk",
                "character": "Tony Stark (uncredited)"
            }
        ]
    },
    {
        "actorId": 16828,
        "name": "Chris Evans",
        "movies": [
            {
                "id": 1771,
                "name": "Captain America: The First Avenger",
                "character": "Steve Rogers / Captain America"
            },
        
        and continues.....

or


{
    "code": 500,
    "error": "Something went wrong"
}
```
___

### GET /question2
Gets all actors who played more than one Marvel character `official client only`

http://localhost:8080/question2

**Response**

```
// Array of actors objects(from list of Marvel Actors ), with id, name.

[
    {
        "name": "Chris Evans",
        "id": 16828
    },
    {
        "name": "Scarlett Johansson",
        "id": 1245
    },
    {
        "name": "Michael B. Jordan",
        "id": 135651
    }
]

or


{
    "code": 500,
    "error": "Something went wrong"
}
```
___

### GET /question3
Gets all different actors who played the same role `official client only`

http://localhost:8080/question3

**Response**

```
// Array of actors (from list of Marvel Actors ), with id, name. 
in this question the answer will be 
    {
        "name": "Michael B. Jordan",
        "name": "Chris Evans"
    }

or


{
    "code": 500,
    "error": "Something went wrong"
}
```


