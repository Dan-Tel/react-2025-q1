class SWAPI {
  getData = async (url: string) => {
    const res = await fetch(url);

    console.log(res);
    // if (!res.ok) {
    // console.log(res.ok ? 'ok' : 'not ok');
    // }

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();
    return data;
  };

  getAllCharactersFromPage = async (page: number, term: string) => {
    if (term == 'error') {
      throw new Error('cho');
    }

    return this.getData(
      `https://swapi.dev/api/people?search=${term}&page=${page}`
    );
  };
}

export default SWAPI;
