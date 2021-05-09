# First step

If you are running this project for the first time, you must follow these steps

1. run `npm install` on the root of the project
2. run `npm run dev`
3. _Voilaa_, you can test your routes now :)

---

## Routes

-   `/api/register`

```javascript
//Request ex.
{
  email: "test@gmail.com",
  password: "123456",
  passwordConfirm: "123456"
}

//Response OK
{
  status: true,
  message: 'You have been registered successfully',
  accessToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6NSwiaWF0IjoxNjIwMzEzMzkwLCJleHAiOjE2MjAzMTM2OTB9-oMvUqTWR3aou---scrVju1ZxjntWHo4xbXsu4CZ3o4"
}

//Response ERROR
{
  status: false,
  message: 'Something wrong has happened'
}
```

-   `/api/login`

```javascript
//Request ex.
{
  email: "test@gmail.com",
  password: "123456",
}

//Response OK
{
  status: true,
  message: 'You are now logged in successfully',
  accessToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6NSwiaWF0IjoxNjIwMzEzMzkwLCJleHAiOjE2MjAzMTM2OTB9-oMvUqTWR3aou---scrVju1ZxjntWHo4xbXsu4CZ3o4",
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6NSwiaWF0IjoxNjIwMzEzMzkwLCJleHAiOjE2MjAzMTM2OTB9-oMvUqTWR3aou---scrVju1ZxjntWHo4xbXsu4CZ3o4"
}

//Response ERROR
{
  status: false,
  message: 'Something wrong has happened'
}
```

-   `/api/refreshToken`

```javascript
//Request ex.
{
  refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6NSwiaWF0IjoxNjIwMzEzMzkwLCJleHAiOjE2MjAzMTM2OTB9-oMvUqTWR3aou---scrVju1ZxjntWHo4xbXsu4CZ3o4"
}

//Response OK
{
  status: true,
  message: 'Access token refreshed successfully',
  accessToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6NSwiaWF0IjoxNjIwMzEzMzkwLCJleHAiOjE2MjAzMTM2OTB9-oMvUqTWR3aou---scrVju1ZxjntWHo4xbXsu4CZ3o4"
}

//Response ERROR
{
  status: false,
  message: 'You are not authorized'
}
```

-   `/api/getCountry`

```javascript
//Request ex.
{
  countryName: "Egypt"
}

//Response OK
{
  status: true,
  message: 'Country data retreived successfully',
  data : {
    countryName: "Egypt",
    GMTOffset: "GMT+2:00"
  }
}

//Response ERROR
{
  status: false,
  message: 'There is no country registered with this name'
}
```

-   `/api/getAllCountryDetail`

```javascript
//Request ex.
{
}

//Response OK
{
  status: true,
  message: 'Data retreived successfully',
  data : [
    {
      countryName: "Egypt",
      GMTOffset: "GMT+2:00"
    },
    {
      countryName: "India",
      GMTOffset: "GMT-1:00"
    }
  ]
}

//Response ERROR
{
  status: false,
  message: 'There is no data to show'
}
```

---

## Headers

_All routes should have`Content-type: application/json` in the header_

#### For Authentication

-   You can include the access token whether in the `Authorization` header along side Barear, for ex. `Authorization: Barear token_here`
-   OR you can send it in a cookie named `access_token`

---

# Happy Testing 😊
