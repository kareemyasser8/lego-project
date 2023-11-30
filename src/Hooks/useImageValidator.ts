import { useState } from 'react';

interface ImageValidatorHook {
  validateImage: (image: File) => boolean;
  error: string | null;
}

const useImageValidator = (): ImageValidatorHook => {
  const [error, setError] = useState<string | null>(null);

  const validateImage = (image: File): boolean => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

    if (!allowedMimeTypes.includes(image.type)) {
      setError('Invalid file type. Please upload a valid image.');
      return false;
    }

    setError(null);
    return true;
  };

  return { validateImage, error };
};

export default useImageValidator;
