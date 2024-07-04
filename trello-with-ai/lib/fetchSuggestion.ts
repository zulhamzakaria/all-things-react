import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);
  const res = await fetch("api/generate-summary", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ todos }),
  });

  const GPTData = await res.json();
  const { content } = GPTData;
  return content;
};

export default fetchSuggestion;
