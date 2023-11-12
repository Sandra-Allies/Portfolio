import './about.scss';

function About() {
    return (
        <div className="About">
            <table className="About-table">
                <caption className="About-caption">Bienvenu chez moi, j'espère que vous avez apporté des chocolatines ? <span className="About-vin">Ou du vin, ça dépend de l'heure qu'il est actuellement.</span></caption>
                <tr>
                    <td>
                        <h2 className="About-title">Il était une fois...</h2>
                    </td>
                </tr>

                <tr>
                    <td>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
                        </p>
                    </td>
                </tr>
                    <tr>
                        <td>
                            <strong>Mon Objectif premier : Monter en compétences pour gagner en autonomie.</strong>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            PS : Pour le vin, je suis une grande fan de Grave ! Sinon un côte de bourg fera l'affaire.
                        </td>
                    </tr>
            </table>

        </div >
    );
}

export default About;
