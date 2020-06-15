import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Myform from '../components/elements/signup.js'
import Mycontent from '../components/elements/content2.js'



 
function Signup(props) {
  return(
<Grid container item xs={12}>
    <Grid item xs={6}> <Mycontent/>
</Grid>
<Grid item xs={6}>
   <Myform/>
</Grid>
</Grid>
  );
}
 
export default Signup;