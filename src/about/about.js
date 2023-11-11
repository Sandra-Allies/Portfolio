import './about.scss';

function About() {
    return (
        <div className="About">
            <table className="About-table">
                <caption className="About-caption">Bienvenu chez moi, j'espère que vous avez apporté des chocolatines ?</caption>
                <tr>
                    <td>
                        <h2  className="About-title">Il était une fois...</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!
                        </p>
                        <iframe src="https://www.youtube.com/embed/jfKfPfyJRdk?si=52wRc1tTWMrEnu9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </td>
                </tr>
            </table>

        </div >
    );
}

export default About;
