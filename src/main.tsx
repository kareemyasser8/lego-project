import React from "react"
import ReactDOM from "react-dom/client"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./index.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import router from "./routes"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { AuthContextProvider } from "./state-management/contexts/authContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={true} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
