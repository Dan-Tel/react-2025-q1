class SWAPI {
  getData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };

  getAllCharactersFromPage = async (page: number) => {
    return this.getData(`https://swapi.dev/api/people?page=${page}`);
  };
}

export default SWAPI;
