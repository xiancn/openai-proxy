import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

serve(() => {
  return fetch(new URL("./main.html", import.meta.url));
});
