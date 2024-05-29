// data caching
import { unstable_cache as nextCache } from "next/cache";

// request optimization caching
import { cache as reactCache } from "react";

// define a callback function that takes anything and returns anything:
//
type Callback = (...args: any[]) => Promise<any>;
//
export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {}
) {
  // first cache using react, then cache using next
  return nextCache(reactCache(cb), keyParts, options);
}
