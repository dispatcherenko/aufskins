export const useFetchBest = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/best`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const useFetchHugeBuys = async () => {
  try {
    const res = await axios.get(`https://9be368f409e5ba1b.mokky.dev/best`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
