export const uploadImage = async (uri) => {
  let formData = new FormData();
  formData.append('file', {
    uri,
    name: 'photo.jpg',
    type: 'image/jpeg',
  });

  try {
    const res = await fetch('https://fake-news-backend.onrender.com/verify', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
