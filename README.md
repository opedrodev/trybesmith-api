# Trybesmith API Docs

This is a Typescript-based API that simulates an online store for medieval items, allowing users to browse and purchase a variety of goods such as armor, weapons, clothing, and accessories commonly associated with the medieval era. The API includes features such as user authentication and inventory management, providing a comprehensive shopping experience.

## Endpoints

### `POST /products`
Adds a new product to the store.

The request body should be as following:
```
{
  "name": "Long sword",
  "amount": "30 golden pieces"
}
```
### `GET /products`
Retrieves a list of all products currently available in the store.

The response will be as following:
```
[
  {
    "id": 1,
    "name": "Long sword",
    "amount": "30 golden pieces",
    "order_id": null
  }
]
```

<br>
<br>

### `POST /orders`
Creates a new order for the specified products.

The request body should be as following:
```
{
  "productsIds": [1, 2]
}
```

### `GET /orders`
Retrieves a list of all orders placed by users.

The response will be as following:
```
[
  {
    "id": 1,
    "userId": 1,
    "productsIds": [2]
  },
  {
    "id": 2,
    "userId": 3,
    "productsIds": [3, 4]
  }
]
```

<br>
<br>

### `POST /users`
Adds a new user to the system.

The request body should be as following:
```
{ 
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

### `POST /login`
Authenticates a user with their credentials.

The request body should be as following:
```
{
  "username": "string",
  "password": "string"
}
```
