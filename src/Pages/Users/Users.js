/*https://github.com/gregnb/mui-datatables*/ 
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container';
import { Divider } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const Users = () => {

    const columns = ["Name", "Company", "City", "State","Status","Actions"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY","Active",<Button variant="outlined" color="primary">
    Primary
  </Button>],
    ["John Walsh", "Test Corp", "Hartford", "CT","Active"],
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