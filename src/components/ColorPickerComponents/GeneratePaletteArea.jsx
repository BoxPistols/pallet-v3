import React from "react";
import { Button } from "@mui/material";

// カラーパレット生成エリアコンポーネント
const GeneratePaletteArea = ({ color, setPalette }) => {
  const handleGenerateClick = () => {
    setPalette(color);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleGenerateClick}>
      カラーパレット生成/再生成
    </Button>
  );
};

export default GeneratePaletteArea;
