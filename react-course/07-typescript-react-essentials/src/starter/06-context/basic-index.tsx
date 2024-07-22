import { useTheme, ThemeProvider } from "./basic-context";

function ParentComponent() {
  //NOTE: here returning Component before its wrapped in ThemeProvider will result in error
  // return <Component/>
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  return (
    <div>
      <h2>Context API</h2>
    </div>
  );
}
export default ParentComponent;
