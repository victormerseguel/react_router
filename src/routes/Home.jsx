import { useFetch } from "../hooks/useFetch";
import { useJsonCoin } from "../hooks/useJsonCoin";

import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

const Home = () => {
  const { data: items } = useFetch(url);

  // 7 - rota dinâmica

  return (
    <div>
      <h1>Home</h1>
      {/* 6 - carregando dados */}
      <ul className="products">
        {items ? (
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {useJsonCoin(item.price)}</p>
              {/* 7 - rotas dinâmicas */}
              <Link to={`/products/${item.id}/${item.name}`}>Detalhes</Link>
            </li>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </ul>
    </div>
  );
};

export default Home;
