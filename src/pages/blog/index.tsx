import Image from "next/image";
import {
  Stack,
  Button,
  Box,
  Divider,
  Container,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Paper,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

type BlogProps = {  
  id: number;
}

export default function Blog( props: BlogProps) {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();
  console.log(router);
  console.log(router.query);
  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      
      if (id) {
        const step = parseInt(id.toString());
        setActiveStep(step);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth='sm'>
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
            <Button
              onClick={() => {
                router.push("/about");
              }}
              sx={{ mt: 1, mr: 1 }}
            >
              Back To About
            </Button>
          </Paper>
        )}
      </Box>
    </Container>
  );
}
