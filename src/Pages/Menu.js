import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import {withRouter} from 'react-router-dom';



const Menu = props => {

    const  {history, location} = props;
    const {pathname} = location;
 

    const pathnames = pathname.split('/').filter(x => x);
    

  return (
    <Breadcrumbs aria-label="breadcrumb">
     <Link color="inherit" onClick={() => history.push('/Menu')}> Menu </Link>
    
    </Breadcrumbs>
  );
}

export default withRouter(Menu);