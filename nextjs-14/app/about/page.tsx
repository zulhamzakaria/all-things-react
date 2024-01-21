const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cyan-950">
      <p className="text-8xl border py-2 px-5">About.</p>
    </div>
  );
};

export default About;

export const generateMetadata = () => {
  return {
    title: "about page",
    description: "all about about",
  };
};
