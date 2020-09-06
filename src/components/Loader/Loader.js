import React from 'react';
import './Loader.scss';

const Loader = props => {
    let loader = (
        <div className="loading">
            <div className={'modalBackground'}>
                <div className={'activityIndicatorWrapper'}>
                    <div className={'indicatorContainer'}>
                        <div className="activity indicator"></div>
                    </div>
                    <div className={'textContainer'}>
                        <p className={'textData'}>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    if (props.forced) {
        return loader;
    } else {
        return loader;
    }
}

export default Loader;