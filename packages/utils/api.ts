function getFullEndpointUrl(endpoint: string) {
  return `http://localhost:3000/api${endpoint}`;
}

export async function get<T = never>(endpoint: string) {
  const res = await fetch(getFullEndpointUrl(endpoint));
  return (await res.json()) as T;
}

export async function post<Request = never, Response = never>(
  endpoint: string,
  body: Request,
): Promise<Response> {
  const response = await fetch(getFullEndpointUrl(endpoint), {
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
  const response = await fetch(getFullEndpointUrl(endpoint), {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return (await response.json()) as Response;
}

export async function del(endpoint: string): Promise<void> {
  await fetch(getFullEndpointUrl(endpoint), {
    method: 'delete',
  });
}
