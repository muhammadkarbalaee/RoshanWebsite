import {FullPage, Slide} from 'react-full-page';
import Header from "./components/header/header";
import Kashf from "./components/slides/kashf";
import Alefba from "./components/slides/alefba";
import Harf from "./components/slides/harf";
import Hazm from "./components/slides/hazm";
import Moshtarian from "./components/slides/moshtarian/moshtarian";
import { Route, Switch } from 'react-router-dom';
import JoinusPage from "./components/header/join-us-page/joinus-page";
import ContactUsPage from "./components/header/contact-us-page/contact-us-page";


function RoshanWebsite() {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact>
                    <FullPage>
                        <Slide>
                            <div className='roshan-website'>
                                <Header type={'main'}/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Kashf/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Alefba/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Harf/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Hazm/>
                            </div>
                        </Slide>
                        <Slide>
                            <div className='roshan-website'>
                                <Moshtarian/>
                            </div>
                        </Slide>
                    </FullPage>
                </Route>
                <Route path={'/contact-us'}>
                    <Header type={'contact-us'}/>
                </Route>
                <Route path={'/join-us'}>
                    <Header type={'join-us'}/>
                </Route>
            </Switch>
        </div>
    )
}

export default RoshanWebsite;
