import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import ExperiencesToolBar from "./ExperiencesToolBar";

const TipTapEditor: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>tiptap</p>",
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px] pt-5">
      {endpoint === "experiences" ? (
        <ExperiencesToolBar endpoint={endpoint} />
      ) : (
        <ToolBar endpoint={endpoint} />
      )}
    </div>
  );
};

export default TipTapEditor;
