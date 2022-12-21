import React from "react";

// HOC chargement de données
const withData =
  <T extends {}>(loadDataFn: () => Promise<T>) =>
  (
    WrappedComponent: React.ComponentType<{
      data: T;
      loading: boolean;
      error: Error | null;
    }>
  ) => {
    const WithData: React.FC = () => {
      const [data, setData] = React.useState<T | null>(null);
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

      if (loading) return <p>Loading</p>
      if (error) return <p>Problem</p>;
      else return <WrappedComponent data={data!} loading={loading} error={error} />;
    };

    return WithData;
  };

export default withData;
