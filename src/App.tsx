import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button';
import { IconButton, Stack } from "@mui/material";

function App() {

  return (
    <>
      <h1 className="bg-blue-700 py-4 text-center font-extrabold text-4xl border-b-8 border-black text-white tracking-wider ">MUI</h1>

      <Typography variant="h3" component="h3" align="center" className="text-red-700" mt={10} fontWeight={800}>h1. Heading</Typography>
      <Stack spacing={2} direction="row" className="mx-auto flex justify-center items-center">
        <Button variant="contained" color="success" size="large" startIcon endIcon>Submit</Button>
        <IconButton></IconButton>
      </Stack>
    </>
  )
}

export default App
