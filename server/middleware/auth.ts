import { auth } from "~/lib/auth";

export default eventHandler(async (event) => {
  if (event.path.startsWith("/dashboard")) {
    const session = await auth.api.getSession({
      headers: event.headers,
    });
    if (!session?.user) {
      await sendRedirect(event, "/", 302);
    }
  }
});
