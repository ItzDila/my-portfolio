export async function GET() {
  return Response.json({
    clientId: process.env.SPOTIFY_CLIENT_ID || "Not found",
  })
}