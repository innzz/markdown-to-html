const hostname = "http://localhost:5000";
export const convertMarkdownToHtml = async (markdown: string) => {
  try {
    const response = await fetch(hostname + "/api/markdown/convert/html", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ markdown }),
    });
    const html = await response.json();
    return html;
  } catch (error) {
    console.log(error);
    return "Something went wrong! Please check console for more information";
  }
};
