import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages";
import { getHeroById } from "../../selectors/getHeroById";

//const heroImages = require.context('../../../public/assets/heroes',true);

export const HeroScreen = () => {
    
    const { heroeId } = useParams();
    const navigate = useNavigate();
    const hero = useMemo( () => getHeroById(heroeId),[heroeId] );
    
    
    const {
        id,
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    }  = hero;

    const handleReturn = () => {
        navigate(-1);
    }

    if (!hero) {
        return <Navigate to={'./'} />
    }


    //const imagePath = `${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`;
    const imagePath = '.'+heroImages(`./${id}.jpg`);

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft" 
                src={imagePath} 
                alt={superhero} />
            </div>

            <div className="col-8 animate__animated animate__fadeInLeft">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego} </li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher} </li>
                    <li className="list-group-item"> <b>First Appearance:</b> {first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </div>

        </div>
    )
}
