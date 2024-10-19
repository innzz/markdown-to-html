import { useCallback, useEffect, useState } from "react";
import { convertMarkdownToHtml } from "../apis/markdownApis";

export const useGetHtmlFromMarkdown = (markdown: string) => {
  const [html, setHtml] = useState("");

  const getHtml = useCallback(async () => {
    const response = await convertMarkdownToHtml(markdown);
    setHtml(response.html);
  }, [markdown]);

  useEffect(() => {
    getHtml();
  }, [getHtml, markdown]);

  return { html };
};
