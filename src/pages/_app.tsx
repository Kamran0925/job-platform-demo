import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme/theme";

import type { AppProps } from "next/app";
import { ApplyProvider } from "@/context/ApplyContext";
import { AuthProvider } from "@/context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApplyProvider>
          <Component {...pageProps} />
        </ApplyProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
