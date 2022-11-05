import { APIData } from "../App"

type BodyProps = {
    imageData: APIData
}
//video test date is 2012-11-14
const Body = ({imageData}: BodyProps) => {
    return (
        <div>
            <div>
                <h2>{imageData.title}</h2>

                {imageData.media_type==='image'? <img src={imageData.hdurl ? imageData.hdurl : imageData.url} alt={imageData.title}/> : null}

                {imageData.copyright ? <p>{imageData.copyright}</p> : null}
            
                {imageData.media_type==='video'? <iframe title={imageData.title} id="picVid" src={imageData.url}></iframe>: null}
    
                <p>{imageData.explanation}</p>
            </div>
        </div> 
    )
}
export default Body