export const useFetchBestCs = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/bestcs`);
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
