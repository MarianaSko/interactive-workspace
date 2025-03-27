const Container = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center p-6 mx-auto  h-screen ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
