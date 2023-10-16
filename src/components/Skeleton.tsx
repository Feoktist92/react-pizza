import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton:React.FC = () => (
    <ContentLoader
        className='pizza-block'
        speed={2}
        width={280}
        height={465}
        viewBox='0 0 280 465'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <circle cx='140' cy='130' r='125' />
        <rect x='0' y='269' rx='10' ry='10' width='280' height='28' />
        <rect x='0' y='310' rx='10' ry='10' width='280' height='88' />
        <rect x='0' y='427' rx='10' ry='10' width='90' height='27' />
        <rect x='126' y='416' rx='30' ry='30' width='152' height='45' />
    </ContentLoader>
);


