import PropTypes from 'prop-types';

const Title = ({children}) => {
    return (
        <div className='relative border-s-8 border-orange-600 ps-3'>
            <h1 className="text-2xl font-bold text-center my-2">{children}</h1>
            <p className="absolute bottom-2 text-7xl -z-10 opacity-5 text-center">{children}</p>
        </div>
    );
};

export default Title;
Title.propTypes = {
    children:PropTypes.object
  }