import { useParams } from "react-router-dom";

const Info = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h2>Mais informações sobre</h2>
      <h1>{name}</h1>
    </div>
  );
};

export default Info;
