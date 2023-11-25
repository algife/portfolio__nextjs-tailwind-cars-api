"use server";
import { cache } from "react";
import "server-only";

/* With this approach,
    1. eagerly we fetch data
    2. we cache responses, and
    3. we guarantee that this data fetching only happens on the server.
*/

export const preload = (item: any) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void preFetchAndCache(item);
};

const preFetchAndCache = cache(async (item: any) => item);

export default preFetchAndCache;
