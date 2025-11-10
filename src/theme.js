
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: '#00C2FF', light: '#4FD7FF', dark: '#0093CC', contrastText: '#FFFFFF' },
		secondary: { main: '#00A3B8', light: '#33B8CA', dark: '#007A89', contrastText: '#FFFFFF' },
		accent: { main: '#14F1C5' },
		background: { default: '#0B0C0F', paper: '#101417' },
		text: { primary: '#FFFFFF', secondary: '#B8EFFF' },
	},
	typography: {
		fontFamily: `'Poppins', 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
		h1: { fontWeight: 800, color: '#FFFFFF' },
		h2: { fontWeight: 800, color: '#FFFFFF' },
		h3: { fontWeight: 700, color: '#FFFFFF' },
		h4: { fontWeight: 700, color: '#FFFFFF' },
		button: { textTransform: 'none', fontWeight: 700 },
	},
	shape: { borderRadius: 20 },
	components: {
		MuiButton: {
			styleOverrides: {
				root: { borderRadius: 30, transition: 'all .25s ease-in-out' },
				containedPrimary: {
					background: 'linear-gradient(90deg, #00C2FF 0%, #00A3B8 100%)',
					boxShadow: '0 6px 18px rgba(0, 194, 255, 0.28)',
					'&:hover': {
						background: 'linear-gradient(90deg, #0093CC 0%, #007A89 100%)',
						boxShadow: '0 0 10px #00C2FF',
						transform: 'translateY(-1px)'
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: { backgroundColor: '#101417', borderRadius: 30 },
				input: { color: '#FFFFFF' }
			}
		},
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					'&.Mui-selected': { backgroundColor: '#00C2FF', color: '#0B0C0F' }
				}
			}
		}
	},
});

export default theme;






