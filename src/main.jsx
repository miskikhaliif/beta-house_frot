import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider, createMuiTheme } from '@mui/material'
import { purple } from '@mui/material/colors'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const queryclient = new QueryClient()
const theme = createTheme({
  palette: {
    primary: {
      main: '#646970',    
      dark:'#646970',
      light:"#E9F7EF"
    },    
    error:{
      main:"#E50F0C",
      warning:"#E75E06",
      dark:'#145A32',
    }
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(

 
 <React.StrictMode>
   <QueryClientProvider client = {queryclient} >
  <ThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    <ToastContainer/>
    </BrowserRouter>
    </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
