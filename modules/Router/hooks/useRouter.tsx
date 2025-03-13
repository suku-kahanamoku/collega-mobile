import { useContext } from "react";
import { RouteContext } from "../providers/RouterProvider";

export const useRouter = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};
