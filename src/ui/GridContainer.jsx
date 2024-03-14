const GridContainer = ({ children }) => {
  return (
    <div className="container mx-auto gap-4 px-4 md:grid md:grid-cols-2">
      {children}
    </div>
  );
};

export default GridContainer;
