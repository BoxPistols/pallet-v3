import "./App.css";
import { Container } from "@mui/material";
import ColorPicker from "./components/ColorPicker";
export const App = () => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ColorPicker />
      </Container>
    </>
  );
};
