import { ThreeCircles } from 'react-loader-spinner';


export const Loader: React.FC = () =>{
    return (
        <div className='container'>
            <div
                style={{
                    margin: '0 auto',
                    maxWidth: '600px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '120px',
                    marginBottom: '120px',
                }}
            >
                <ThreeCircles
                    height='150'
                    width='150'
                    color='#aa3535'
                    visible={true}
                    ariaLabel='three-circles-rotating'
                />
            </div>
        </div>
    );
}


