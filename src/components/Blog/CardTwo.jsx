import "./../Slide/style.css"
import sdata from "./../Slide/Sdata"


const CardTwo = () => {
  return (
    <>
      <div className="cardTwo top slide">
          {sdata.map((value) => {
              return (
                  <div className="box" key={value.id}>
                      <div className="img">
                          <img src={value.cover} alt="" />
                      </div>
                      <div className="text">
                          <span>{value.category}</span>
                          <h2>{value.title}</h2>
                          <p>{value.desc}</p>
                      </div>
                  </div>
              )
          })}
      </div>
    </>
  )
}

export default CardTwo