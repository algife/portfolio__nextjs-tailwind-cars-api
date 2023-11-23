import { RenderingMethod } from "@/typings.d";

export const getRenderingMethod = (
  strategy: RenderingMethod
): RequestInit | undefined => {
  switch (strategy) {
    case "ISR":
      return { next: { revalidate: 60 } };
    case "SSR":
      return { cache: "no-cache" };
    case "SSG":
      return { cache: "force-cache" };
    default:
      return undefined;
  }
};