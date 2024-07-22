//INFO: 1. using PropsWithChildren generic
import { type PropsWithChildren } from "react";
type ComponentProps = PropsWithChildren<{
  name?: string;
  id: number;
}>;

//INFO: 2. just defining children type in ComponentProps type
/* type ComponentProps = {
  name?: string;
  id: number;
  children?: React.ReactNode;
}; */

function Component({ name = "sita", id = 0, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>ID: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
