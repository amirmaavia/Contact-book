import React, {useContext} from 'react'
import { Contactdata } from '../context/Contextdata'
import { TableHead, Container } from '@material-ui/core';
import Contactdetail from './Contactdetail'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';



const Contacts = () => {
    const {users} = useContext(Contactdata)
    console.log(users)
    return users.length ? (
      <Container maxWidth="lg">  
<Table>
    <TableHead>
    <TableRow>
    <TableCell><th>Name</th></TableCell>
    <TableCell><th>Number</th></TableCell>
    <TableCell><th>Delete</th></TableCell>
    
    </TableRow>
    
        {users.map( (user) =>(
<TableRow key={user.id}>
    <Contactdetail  user = {user}/>
    </TableRow>
    
    
        )
       
        )}
        
        
</TableHead>
</Table>
</Container>
    
        ) : (<div>
            <Container maxWidth="lg"><Table>
            <TableHead>
            <TableRow>
    <TableCell><th>Name</th></TableCell>
    <TableCell><th>Number</th></TableCell>
    <TableCell><th>Delete</th></TableCell>
    
    </TableRow>
    <h5>NO DATA</h5>
            </TableHead>
            </Table>
            </Container></div>)
            
            
}

export default Contacts
