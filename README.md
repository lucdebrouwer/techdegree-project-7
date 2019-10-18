## React Gallery App

This is a Gallery app that uses the React library to display the pictures retrieved from the Flickr API

# Features

- A user can query the Flickr API for photos
- Load indicator when the app is fetching data.
- Friendly 404 page when accessing routes that don't exist.
- Friendly message if no results are found when querying the Flickr API

## How to use this app?

Before you can use this app you need to request a non commercial API key at: https://www.flickr.com/services/apps/create/apply
Afterwards you have to create a config file and list the following lines:

```
const apiKey = your_api_key_here;
export default apiKey
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

This project is part of the fullstack JavaScript Techdegree from Treehouse.
For more information relate to: https://join.teamtreehouse.com/techdegree/

## Future improvements

- Pagination
- Applying Context API / Redux
