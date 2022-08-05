import { Link } from "react-router-dom"
export default function Nav ({user,handleSignOut}) {

    return (
        <nav className="row navbar navbar-expand-lg navbar-light bg-primary" >
            <div className="container-fluid">
              
            <Link className="navbar-brand text-start w-20" to="/">
                <img src="https://i.imgur.com/7w9MouD.png" style={{maxWidth:"4.6em", marginLeft:"1em"}} />

            
            </Link>
            <button className="navbar-toggler float-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
               
                <div className="collapse navbar-collapse " id="navbarColor03">
                    <ul className="navbar-nav ms-auto " style={{fontSize:"1.4em", marginRight:"1em"}} >
                        <li className="nav-item test">
                            <Link className="nav-link active " to="/">Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active" to="/therapists">Therapists
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item test">
                            <Link className="nav-link active" to="/about">About
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                    </ul>
                    <div>
                    <div id="signInDiv" className="nav-link test"></div>
                    { Object.keys(user).length != 0 &&
                    <button onClick={(e)=> handleSignOut(e)}> signout </button>
                    }
                    { user &&
                        <div>
                        <img src={user.picture} alt="" />
                        <h3>{user.name}</h3>
                        </div>

                        }
                    </div>
                </div>
            </div>
        </nav>

        // <div className="nav">
        //     <div className="navlinks">
        //         <Link to="/therapists">Home</Link>
        //         <Link to="/about">About</Link>
        //     </div>
        // </div>
    )
}