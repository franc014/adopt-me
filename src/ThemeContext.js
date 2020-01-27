import { createContext } from "react";
// context as a hook shape
const ThemeContext = createContext(["yellow", () => {}]);

export default ThemeContext;
