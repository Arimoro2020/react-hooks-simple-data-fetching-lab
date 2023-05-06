// create your App component here
import {useEffect, useState} from 'react';


function App(){
    const [isImage, setIsImage] = useState(null)
  
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>setIsImage(data.message))
        
        
    },[])

    if(!isImage){
        return <p>Loading...</p>
    }

    return(<img src={isImage} alt="A Random Dog"/>)

}

export default App;
