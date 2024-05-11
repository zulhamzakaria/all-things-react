type DocsProps = {
  params: {
    slugs: Array<string>;
  };
};

export default function Docs({ params }: DocsProps) {
  let returnString;

  switch (params.slugs?.length) {
    case 2:
      returnString = `Viewing docs for feature ${params.slugs[0]} and concept of ${params.slugs[1]}`;
      break;
    case 1:
      returnString = `Viewing docs for feature ${params.slugs[0]}`;
      break;
    default:
      returnString = "Docs homepage";
      break;
  }

  return <h1>{returnString}</h1>;
}
