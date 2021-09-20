import React from 'react';
import {ReactComponent as MoshtarianWeb} from "../../../assets/images/web-customers.svg";
import {ReactComponent as FooterWeb} from "../../../assets/images/web-footer.svg";
import './moshtarian.scss'

function Moshtarian() {
    return (
        <div>
            <div id={'moshtarian'}>
                <MoshtarianWeb id={'web'}/>
                <div id={'space'}/>
                <FooterWeb id={'footer'}/>
            </div>
        </div>
    )
}

export default Moshtarian;