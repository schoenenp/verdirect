export default {
  fetch() {
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
};
