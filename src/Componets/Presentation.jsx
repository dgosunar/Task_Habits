import logo from '../T&H.png'
import { MyImage } from '../styles/styles';

function Presentation() {

    return (
        <>
            <MyImage src={logo} style={{
                borderRadius: "15%", width: "200px"}} />
        </>
    );
}

export { Presentation };