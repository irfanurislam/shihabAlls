import axios from "axios";
export const imageUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=c961dfc87794b73321f1f3f4ca72855b`;
    console.log("URL:", url);

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    console.log("Response:", response);

    if (!response.ok) {
      throw new Error(`Failed to upload image: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data:", data);

    if (!data || !data.data || !data.data.url) {
      throw new Error("Invalid response from image upload API");
    }

    return data.data.url;
  } catch (error) {
    throw new Error(`Error uploading image: ${error.message}`);
  }
};

// VITE_BACKEND_API='https://server-greenstack.vercel.app'
// VITE_IMGBB_KEY="c961dfc87794b73321f1f3f4ca72855b"

export const saveUser = async (user, phoneNumber) => {
  const currentUser = {
    comName: user.displayName,
    email: user.email,
  };
  console.log(user);
  const data = await axios.post(`http://localhost:3000/users`, currentUser);
  console.log(data);
};

export const updateUserDeatails = async (email, details) => {
  console.log(details);
  const response = await axios.put(
    `${import.meta.env.VITE_BACKEND_API}/users/${email}`,
    details
  );
  // console.log(response)
  return response;
};
