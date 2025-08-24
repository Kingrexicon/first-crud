# CRUD with Express

A simple Node.js and Express API that serves rapper information. This project demonstrates how to build a basic RESTful API, use CORS, and serve static HTML content.

## Features

- Express.js backend
- CORS enabled
- Simple API endpoint to fetch rapper details
- Static HTML homepage

## Endpoints

### `GET /`

Serves the `index.html` file as the homepage.

### `GET /api/:name`

Returns JSON data for a rapper by name.  
Example:  
```
GET /api/21%20savage
```

#### Sample Response
```json
{
  "age": 28,
  "birthName": "Shéyaa Bin Abraham-Joseph",
  "birthdate": "22 October 1992",
  "birthLocation": "London, England",
  "origin": "Atlanta, Georgia",
  "genre": "hip hop, trap, rap, horrorcore",
  "occupation": "rapper, songwriter, record producer",
  "yearsActive": "2013-present",
  "labels": "Epic, Slaughter Gang",
  "children": 3
}
```

If the rapper is not found, returns an "unknown" object.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crud-wit-express.git
    cd crud-wit-express
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```

4. Visit [http://localhost:2000](http://localhost:2000) in your browser.

## Testing

You can test the API endpoints using [Postman](https://www.postman.com/) or your browser.

## Deployment

You can deploy this app to platforms like Heroku, Render, or Railway.  
For Back4App, consider migrating your logic to Parse Cloud Code.

## License

MIT

```// filepath: c:\Users\MuNa BrAnD\Desktop\crud wit express\README.md

# CRUD with Express

A simple Node.js and Express API that serves rapper information. This project demonstrates how to build a basic RESTful API, use CORS, and serve static HTML content.

## Features

- Express.js backend
- CORS enabled
- Simple API endpoint to fetch rapper details
- Static HTML homepage

## Endpoints

### `GET /`

Serves the `index.html` file as the homepage.

### `GET /api/:name`

Returns JSON data for a rapper by name.  
Example:  
```
GET /api/21%20savage
```

#### Sample Response
```json
{
  "age": 28,
  "birthName": "Shéyaa Bin Abraham-Joseph",
  "birthdate": "22 October 1992",
  "birthLocation": "London, England",
  "origin": "Atlanta, Georgia",
  "genre": "hip hop, trap, rap, horrorcore",
  "occupation": "rapper, songwriter, record producer",
  "yearsActive": "2013-present",
  "labels": "Epic, Slaughter Gang",
  "children": 3
}
```

If the rapper is not found, returns an "unknown" object.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/crud-wit-express.git
    cd crud-wit-express
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```

4. Visit [http://localhost:2000](http://localhost:2000) in your browser.

## Testing

You can test the API endpoints using [Postman](https://www.postman.com/) or your browser.

## Deployment

You can deploy this app to platforms like Heroku, Render, or Railway.  
For Back4App, consider migrating your logic to Parse Cloud Code.

## License

MIT
