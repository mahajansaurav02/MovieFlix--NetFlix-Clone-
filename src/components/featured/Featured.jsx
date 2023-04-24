import "./featured.scss"
import PlayArrow from '@material-ui/icons/PlayArrow'
import InfoOutlined from '@material-ui/icons/InfoOutlined'

export const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type==='movie' ?  "Movies" :"Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantacy">Fantacy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>

          </select>
        </div>
      )

      }
                <img width="100%" src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
     <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14-u3kxYlpMhwF1_qLsGxZVglEchZL48d6I6HrsxAVhrBlHUYYSeESza06xl4GJG8P_4&usqp=CAU" alt="" />
        <span className="desc">Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Magnam ad eaque non a quo deleniti repudiandae 
         explicabo optio error, illum facilis esse amet nulla ipsum veniam sunt dolorem quae alias.</span>
         <div className="buttons">
            <button className="play">
              <PlayArrow/> 
              <span>Play</span>
              </button> 
            <button className="more">
              < InfoOutlined/> 
              <span>Info</span>
              </button> 
         </div>
    </div>
    </div>
   
  )
}
