export interface ImageAction {
  type: "ADD" | "REMOVE";
  files?: File[]; // Modified to handle multiple files
  file?: File;
}

const imgListReducer = (uploadedFiles: File[], action: ImageAction): File[] => {
  if (action.type === "ADD") {
    if (action.files) {
      return [...action.files, ...uploadedFiles]; // Add multiple files to the uploadedFiles array
    }
    if (action.file) {
      return [action.file, ...uploadedFiles]; // Add single file to the uploadedFiles array
    }
  }
  if (action.type === "REMOVE") {
    return uploadedFiles.filter((f) => f !== action.file);
  }

  return uploadedFiles;
};

export default imgListReducer;