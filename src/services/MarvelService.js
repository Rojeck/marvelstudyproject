import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { error, loading, request } = useHttp();
  const _api = "https://gateway.marvel.com:443/v1/public",
    _apiKey = "apikey=a4ac43856fc9c0f62fd59edae5fc8e64",
    _standartOffset = "210";

  const getAllCharacters = async (offset = _standartOffset) => {
    const chars = await request(
      `${_api}/characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return chars.data.results.map(_transformCharacter);
  };

  const getCharacterById = async (id) => {
    const char = await request(`${_api}/characters/${id}?${_apiKey}`);
    return _transformCharacter(char.data.results[0]);
  };

  const getAllComics = async (offset = _standartOffset) => {
    const comics = await request(
      `${_api}/comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return comics.data.results.map(_transformComics);
  };

  const getComicsById = async (id) => {
    const comics = await request(`${_api}/comics/${id}?${_apiKey}`);
    console.log(comics);
    return _transformComics(comics.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      id: char.id,
      comics: char.comics.items,
    };
  };

  const _transformComics = (comics) => {
    return {
      title: comics.title,
      description: comics.description,
      thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
      price: comics.prices[0].price,

      id: comics.id,
      pagesCount: comics.pageCount,
    };
  };

  return {
    getAllCharacters,
    getCharacterById,
    _transformCharacter,
    getAllComics,
    getComicsById,
    error,
    loading,
  };
};

export default useMarvelService;
