import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  highlight: function (code, lang) {
    return lang
      ? hljs.highlight(lang, code).value
      : hljs.highlightAuto(code).value;
  },
});

export const convertMarkdownToHtml = (req, res) => {
  try {
    const { markdown } = req.body;
    const html = marked(markdown);

    res.status(200).json({
      html,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};
