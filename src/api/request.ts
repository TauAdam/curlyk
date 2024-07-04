export const request = async (path: string, method = 'GET', body?: BodyInit) => {
  const url = `https://api.themoviedb.org/3/movie/${path}`
  const options: RequestInit = {
    method,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer exapmle_token',
    },
  }
  if (body) {
    options.body = JSON.stringify(body)
  }
  const response = await fetch(url, options)
  return response.json()
}
