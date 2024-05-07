import ConditionFalse from "./ConditionFalse";
import ConditionTrue from "./ConditionTrue";

export default function ConditionalComponent() {
  const display = true;
  return (
    <div>
      {/* {display ? <h3>conditional component</h3> : <h3>code erryday</h3>} */}
      {display ? <ConditionTrue /> : <ConditionFalse />}
    </div>
  );
}
