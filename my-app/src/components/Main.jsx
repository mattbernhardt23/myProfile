import IconCluster from "./IconCluster"
import LinkButtons from "./LinkButtons"

function Main( {refObj} ) {
  return (
    <div className="main">
        <div className="iconLinks">
            <IconCluster />
        </div>
        <div>
            <div className="nameBox">
               <h1>
                Hello, I'm
                <span className="matthew"> Matthew</span>
               .
               <br></br>
               I'm a full-stack developer.
               </h1>
            </div>
        </div> 
        <div className="linkButtonContainer">
                <LinkButtons refObj={refObj}/>
        </div>
    </div>
  )
}

export default Main