
import React, {useState} from 'react'
import { Form ,Button} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { EditTodoItem } from '../Slices/ToDoSlice';
const EditToDo = () => {

    const [newDescription,setNewDescription] = useState("")
    const dispatch= useDispatch()
    const params= useParams();
    const Uid=params.id
    const list = useSelector(state => state.todo.todolist)

    let  item = list.find((el)=>el.id==Uid)

  
    const handleEdit=()=>{  
   dispatch(EditTodoItem({id:Uid,description:newDescription}))
   }
    return (
        <div>
           <Form >
           <Form.Control  type='text' value={item.title} disabled></Form.Control>
                <Form.Control onChange={(e)=>setNewDescription(e.target.value)} type='text' placeholder={item.description}></Form.Control>
                <Button onClick={()=>handleEdit()}>Edit</Button>
               </Form> 
        </div>
    )
}

export default EditToDo
