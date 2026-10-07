import type { CanonicalError } from "../core/contracts";

export function problem(
  requestId: string,
  status: number,
  code: string,
  title: string,
  detail: string
): Response {
  const body: CanonicalError = {
    type: "https://legax.dev/problems/" + code.toLowerCase(),
    title,
    status,
    code,
    detail,
    requestId
  };

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/problem+json",
      "cache-control": "no-store",
      "x-request-id": requestId
    }
  });
}
