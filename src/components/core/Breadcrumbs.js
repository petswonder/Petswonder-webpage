import React from 'react';
import { withRouter } from 'react-router';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <nav aria-label='breadcrumb'>
        <ol className='breadcrumb p-0 m-0' style={{ backgroundColor: 'rgb(0,0,0,0)' }}>
          <li className='breadcrumb-item font-size-14' onClick={() => history.push('/')}>
            <span>Home</span>
          </li>
          {/* <MUIBreadcrumbs.Item >
          Home
        </MUIBreadcrumbs.Item> */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li className='breadcrumb-item font-size-14 active' aria-current='page' key={index}>
                {name}
              </li>
            ) : (
              <li
                className='breadcrumb-item font-size-14 ' key={index}
                onClick={() => history.push(routeTo)}
              >
                <a href=''>{name}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    
  );
};

export default withRouter(Breadcrumbs);
