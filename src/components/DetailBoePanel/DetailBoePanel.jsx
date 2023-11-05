import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { generateBoeResume } from "../../api/boe";
import { saveResumesData, getResumesData } from "../../api/storage";

import "./DetailBoePanel.scss";

const DetailBoePanel = props => {
  const { data } = props;
  const [resumeData, setResumeData] = useState({});
  const [loader, setLoader] = useState(false);

  let dt;

  useEffect(() => {
    dt = getResumesData("boeResumes");

    if (dt && Object.keys(dt).includes(data.itId)) {
      setResumeData(dt[data.itId]);
    }
  }, [JSON.stringify(resumeData)]);

  const generateChatGPTResumeOnClick = async () => {
    setLoader(true);
    const ar = await generateBoeResume(data.itUrlXml);
    const element = {
      ...getResumesData("boeResumes"),
      [data.itId]: ar.data
    };
    setResumeData(element);
    saveResumesData("boeResumes", element);
    setLoader(false);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent sx={{ marginLeft: 5 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Sección: ${data.scNombre}`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Departamento: ${data.dpNombre} (${data.dpEtq})`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`Epígrafe: ${data.epNombre}`}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {`ID: ${data.itId}`}
        </Typography>
        {resumeData?.resume ? (
          <>
            <Box sx={{ maxWidth: "90%" }}>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {resumeData?.topics &&
                  resumeData.topics.map((el, idx) => (
                    <Chip key={idx} label={el} variant="outlined" />
                  ))}
              </Stack>
              <Typography variant="body2" sx={{ marginTop: "7px" }}>
                {resumeData.resume}
              </Typography>
            </Box>
          </>
        ) : (
          <CardActions>
            {loader ? (
              <CircularProgress />
            ) : (
              <Button size="medium" onClick={generateChatGPTResumeOnClick}>
                Generar Resumen con ChatGPT
              </Button>
            )}
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

DetailBoePanel.propTypes = {
  data: PropTypes.object
};

export default DetailBoePanel;
