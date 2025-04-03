import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  LinearProgress,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';

const DashboardPage: React.FC = () => {
  const stats = [
    { label: 'Active Services', value: '3' },
    { label: 'Time Saved', value: '12.5 hrs' },
    { label: 'Success Rate', value: '95%' },
    { label: 'FREE Tokens', value: '1,250' },
  ];

  const activities = [
    {
      time: '2 hours ago',
      title: 'Internet Service Issue',
      status: 'In Progress',
      progress: 60,
    },
    {
      time: '5 hours ago',
      title: 'Bank Account Inquiry',
      status: 'Completed',
      progress: 100,
    },
    {
      time: '1 day ago',
      title: 'Flight Reservation',
      status: 'Completed',
      progress: 100,
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Stats Section */}
      <Grid container spacing={3} mb={4}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h4" component="div" gutterBottom>
                {stat.value}
              </Typography>
              <Typography color="text.secondary" variant="subtitle1">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Activity Timeline */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <Timeline>
              {activities.map((activity, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      color={activity.progress === 100 ? 'success' : 'primary'}
                    />
                    {index < activities.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary">
                        {activity.time}
                      </Typography>
                      <Typography variant="body1">{activity.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Status: {activity.status}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={activity.progress}
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </Grid>

        {/* Token Balance */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              FREE Token Balance
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 2,
              }}
            >
              <Typography variant="h3" gutterBottom>
                1,250
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                FREE Tokens
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center" mt={2}>
                You can use FREE tokens to access premium features and services.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage; 