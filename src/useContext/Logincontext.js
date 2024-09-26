import React, { createContext, useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const MyLogin = createContext();

function Logincontext({ children }) {
  const[block,setblock]=useState(false)
  

  const [datas, setDatas] = useState({
    username: '',
    password: ''
  });
  const storedcurrent = localStorage.getItem("current");
  const [current, setCurrent] = useState(storedcurrent ? JSON.parse(storedcurrent) : null);
  

  const storedadmin=localStorage.getItem("Admin")
  const[admin,setadmin]=useState(storedadmin? JSON.parse(storedadmin):null)
  


  const navigate = useNavigate();

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas({ ...datas, [name]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/Users");
      const users = response.data;
      const user = users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===false);

        const Admin=users.find((user) => user.username === datas.username && user.password === datas.password&&user.admin===true);
      
      
      if (user) {
        
        if (user.block === false) {
          console.log(user.block)
          localStorage.setItem("current", JSON.stringify(user));
          setCurrent(user);
          alert('Login successfully completed');
          setDatas({ username: '', password: '' });
          navigate('/');
        } else {
          alert("You are blocked by admin");
          setDatas({ username: '', password: '' });
        }
          
        
      }else if (Admin) {
        localStorage.setItem("Admin", JSON.stringify(Admin));
        setadmin(Admin)
        setDatas({ username: '', password: '' }); 
        navigate('/');
      }
       else {
        alert('Incorrect username & password');
      }
    } catch (error) {
      console.log("Error occurred during login:", error);
    }
  };


  const handleCreateAccount = () => {
    navigate('/signup');
  };


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/Product')
      .then((response) => {
        console.log("data",response)
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

 const Adminlogout=()=>{
 setadmin(null)
 localStorage.removeItem("Admin")
 navigate('/')
 }
  const handleblock=async(userid,isblock)=>{
    try {
      const blockstatus=!isblock
      await axios.patch(`http://localhost:3000/Users/${userid}`, { block: blockstatus });
    
    setblock( blockstatus)
    navigate('/userslist')
    } catch (error) {
      console.log(error)
      
    }
    
  }


  return (
    <MyLogin.Provider value={{ handleChange, handleSubmit, handleCreateAccount, datas, current,products,setCurrent,admin,Adminlogout,handleblock,block }}>
      {children}
    </MyLogin.Provider>
  );
}

export default Logincontext;
