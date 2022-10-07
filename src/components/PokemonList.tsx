import { useEffect, useState } from "react";
import { Detail } from "../inteface";
import "./pokemon.css";
interface PokemonListProps {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  name: string;
  id: number;
  image: string;
  abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}

const PokemonList: React.FC<PokemonListProps> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);
  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);
  const closeDetail = () => {
    setDetail({
      id: 0,
      isOpened: true,
    });
  };
  return (
    <div className="">
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>
              X
            </p>
            <div className="detail-info">
              <img src={image} alt="pokemon" className="detail-img" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <div className="detail-ability">
                {abilities?.map((ab: any) => {
                  return <div className="">{ab.ability.name}</div>;
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="detail-skill">
          <p className="detail-ability">Abilities:</p>
        </div>
      )}
      <section className="pokemon-list-container">
        <p className="pokemon-name">{name}</p>
        <img src={image} alt="pokemon" />
      </section>
    </div>
  );
};

export default PokemonList;
