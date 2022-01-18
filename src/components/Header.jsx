import PropTypes from 'prop-types'

function Header({text,fontSize}) {
    const headerStyle={
        fontSize :25,
    }
        

    
    return (
        <header style={headerStyle}>
            <h1>{text}</h1>
        </header>
    )
}
Header.defaultProps = {
    text:'Feedback Form'
}
Header.propTypes = {
    title:PropTypes.string,
}
export default Header
