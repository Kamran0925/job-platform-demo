import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

import type { AppProps } from "next/app";
import { ApplyProvider } from "@/context/ApplyContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApplyProvider>
        <Component {...pageProps} />
      </ApplyProvider>
    </ThemeProvider>
  );
}
