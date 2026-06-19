export default function handler(_request, response) {
  const destination = process.env.REDIRECT_TO;

  if (!destination) {
    response.statusCode = 500;
    response.end("Missing REDIRECT_TO");
    return;
  }

  response.statusCode = 302;
  response.setHeader("Location", destination);
  response.setHeader("Cache-Control", "no-store");
  response.end();
}
