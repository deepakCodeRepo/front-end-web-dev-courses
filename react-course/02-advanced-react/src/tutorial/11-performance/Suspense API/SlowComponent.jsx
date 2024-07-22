const SlowComponent = () => {
  const items = Array.from({ length: 5000 }, (_, index) => {
    return (
      <div key={index}>
        <img src="/public/vite.svg" alt="logo" />
      </div>
    );
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        marginTop: "2rem",
      }}
    >
      {items}
    </div>
  );
};
export default SlowComponent;
