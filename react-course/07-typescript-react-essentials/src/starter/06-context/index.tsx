import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider defaultTheme="system">
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2
        className={`alert ${
          context.theme === "system" ? "alert-success" : "alert-danger"
        }`}
      >
        Context API
      </h2>
      <button
        className="btn btn-center"
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
            return;
          }
          context.setTheme("dark");
        }}
      >
        toggle theme
      </button>
    </div>
  );
}

export default ParentComponent;
