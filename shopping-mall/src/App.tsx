import { QueryClientProvider } from "@tanstack/react-query";
import { getClient } from "./queryClient";
import { routes } from "./routes";
import { useRoutes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gnb from "./components/Gnb";

const App = () => {
  const element = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {element}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
