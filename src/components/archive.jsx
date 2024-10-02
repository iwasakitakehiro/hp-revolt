import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData";
import WorkContent from "./workContent";
import "../css/App.css";

function ArchiveWork() {
  const [works, setWorks] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [beforeCategoryState, setBeforeCategoryState] = useState("all");
  const url = "https://hsc03.xsrv.jp/design";
  const api = `${url}/wp-json/wp/v2/works?per_page=100&page=1`;

  // APIからデータを取得するuseEffect
  useEffect(() => {
    const fetchedDataSet = async () => {
      const data = await fetchData(api);
      setWorks(data); // データをセット
    };
    fetchedDataSet();
  }, [api]);

  return (
    <div className="App">
      <div>
        <div className="inner">
          <div id="contents-wrapper">
            {works ? (
              <div>
                {/* 先頭に固定されているものを先に表示 */}
                {works.map(workdata =>
                  workdata.class_list.includes("sticky") &&
                  (currentCategory === workdata.acf.category_name ||
                    currentCategory === "all") ? (
                    <a href={`./${workdata.id}`} key={workdata.id}>
                      <WorkContent
                        img={workdata.acf.eye_catch}
                        name={workdata.acf.client_name}
                        category={workdata.acf.category_name}
                      />
                    </a>
                  ) : null
                )}
                {/* 先頭以外を表示 */}
                {works.map(workdata =>
                  !workdata.class_list.includes("sticky") &&
                  (currentCategory === workdata.acf.category_name ||
                    currentCategory === "all") ? (
                    <a href={`./${workdata.id}`} key={workdata.id}>
                      <WorkContent
                        img={workdata.acf.eye_catch}
                        name={workdata.acf.client_name}
                        category={workdata.acf.category_name}
                      />
                    </a>
                  ) : null
                )}
              </div>
            ) : (
              <div>
                <p>実績データがまだありません</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveWork;
