import { serve } from "https://deno.land/std@0.181.0/http/server.ts";

serve(() => {
  return fetch(new URL("https://www.baidu.com/", import.meta.url));
});
