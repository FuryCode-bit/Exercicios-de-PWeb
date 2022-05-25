import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import api from "./api/api";
import './todo.css'

function CheckList() {

    const [checked, setChecked] = React.useState(true);

    const[notes, setNotes] = useState()
    const[note, setNote] = useState('');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    let today = new Date();
    let day = today.getDate()
    let month =parseInt(today.getMonth()+1);
    let b;

    switch(month){
        case 1: b = "Jan";
            break;
        case 2: b = "Feb";
            break;
        case 3: b = "Mar";
            break;
        case 4: b = "Apr";
            break;
        case 5: b = "May";
            break;
        case 6: b = "Jun"; 
            break;
        case 7: b = "Jul";
            break;
        case 8: b = "Aug";
            break;
        case 9: b = "Sept";
            break;
        case 10: b = "Oct";
            break;
        case 11: b = "Nov";
            break;
        case 12: b = "Dec";
            break;
        }

        const handleChange = (id) => {
            setChecked();

            const data = {"id": id};
            try{
                const res = api.post('/removeNote', data)
                console.log("Deleted")
    
            }catch (error) {
                console.log(error);
                console.log("Falhou :(");
            }
        }
        
        
        function escreverNotas(val){
            val.preventDefault();
   
            const nota = note;
            //console.log(nota, day, b);
   
            const data = {"nota": nota, "dia": day};
   
            try{
                   const res = api.post('/insertNote', data)
                   setNote("")
                   
          
            }catch (error) {
                   console.log(error);
                   console.log("Falhou :(");
            }
          }
   
          useEffect(() => {
                 const fetchNotes= async ()=>{
                     try {
                       const response = await api.get('/getNotes');
                       setNotes(response.data);
                       //console.log("teste: ", response.data)
                     } catch (error) {
                       console.log(error);
                     }
                   }
                   fetchNotes();
               }, [notes])

  return (
      <div className="body">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" style={{marginLeft: "10px"}}>
                  <h4>Criar nota</h4>
              </Typography>

              <form onSubmit={escreverNotas}>
                  <TextField fullWidth label="Escreve a nota" multiline rows={2} value={note} onChange={(val) => setNote(val.target.value)} id="fullWidth" margin="normal" style={{outline:'none'}}/>

                  <Button type="submit" style={{marginTop: "20px", left: "8%", width: "450px", height: "40px", borderRadius: "15px", backgroundColor: "#000FFF", color: "white"}}>Add Todo</Button>
              </form>
          </Box>
        </Modal>
        <div className="frame">
            <header>
                <h1 id="day">Today</h1>
                <h2 id="date">{b}   {day}</h2>
            </header>
            <form>
                <ul className="list">
                        {notes?.map(note => (
                            <li>
                                <Checkbox
                                    id="item"
                                    onChange={() => handleChange(note.noteId)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />

                                <label htmlFor="item">{note.note}</label>
                            </li>
                        ))}
                </ul>
                <Button onClick={handleOpen} style={{marginTop: "20px", left: "15%", width: "300px", height: "40px", borderRadius: "15px", backgroundColor: "#000FFF", color: "white"}}>Add To do</Button>
            </form>
        </div>
    </div>
  )
}

export default CheckList