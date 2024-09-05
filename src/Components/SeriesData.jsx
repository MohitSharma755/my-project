export const SeriesCard = ({ data }) => {

  const { img_url, name, rating, description, cast, genre, watch_url } = data;     //destructure here
  return (
    <div className=" col-xl-4 col-sm-12 col-md-6 col-lg-4">
      <img src={img_url} alt="" />

      <div className="container">
        <h3>Name : {name} </h3>
        <h3>Rating:   <span className={rating>=8 ? "super" :" genre"} >{rating}</span>    </h3>
        <p>Summary: {description}</p>
        <p>Cast: {cast}</p>
        <p>Genre:   {genre}</p>
        <a href={watch_url} target="_blank" className=" ">
          <button className=" btn btn-primary">Watch now </button></a>
      </div>
    </div>



  );
}