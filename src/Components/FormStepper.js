import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import Form1 from '../Components/Form1'
import Form2 from '../Components/Form2'
import Form3 from '../Components/Form3'
import Lastpage from '../Components/Lastpage'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Your Details', 'Your Address', 'Your Education', 'Thanks'];
}

function getStepContent(stepIndex,handleNext) {
  switch (stepIndex) {
    case 0:
      return <Form1 handleNext={handleNext}  />;
    case 1:
      return <Form2 handleNext={handleNext} /> ;
    case 2:
      return <Form3  handleNext={handleNext} /> ;
    case 3:
      return <Lastpage /> ;
    default:
      return 'Unknown step';
  }
}

export default function FormStepper( ) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    // console.log("Clicking Next")
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   console.log("click back");
    
  // };

  return (
    <div className={classes.root}>
      <Stepper style={{backgroundColor:" #76d7c4 "}} activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext)}</Typography>
            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}
