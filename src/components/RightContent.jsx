import React, { Fragment, useRef } from 'react';
import '../scss/index.scss';

import { NavLink } from 'react-router-dom';
import Routers from '../routes/Routers';

const NAV = [
    {
        display: 'Today',
        url: '/today',
    },

    {
        display: 'Week',
        url: '/week',
    },

    {
        display: 'Hour',
        url: '/hour',
    },
];

const RightContent = () => {
    return (
        <Fragment>
            <div className="right__content__wrapper p-4">
                <nav className="d-flex align-item-center justify-content-between">
                    <ul className="nav__list d-flex fs-5 fw-bold">
                        {NAV.map((item, index) => (
                            <li className="nav__item m-2" key={index}>
                                <NavLink to={item.url} className={(navData) => (navData.isActive ? 'active' : 'none')}>
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="user__icon">
                        <img
                            src="https://i.pinimg.com/originals/89/54/38/895438247efa788551d1919d44f176ca.png"
                            alt=""
                        />
                    </div>
                </nav>
                <Routers />
            </div>
        </Fragment>
    );
};

export default RightContent;
