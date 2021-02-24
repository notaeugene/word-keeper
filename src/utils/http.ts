import env from './env';

const { API_URL } = env();

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const defaultHeaders = () => ({
  'Content-Type': 'application/json',
});

export const createFetch = ({
  url,
  method,
  headers,
  body,
  query,
}: {
  url: string;
  method: HttpMethod;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  query?: Record<string, string>;
}) =>
  fetch(`${API_URL}${url}${query ? new URLSearchParams(query) : ''}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

export const createGet = (url: string) =>
  createFetch({ url, method: HttpMethod.GET });

export const createPost = (url: string, body: Record<string, any>) =>
  createFetch({
    url,
    method: HttpMethod.POST,
    body,
    headers: defaultHeaders(),
  });

export const createPut = (url: string, body: Record<string, any>) =>
  createFetch({
    url,
    method: HttpMethod.PUT,
    body,
    headers: defaultHeaders(),
  });

export const createDelete = (url: string) =>
  createFetch({ url, method: HttpMethod.DELETE });
