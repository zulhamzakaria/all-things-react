import "../globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <p className=" bg-cyan-600">about layout</p>
      {children}
    </div>
  );
}
