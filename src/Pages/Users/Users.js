/*https://github.com/gregnb/mui-datatables*/ 
import React from 'react';
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container';
import { Divider } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';


const Users = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };

    const columns = ["Name", "Company", "City", "State","Status","Status"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY","Active",<Button variant="outlined" color="primary">
    Primary
  </Button>],
    ["John Walsh", "Test Corp", "Hartford", "CT","Active", <Select
    native
    value={state.age}
    onChange={handleChange}
    inputProps={{
      name: 'age',
      id: 'age-native-simple',
    }}
  >
    <option aria-label="None" value="" />
    <option value={10}>Ten</option>
    <option value={20}>Twenty</option>
    <option value={30}>Thirty</option>
  </Select> ],
    ["Bob Herm", "Test Corp", "Tampa", "FL","Active"],
    ["James Houston", "Test Corp", "Dallas", "TX","Active"],
    ];

    const options = {
    filterType: 'checkbox',
    
    };

    return (
        <div>

            <Divider/>
            <Container fixed style= {{marginTop : '1rem'}}>
                <MUIDataTable
                title={"Users List"}
                data={data}
                columns={columns}
                options={options}
                />

            </Container>
        </div>
    );
}
 
export default Users;