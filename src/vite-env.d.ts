/// <reference types="vite/client" />

// allow importing any fontsource-variable package:
declare module "@fontsource-variable/*";

// (if you still use the old fontsource packages too)
declare module "@fontsource/*";

// allow importing CSS files (and by extension the font CSS files):
declare module "*.css";
