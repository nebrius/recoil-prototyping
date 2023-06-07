export async function get<T = never>(endpoint: string) {
  const res = await fetch(`http://localhost:3000/api${endpoint}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return (await res.json()) as T;
}

export async function post<Request = never, Response = never>(
  endpoint: string,
  body: Request,
): Promise<Response> {
  const response = await fetch(endpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return (await response.json()) as Response;
}

export async function put<Request = never, Response = never>(
  endpoint: string,
  body: Request,
): Promise<Response> {
  const response = await fetch(endpoint, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return (await response.json()) as Response;
}

export async function del(endpoint: string): Promise<void> {
  await fetch(endpoint, {
    method: 'delete',
  });
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const IS_BROWSER = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
