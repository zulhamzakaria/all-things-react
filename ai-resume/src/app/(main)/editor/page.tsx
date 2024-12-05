import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "design your resume",
};

const Editor = () => {
  return (
    <div>
      <ResumeEditor />
    </div>
  );
};

export default Editor;
