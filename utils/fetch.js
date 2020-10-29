const fetchData = async (endpoint) => {
  console.log("FETCH DATA", endpoint);
  const response = await fetch(endpoint);
  // console.log(response);
  const data = response.json();
  console.log(data);
  return data;
  // try {
  //   const response = await fetch(endpoint);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;
  // } catch (e) {
  //   console.log("error!");
  //   return e;
  // }
};

const postData = async (endpoint, payload) => {
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    payload,
  };
  try {
    const fetchResponse = await fetch(endpoint, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
};

export { fetchData, postData };
