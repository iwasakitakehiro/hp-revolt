import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";

function Single({ id }) {
  const [work, setWork] = useState(null);
  const url = "https://hsc03.xsrv.jp/design";
  const api = `${url}/wp-json/wp/v2/works/${id}`;

  useEffect(() => {
    const fetchedDataSet = async () => {
      const data = await fetchData(api);
      setWork(data); // データをセット
    };
    fetchedDataSet();
  }, [id]); // idが変わったときのみ再実行

  return (
    <>
      {work ? (
        <div className="mt-20 md:mt-24 pb-24">
          <div className="inner">
            <div>
              <div>
                <p className="text-sm font-medium leading-none pb-7">
                  {work.acf.client_name} 様
                </p>
                <p className="font-semibold text-xl md:text-[32px]">
                  {work.acf.category_name}製作
                </p>
              </div>
              <div>
                <img src={work.acf.top_image} alt="トップ画像" />
              </div>
            </div>
            <div className="mt-12">
              <table className="detail">
                <tbody>
                  <tr>
                    <th className="font-medium !pt-0">URL</th>
                    <td className="font-normal">
                      <a
                        className="text-[#cc0000] border-b border-[#cc0000]"
                        href={work.acf.url}
                      >
                        {work.acf.url}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="font-medium">Service</th>
                    <td className="font-normal">{work.acf.service}</td>
                  </tr>
                  <tr>
                    <th className="font-medium">Description</th>
                    <td className="font-normal">{work.acf.description}</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-20 md:mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                  {work.acf.images.map(url => (
                    <div>
                      <img src={url.image} alt="参考画像" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24 flex justify-center">
            <a href="/works" className="link-btn">
              <p>
                <span className="text-[18px] arrow">← </span>
                <span className="font-medium text-[18px]">Back</span>
              </p>
            </a>
          </div>
        </div>
      ) : (
        <div>hoge</div>
      )}
    </>
  );
}

export default Single;
