export async function GET() {
  console.log("Spotify Client ID:", process.env.SPOTIFY_CLIENT_ID)

  return Response.json({
    clientId: process.env.SPOTIFY_CLIENT_ID || "Not found",
  })
}