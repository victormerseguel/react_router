import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useJsonCoin } from "../hooks/useJsonCoin";

import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: product } = useFetch(url);

  //   if (!product) return <p>Carrgando...</p>;

  return (
    <div>
      {product ? (
        <div>
          <p>ID do produto: {id}</p>
          <div>
            <h1>{product.name}</h1>
            <p>R$ {useJsonCoin(product.price)}</p>
            <Link to={`/products/${product.id}/${product.name}/info`}>
              Mais informações
            </Link>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Product;
