interface ProtectedInterfaceProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedInterfaceProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-cyan-600">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
