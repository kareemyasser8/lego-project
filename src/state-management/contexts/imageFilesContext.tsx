import { Dispatch, ReactNode, useReducer } from "react";
import imgListReducer, { ImageAction } from "../reducers/imgListReducer";
import React from "react";

interface ImageFilesContextType {
  imageFiles: File[];
  dispatch: Dispatch<ImageAction>;
}

const imageFilesContext = React.createContext<ImageFilesContextType>(
  {} as ImageFilesContextType
);

interface Props {
  children: ReactNode;
}

export const ImageFilesContextProvider = ({ children }: Props) => {
  const [imageFiles, dispatch] = useReducer(imgListReducer, []);
  return (
    <imageFilesContext.Provider value={{ imageFiles, dispatch }}>
      {children}
    </imageFilesContext.Provider>
  );
};

export default imageFilesContext;