

# CoinX API Data Fetch

Build a Backend project using nodejs and express. Used MongoDB for storing data. 

This webApp fetch data from a given API and loads us a response of given query.


## API Reference

#### Get States of given coin

```http
  GET /stats
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `coin`      | `string` | **Required**. Id of item to fetch |

#### rreturn the latest data about the requested cryptocurrency.



#### Get Deviation of given coin.

```http
  GET /deviation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `coin`      | `string` | **Required**. Id of item to fetch |

#### return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database.


## Demo

Postman Screenshot

https://ibb.co/ZNbRWJB

https://ibb.co/P60N582
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONOGO_URI`

`PORT`


