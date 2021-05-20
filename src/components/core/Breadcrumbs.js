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
    <div>
      <nav aria-label='breadcrumb'>
        <ol class='breadcrumb' style={{ backgroundColor: 'rgb(0,0,0,0)' }}>
          <li class='breadcrumb-item' onClick={() => history.push('/')}>
            <a href=''>Home</a>
          </li>
          {/* <MUIBreadcrumbs.Item >
          Home
        </MUIBreadcrumbs.Item> */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <li class='breadcrumb-item active' aria-current='page'>
                {name}
              </li>
            ) : (
              <li
                class='breadcrumb-item '
                onClick={() => history.push(routeTo)}
              >
                <a href=''>{name}</a>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default withRouter(Breadcrumbs);
