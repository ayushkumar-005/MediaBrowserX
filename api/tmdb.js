// Vercel Serverless Function to proxy TMDB requests
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

module.exports = async (req, res) => {
    const { path = "", ...query } = req.query;

    // Build TMDB URL
    const url = new URL(`${TMDB_BASE_URL}/${path}`);
    // Forward all query params from client (page, query, etc.)
    Object.entries(query).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    // Inject API key from server-side env var
    url.searchParams.set("api_key", process.env.TMDB_API_KEY);

    try {
        const tmdbRes = await fetch(url.toString());
        const data = await tmdbRes.json();
        res.status(tmdbRes.status).json(data);
    } catch (err) {
        console.error("TMDB proxy error:", err);
        res.status(500).json({ message: "TMDB proxy error" });
    }
};
