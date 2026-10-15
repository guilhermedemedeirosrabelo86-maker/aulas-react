import './App.css'
import { useState } from 'react'

function App() {

  let contadorFilmes = 0;

  const username = "Maria"

  const [count, setCount] = useState(0);

  const [filmList, setFilmList] = useState([
    {id:1, name: "O Poderoso Chefão", isFavorite: true},
    {id:2, name: "O Senhor dos Anéis", isFavorite: false},
    {id:3, name: "Pulp Fiction", isFavorite: false},
    {id:4, name: "Forrest Gump", isFavorite: false},
    {id:5, name: "A Origem", isFavorite: false}
  ])

  function clicouNoBotao() {
    // alert('Button clicked!')
    setCount(count + 1);
  }

  function alternarFavorito(id) {
    const newFilmList = filmList.map((film) => {
      if (film.id === id) {
        return {...film, isFavorite: !film.isFavorite}
      }
      return film;
    })
    setFilmList(newFilmList);
  }

  return (
  <div>
    <p className="hero">Bem vindo {username}</p>
    <button onClick={clicouNoBotao}>O contador esta em: {count}</button>
    {filmList.map((film) => {
      return (
        <div key={film.id}>
          <p> {film.name}</p>
          <button onClick={()=> alternarFavorito(film.id)}>Favorito</button>
        </div>
      );
    })}
  </div>


)
}

export default App
