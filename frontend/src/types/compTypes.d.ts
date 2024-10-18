import React from "react";

export type MarkdownInputPropTypes = {
  markdown: string;
  handleMarkdownChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};
