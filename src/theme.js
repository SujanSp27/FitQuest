
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: '#00C2FF', light: '#4FD7FF', dark: '#0093CC', contrastText: '#0B0C0F' },
		secondary: { main: '#00A3B8', light: '#33B8CA', dark: '#007A89', contrastText: '#0B0C0F' },
		success: { main: '#22E6A8' },
		error: { main: '#FF2625' },
		background: { default: '#FFFFFF', paper: '#FFFFFF' },
		text: { primary: '#0B0C0F', secondary: '#4A5B6A' },
	},
	typography: {
		fontFamily: `'Poppins', 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
		h1: { fontWeight: 800 },
		h2: { fontWeight: 800 },
		h3: { fontWeight: 700 },
		h4: { fontWeight: 700 },
		button: { textTransform: 'none', fontWeight: 600 },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					transition: 'all .25s ease',
				},
				containedPrimary: {
					boxShadow: '0 6px 18px rgba(0, 194, 255, 0.25)',
					'&:hover': { transform: 'translateY(-1px)', boxShadow: '0 10px 24px rgba(0, 194, 255, 0.35)' },
				},
			},
		},
	},
});

export default theme;


