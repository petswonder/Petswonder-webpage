import React from 'react';
import { Breadcrumb as MUIBreadcrumbs } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split('/').filter((x) => x);
  return (
    <nav aria-label='breadcrumb'>
        <ol class='breadcrumb p-0 m-0' style={{ backgroundColor: 'rgb(0,0,0,0)' }}>
          <li class='breadcrumb-item font-size-14' onClick={() => history.push('/')}>
            <a href=''>Home</a>
          </li>
          {/* <MUIBreadcrumbs.Item >
          Home
        </MUIBreadcrumbs.Item> */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li class='breadcrumb-item font-size-14 active' aria-current='page'>
                {name}
              </li>
            ) : (
              <li
                class='breadcrumb-item font-size-14 '
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
