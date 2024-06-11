import { z } from "zod";
import { useForm } from "react-hook-form";
import { EducationSchema } from "@/schemas/education";

interface CreateEducationProps {
  institution: string;
  major: string;
}

const CreateEducation = () => {
  return <div>Create Education page!</div>;
};

export default CreateEducation;
