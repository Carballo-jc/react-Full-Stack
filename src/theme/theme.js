import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
palette:{
    primary:{
        main:'#ffff',
        
    }
  
},
overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor:"#EBEFF5"
        },
      },
    },
  },

MuiPaperRoot:{
    MarginBottom:4
},

});


