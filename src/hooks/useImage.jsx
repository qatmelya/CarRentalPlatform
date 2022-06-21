import { useEffect, useState } from 'react';

const useImage = (filePath) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../../../../../../source/${filePath}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err) {
        console.log(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [filePath]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
