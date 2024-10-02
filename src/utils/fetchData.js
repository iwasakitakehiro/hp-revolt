export async function fetchData(url) {
  const res = await getWorks(url);
  return res;
}

// 製作実績を取得
const getWorks = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data);
      });
  });
};
