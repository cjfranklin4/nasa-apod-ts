import axios from 'axios';
import { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';
const API_Key = process.env.REACT_APP_API_KEY;

export type APIData = {
  copyright?:string
  date: string
  explanation: string
  hdurl?: string
  media_type: string
  service_version: string
  title: string
  url: string
}

function App() {
  const [picDate, setpicDate] = useState('')
  const [imageData, setImageData] = useState<APIData | null>(null)
  const [errorMes, setErrorMes] = useState('')

  const handleSubmit = (e: any) =>{

    //prevent page refresh
    e.preventDefault();

    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_Key}=${picDate}`)
      .then(res => {
        console.log(res.data)
        setImageData(res.data)
      })
      .catch((err) => {
        setErrorMes(`Sorry, ${picDate} does not have a "NASA Image of the Day" entry. Please search again.`)
      })
  }

  
  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} setpicDate={(e) => setpicDate(e.target.value)} />

      {imageData ? <Body imageData={imageData} />: null}

      {errorMes === '' ? null : errorMes}
    </div>
  );
}

export default App;
