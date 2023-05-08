export const imageUpload = async (images) => {
  const imgArr = [];
  for (let file of images[0]) {
    if (file.hasOwnProperty("url")) {
      imgArr.push({ url: file.url, public_id: file.public_id });
    } else {
      const formData = new FormData();
      formData.append("file", file.fileName);
      formData.append("upload_preset", process.env.CLOUD_PRESET);

      const res = await fetch(process.env.CLOUD, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      imgArr.push({ url: data.secure_url, public_id: data.public_id });
    }
  }
  for (let file of images[1]) {
    console.log(process.env.BASE_URL);
    const res = await fetch(`${process.env.BASE_URL}/api/destroy`, {
      method: "POST",
      body: JSON.stringify(file),
    }).then((r) => r.json());
  }
  return imgArr;
};

export const deleteAllImages = async (images) => {
  for (let file of images) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/destroy`, {
      method: "POST",
      body: JSON.stringify(file),
    }).then((r) => r.json());
  }
};
