import React from 'react';
import {pageLinks} from '../data';
import PageLink from './PageLink';

const PageLinks = ({itemClass, parentClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        return <PageLink key={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
