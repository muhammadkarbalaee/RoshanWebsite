import HarfMobile from "../jsx-svgs/mobile/harf";
import './slides-style.scss'
import {ReactComponent as HarfWebImage} from "../../assets/images/web-harf-image.svg";
import HarfWebText from "../jsx-svgs/web/harf-text";

function Harf() {
    return (
        <div>
            <div id={'harf'}>
                <div id={'mobile'}>
                    <HarfMobile/>
                </div>
                <div id={'web'}>
                    <HarfWebImage id={'image'}/>
                    <div id={'space-between'}/>
                    <HarfWebText id={'text'} />
                </div>
            </div>
        </div>
    )
}

export default Harf;
