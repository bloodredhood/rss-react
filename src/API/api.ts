export class Api {
  static async get(query?: string) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character${query && `?name=${query}`}`
    ).then((res) => {
      if (!res.ok) {
        console.log(res.status);
      }
      return res;
    });
    return response.json();
  }
}
