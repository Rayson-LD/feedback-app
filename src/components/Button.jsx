import PropTypes from 'prop-types'

function Button({children,type,version,isdisabled,onClick}) {
    return (
        <button type={type}  onClick={onClick} className={`btn btn-${version} ${isdisabled}`}>
            {children}
        </button>
    )
}
Button.defaultProps = {
    type:'button',
    version:'dark',
    isdisabled : 'false'
}
Button.propTypes = {
    children:PropTypes.node.isRequired,
    isdisabled: PropTypes.string,
    version:PropTypes.string,
    type:PropTypes.string

}
export default Button
