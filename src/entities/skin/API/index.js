export const useFetchBestCs = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const useFetchBestDota = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestdota`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const useFetchBestRust = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const useFetchBestTf = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/besttf2`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const useFetchHugeBuys = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
