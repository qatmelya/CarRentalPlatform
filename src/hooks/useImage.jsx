import { useEffect, useState } from 'react';

const useImage = (filePath) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  let correctFilePath = filePath.replace(/\\/g, '/');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../../${correctFilePath}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [correctFilePath]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
