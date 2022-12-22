import React from "react";

type DataFetcher = () => Promise<any>;

type Props = {
  data: any;
  loading: boolean;
  error: any;
};

const withData = (dataFetcher: DataFetcher) => {
  return (WrappedComponent: React.FC<Props>) => {
    return (props: any) => {
      const [data, setData] = React.useState(null);
      const [loading, setLoading] = React.useState(true);
      const [error, setError] = React.useState<Error | null>(null);

      React.useEffect(() => {
        async function fetchData() {
          try {
            const data = await dataFetcher();
            setData(data);
            setLoading(false);
          } catch (e) {
            setError(e as Error);
          }
        }

        fetchData();
      }, []);

      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...props}
        />
      );
    };
  };
};

export default withData;
