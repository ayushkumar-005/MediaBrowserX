# MediaBrowserX

A simple movie and TV show browser built with **vanilla JavaScript** and the **TMDB API**, deployed on **Vercel**.

The app lets you:

-   Browse popular movies and TV shows
-   See “Now Playing” movies and “Airing Today” shows in a hero slider
-   Search for movies/TV shows with pagination
-   View detailed info pages with backdrop, genres, stats, and production companies

All TMDB requests are routed through a **Vercel serverless function** so it works even in regions where TMDB is blocked.

## Demo

Deployed on Vercel: https://media-browser-x.vercel.app/

## Tech Stack

-   **Frontend:**

    -   HTML, CSS, vanilla JavaScript
    -   [Swiper](https://swiperjs.com/) for carousels

-   **Backend (proxy):**

    -   Vercel serverless function (`/api/tmdb`)
    -   Node.js `fetch` to call the TMDB API server-side
