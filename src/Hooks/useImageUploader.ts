import { ChangeEvent, MouseEventHandler, RefObject, useState } from 'react';

const useImageUploader = (
  ref: RefObject<HTMLInputElement>
) => {
  const [imgFiles, setImgFiles] = useState<File[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBrowseClick: MouseEventHandler<HTMLDivElement> = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setImgFiles([...imgFiles, ...newFiles]);
      setSelectedFile(newFiles[0]);
    }
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    }
  };

  return { handleBrowseClick, handleFileSelect, handleFileUpload, imgFiles, isLoading };
};

export default useImageUploader;