class SWAPI {
  getData = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data;
  };

  getAllCharactersFromPage = async (page: number, term: string) => {
    return this.getData(
      `https://swapi.dev/api/people?search=${term}&page=${page}`
    );
  };
}

export default SWAPI;
