import React from "react";

// HOC chargement de données
const withData =
  <T extends {}>(loadDataFn: () => Promise<T>) =>
  (
    WrappedComponent: React.ComponentType<{
      data: T | string;
      loading: boolean;
      error: Error | null;
    }>
  ) => {
    const WithData: React.FC = () => {
      const [data, setData] = React.useState<T | string>("");
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState<Error | null>(null);

      React.useEffect(() => {
        loadDataFn()
          .then((result) => {
            setData(result);
            setLoading(false);
          })
          .catch((err) => {
            setError(err);
            setLoading(false);
          });
      }, []);
      
      return <WrappedComponent data={data} loading={loading} error={error} />;
    };

    return WithData;
  };

export default withData;
