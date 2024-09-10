import { type JSONContent } from "novel";
import { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import BlockQuote from "@tiptap/extension-blockquote";
import TextStyle from "@tiptap/extension-text-style";
import CodeBlock from "@tiptap/extension-code-block";

const RenderArticle = ({ json }: { json: JSONContent }) => {
  //   const outPut = useMemo(() => {
  //     return generateHTML(json, [
  //       Document,
  //       Paragraph,
  //       Text,
  //       Link,
  //       Heading,
  //       Underline,
  //       ListItem,
  //       BulletList,
  //       Code,
  //       BlockQuote,
  //       TextStyle,
  //       CodeBlock,
  //     ]);
  //   }, [json]);
  return (
    <div
      className=" prose-li:marker:text-primary prose m-auto sm:w-2/3 w-11/12 sm:prose-lg dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: "cock" }}
    />
  );
};

export default RenderArticle;
