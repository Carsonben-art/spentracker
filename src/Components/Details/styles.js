import { makeStyles } from "@material-ui/core";


export default makeStyles( (theme)=>({
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
    income: {
        borderBottom: '10px solid rgba(0,255,0,0.8)',
    },
    expense:{
        borderBottom: '10px solid rgba(255,0,0,0.8)',
    }
}));