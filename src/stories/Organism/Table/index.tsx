import { Table } from '@material-ui/core'
import { Checkbox, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow,Container, Typography, createStyles } from '@mui/material'
import { margin } from '@mui/system';
import React from 'react'
import { useState,useEffect } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';

import {makeStyles} from '@mui/styles';
import { isNotEmittedStatement } from 'typescript';

export interface TableData {
  id: number;
  name: string;
  type: string;
  "perpayment":string;
  "termlength":string;
  payment:string;
}






const useStyles:any = makeStyles(() =>
  createStyles({
    table: {
      backgroundColor: '#201F24',
     
  
    },
    tableBody: {
      backgroundColor: '#38373f',
      
       
    },
    tableCell: {
      
      color: 'white',
    
    },
  })
);

const EnhancedTable = () => {
  const [data, setData] = useState<TableData[]>([]);
  const [rows,setRows] = useState<TableData[]>([])
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [selectAll,setSelect] = useState(false)
  
  

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement> , rowId:number)=>{
    setChecked(prevCheckedRows => ({
      ...prevCheckedRows,
      [rowId]: event.target.checked,
    }));
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    const newChecked: Record<number, boolean> = {};
    data.forEach(({ id }) => {
      newChecked[id] = checked;
    });
    setChecked(newChecked);
    setSelect(checked)
  };
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/data');
        console.log('the promsie is',response);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const classes = useStyles()

  return (
    <div>
      <Container sx={{
      boxSizing : "border-box",

        /* Auto layout */
        
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "10px 0px 10px 10px",
        gap: "20px",
        
        position: "absolute",
        width: "600px",
        height: "400px",
        left: "278px",
        top: "150px",
        overflowX:"auto",
        
        /* background/elevation 1 */
      
        /* border/low emp */
        
        border: "1px solid #28272B",
        borderRadius: "12px",
      }} style={{backgroundColor:"#201F24"}}>
        <Typography variant='h5' style={{color:"white"}}> Your Contracts
        <InfoOutlinedIcon style={{marginBottom:'-5px',marginLeft:'10px',color:'grey'}}></InfoOutlinedIcon></Typography>
      <TableContainer component={Paper} sx={{overflow: 'hidden',overflowX:"scroll" ,maxHeight:"400px"}}>
     <Table aria-label="simple table" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{borderBottom:"none"}}><Checkbox style={{marginBottom:'-5px',color:"white"}}
            checked={selectAll}
            onChange={handleSelectAllClick}></Checkbox></TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Name</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Type</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Per payment</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Term length</TableCell>
            <TableCell style={{color:"white",borderBottom:"none"}}>Payment</TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{backgroundColor:"pink",color:"white"}}>
        {data.map(({id, name, type, perpayment,termlength,payment}) => (
          <TableRow key={id}
          sx={{ '&:last-child td, &:last-child th': { borderBottom:'none'} }}
          style={{ backgroundColor: checked[id] ? '#B4A9FF' : "#201F24"}}>
          <TableCell style={{color:"white",borderBottom:"none"}}><Checkbox  style={{color:"white"}}checked={checked[id]} onChange={event => handleCheckboxChange(event, id)}></Checkbox></TableCell>
             <TableCell component="th" scope="row" style={{color:"white",borderBottom:"none",padding:'5px'}}>
              {name}
              </TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{type}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{perpayment}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{termlength}</TableCell>
              <TableCell style={{color:"white",borderBottom:"none"}}>{payment}</TableCell>
          </TableRow>
        ))}
       

        </TableBody>
</Table>
      </TableContainer>
      </Container>
    </div>
  )
}

export default EnhancedTable

