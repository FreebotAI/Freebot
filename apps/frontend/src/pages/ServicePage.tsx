import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';

const steps = ['Describe Issue', 'Select Service', 'Confirm Details'];

const ServicePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [issueDescription, setIssueDescription] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: Implement service submission
    setTimeout(() => {
      setLoading(false);
      // Navigate to dashboard or show success message
    }, 2000);
  };

  const services = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Phone Support',
      description: 'Let Freebot handle phone menus and wait times for you.',
      cost: '50 FREE',
    },
    {
      icon: <ChatIcon sx={{ fontSize: 40 }} />,
      title: 'Chat Support',
      description: 'AI-powered chat support for faster issue resolution.',
      cost: '30 FREE',
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Support',
      description: 'Automated email communication and follow-ups.',
      cost: '20 FREE',
    },
  ];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Describe Your Issue
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              placeholder="Please describe your issue in detail..."
              variant="outlined"
            />
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select Service Type
            </Typography>
            <Grid container spacing={3}>
              {services.map((service) => (
                <Grid item xs={12} md={4} key={service.title}>
                  <Paper
                    sx={{
                      p: 3,
                      cursor: 'pointer',
                      border: (theme) =>
                        selectedService === service.title
                          ? `2px solid ${theme.palette.primary.main}`
                          : '2px solid transparent',
                      '&:hover': {
                        boxShadow: 3,
                      },
                    }}
                    onClick={() => setSelectedService(service.title)}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Box sx={{ color: 'primary.main' }}>{service.icon}</Box>
                      <Typography variant="h6" align="center">
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        {service.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        {service.cost}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Confirm Details
            </Typography>
            <Paper sx={{ p: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Issue Description:</Typography>
                  <Typography color="text.secondary">
                    {issueDescription}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Selected Service:</Typography>
                  <Typography color="text.secondary">
                    {selectedService}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle1">Estimated Cost:</Typography>
                  <Typography color="primary">
                    {services.find((s) => s.title === selectedService)?.cost}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Start New Service Request
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Let Freebot handle your customer service needs efficiently and
          effectively.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {renderStepContent(activeStep)}

          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            {activeStep > 0 && (
              <Button onClick={handleBack} disabled={loading}>
                Back
              </Button>
            )}
            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && !issueDescription) ||
                  (activeStep === 1 && !selectedService) ||
                  loading
                }
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                startIcon={
                  loading && <CircularProgress size={20} color="inherit" />
                }
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ServicePage; 