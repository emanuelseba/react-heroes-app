import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;

  const heroesFilted = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search for</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Search one hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />

              <button className="btn btn-outline-primary mt-1" type="submit">
                Search...
              </button>

            </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') ?
             <div className="alert alert-info">Buscar un héroe</div>
             : (heroesFilted.length === 0)
              && <div className="alert alert-danger">No hay resultados: {q} </div>
          }

          {
            heroesFilted.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}