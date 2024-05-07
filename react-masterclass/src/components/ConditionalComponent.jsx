import ConditionFalse from "./ConditionFalse";
import ConditionTrue from "./ConditionTrue";

export default function ConditionalComponent() {
  const display = true;
  let messageOne = <h1>Message 1</h1>;
  let messageTwo = <h1>Message 2</h1>;
  return (
    <div>
      {/* {display ? <h3>conditional component</h3> : <h3>code erryday</h3>} */}
      {/* {display ? <ConditionTrue /> : <ConditionFalse />} */}
      {display ? messageOne : messageTwo}
    </div>
  );
}
