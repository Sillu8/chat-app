import { Button, CssBaseline, Grid, TextField, Typography } from '@mui/material'



const Login = () => {

  const [data, setData] = useState({});

  
  return (
    <Grid container sx={{
      width: '100dvw',
      height: '100dvh',
      backgroundColor: 'powderblue'
    }}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <CssBaseline />
      <Grid container
        sx={{
          width: 350,
          height: 400,
          backgroundColor: 'background.default',
          color: 'text.primary'
        }}
        flexDirection={'column'}
        gap={2}
        alignItems={'center'}
        justifyContent={'center'}
        p={2}>
        <Typography variant='h5' fontWeight={'bold'}>LOGIN</Typography>
        <TextField
          label='Email or Phone'
        />
        <TextField label='Password' />
        <Typography color={'text.secondary'}>Forgot password?</Typography>
        <Button variant='contained'>Login</Button>
      </Grid>
    </Grid>
  )
}

export default Login