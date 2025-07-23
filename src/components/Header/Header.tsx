import { AppBar, Toolbar, Typography, Box } from "@mui/material";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <AppBar position="static" color="primary" elevation={1}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
