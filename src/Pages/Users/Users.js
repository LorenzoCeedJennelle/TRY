/*https://github.com/gregnb/mui-datatables*/ 
import MUIDataTable from "mui-datatables";
import Container from '@material-ui/core/Container';
const Users = () => {

    const columns = ["Name", "Company", "City", "State"];

    const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

const options = {
  filterType: 'checkbox',
  
};
    return (
        <div>
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