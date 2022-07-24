# www.hellwig.org

This is the www.hellwig.org website

## Prerequisites

### Install optional build tools

On Windows, this is an option that is selected when you install Node.js.

For Linux, execute the following command:

    $ sudo apt-get install -y build-essential

### Create dotenv file

This is only required if you want to run the development server on a port other than the default of 1234.

    $ cp sample.env .env

Edit this file as required. See below for environment variables.

## Development

    npm install
    npm start

This will run `parcel` and serve files with hot reloading. Point your browser to [`http://localhost:1234`](http://localhost:1234) (unless you specified a different port number in your `.env` file.)

## Production

    npm install
    npm run build

Using [NGINX](https://www.nginx.com/) or equivalent, serve files from the `dist` subdirectory (i.e., make this your document root).

## Environment Variables

You can use a `.env` file to set these.

- `PORT`: used by parcel during development and has nothing to do with production where it is your NGINX or other web server that determines the port number.
