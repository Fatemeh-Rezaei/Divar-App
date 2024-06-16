import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Router from "router/Router";
import defaultOptions from "configs/reactQueryConfigs";

function App() {
  const queryClient = new QueryClient({defaultOptions});

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
