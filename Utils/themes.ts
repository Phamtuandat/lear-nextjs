import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export let theme = createTheme({
    palette: {
        primary: {
            main: '#FF6464',
        },
        secondary: {
            main: '#00ABCC',
            light: '#EDF7FA',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'Heebo, sans-serif',
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthMd: {
                    maxWidth: '860px',
                    '@media (min-width: 900px)': {
                        maxWidth: '860px',
                    },
                },
                maxWidthSm: {
                    maxWidth: '680px',
                    '@media (min-width: 600px)': {
                        maxWidth: '680px',
                    },
                },
                root: {
                    '@media (min-width: 600px)': {
                        padding: '0',
                    },
                },
            },
            defaultProps: {
                maxWidth: 'md',
            },
        },
        MuiLink: {
            defaultProps: {
                underline: 'none',
                color: 'black',
            },
            styleOverrides: {
                root: {
                    color: 'blace',
                    '&:hover, &.isActive': {
                        color: '#FF6464',
                    },
                },
            },
        },
    },
})

theme = responsiveFontSizes(theme)
