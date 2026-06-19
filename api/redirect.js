function redirectResponse() {
  const destination = process.env.REDIRECT_TO;

  if (!destination) {
    return new Response("Missing REDIRECT_TO", { status: 500 });
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: destination,
      "Cache-Control": "no-store"
    }
  });
}

export const GET = redirectResponse;
export const HEAD = redirectResponse;
export const POST = redirectResponse;
export const PUT = redirectResponse;
export const PATCH = redirectResponse;
export const DELETE = redirectResponse;
export const OPTIONS = redirectResponse;
