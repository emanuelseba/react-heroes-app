import { Link } from "react-router-dom";
import { heroImages } from "../../helpers/heroImages";

//const heroImages = require.context('../../../public/assets/heroes',true);

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    //const imagePath = `${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`;
    const imagePath = '.'+heroImages(`./${id}.jpg`);
    const link = `./hero/${id}`;
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img 
                        src={imagePath} 
                        className="card-img-top" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                                <h5 className="card-title">{superhero}</h5>
                                <p className="card-title">{alter_ego}</p>
                                {
                                    (alter_ego !== characters) && 
                                    <p className="text-muted"> {characters}</p>
                                }
                                <p className="card-text">
                                    <small className="text-muted">{first_appearance}</small>
                                </p>
                                <Link to={link} >
                                    Mas...
                                </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
