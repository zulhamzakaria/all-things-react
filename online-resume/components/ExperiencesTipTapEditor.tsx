import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import ExperiencesToolBar from "./ExperiencesToolBar";
import { ExperiencesProps } from "@/utils/props";

interface ExperiencesEditorProps extends ExperiencesProps {
  endpoint: string;
}
const ExperiencesTipTapEditor: React.FC<ExperiencesEditorProps> = ({
  endpoint,
  companyName,
  jobTitle,
  period,
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>tiptap</p>",
  });
  return (
    <div className="flex flex-col justify-stretch min-h-[250px] pt-5">
      <ExperiencesToolBar
        endpoint={endpoint}
        companyName={companyName}
        jobTitle={jobTitle}
        period={period}
      />
    </div>
  );
};

export default ExperiencesTipTapEditor;
