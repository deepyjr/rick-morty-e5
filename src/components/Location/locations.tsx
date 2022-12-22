import { getLocations } from "../../api/locations";
import withData from "../../hoc/withData";
import Card from "../Cards";

type Props = {
  data: any;
  loading: boolean;
  error: any;
};

const Locations: React.FC<Props> = ({ data, loading, error }) => {
  if (error) {
    return (
      <div className="error">Une erreur s'est produite : {error.message}</div>
    );
  }

  if (loading) {
    return <div>Chargement en cours...</div>;
  }

  return (
    <div className="container">
      <div className="container-cards">
        {data.map((el: any, index: number) => {
          return <Card content={el} key={index} />;
        })}
      </div>
    </div>
  );
};

const fetchLocations = () => {
  return getLocations();
};

export default withData(fetchLocations)(Locations);
