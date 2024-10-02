export async function fetchData(url) {
  try {
    const res = await fetch(url);

    // レスポンスのContent-Typeを確認
    const contentType = res.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      // JSONとしてデータを返す
      const data = await res.json();
      return data;
    } else {
      // JSON以外のデータを受け取った場合、エラーメッセージを表示
      const errorText = await res.text();
      throw new Error(`Expected JSON, but received: ${errorText}`);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
