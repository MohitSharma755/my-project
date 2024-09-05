import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesData";



const Netflixseries = () => {



  return (
    <ul className=" row">
      {seriesData.map((curElem) => {
 return(
        // here key and curElem are props and Seeriescard is another components
      <SeriesCard key={curElem.id}  data={curElem} /> 
    
    )
      })}
    </ul>


  )

}
  export const Footer = () => {
  return (
    <p>Copy right@mohit</p>

  )
}
export default Netflixseries;  