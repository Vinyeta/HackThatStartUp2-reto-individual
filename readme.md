<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>

  </ol>
</details>

### Built With

* [Express](https://expressjs.com/)

### Prerequisites

* npm

``` sh
  npm install npm@latest -g
```

* a mongoDB instance running

### Installation

1. Clone the repo

``` sh
   git clone https://github.com/raulsalcedo03/DayPay-react.git
```

2. Install NPM packages

``` sh
    npm i
```

3. Create a .env file outside the src folder and set up the following enviroment variables:

``` sh
    NODE_ENV
    TOKEN_SECRET
    DB_CONN_STR
```

where you want NODE_ENV to be set to development, TOKEN_SECRET to be a sha to be used by jwt and DB_CONN_STR the connection string to your mongo database.

4. Start the server with NPM:

``` sh
    npm start
```

## Usage 

<h2> Preview </h2>
<p align="justify">

    The API is set to the port 5000. It can be changed in the config.js in the config folder. All the endpoints except those needed for authentification (signUp and login) are protected by jwt and will ask for an authentification token wich can be obtained in a succesful login and all passwords are encrypted with bcrypt.<br/>
    The API will also load the asteroid data in the csv found in the data folder and add it to your databse on startup.

</p>

<h2>User</h2>
<p align="justify">
  The user model has a required "username" and "password" fields. Furthermore it has the "email", "firstName" and "lastName" fields. All of them are strings.
  The following endpoints are exposed for the user model:
  
  

``` sh
   get('/api/users/')
  ```

  This returns a list of all users.

  

``` sh
    post('/api/users/addList')
  ```

  Introduces an array of users in the database. It expects an object with the array nested inside a "users".

``` sh
    get('/api/users/:username')
    patch('/api/users/:username')
    delete('api/users/:username')
```

This three endpoints read, update and delete the user with the username passed in the parameter.
</p>

<h2>Auth</h2>
<p align="justify">

``` sh
  post('/api/auth/signUp')
```
This is the signUp endpoint to create new users it expects an object with the necesary data to create a new user. It requires the password and username to be at least 8 and 4 characters long respectively. Moreover it also requires the email to be a valid email direction and the request will fail if there is none even if the database doesn't require one.

``` sh
  post('/api/auth/login')
```
The login endpoint requires the username and password of an existing user. If succesfull it will return a json with an auth token and the user data.
</p>

<h2> ASteroid(NEA) </h2>

<p align='justify'>
  The asteroid model has the "a", "e", "i", "om", "w", "am" fields, all of them numbers, in addition to a "full_name" string. All of its fields are required. It has the following exposed endpoints:

  ``` sh
    post('/api/asteroids/')
  ```
  This endpoint will add an asteroid to the database. It expects an object with all the asteroids fields.

  ```sh
    get('/api/asteroids/')
  ```
  This returns a list of all asteroids.

  ``` sh
    post('/api/asteroids/addList')
  ```
  This endpoint adds a list of asteroids to the database. It expects an object with an array nested in the "asteroids" key.

  ``` sh
    get('/api/asteroids/:id')
    patch('/api/asteroids/:id')
    delete('/api/asteroids/:id')
  ```

  These endpoints get, update or delete the asteroid with the id passed in the parameter.
</p>
