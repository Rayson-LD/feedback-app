
function Card({children,marginTop,paddingBottom,reverse}) {
    const FeedbackItemStyle = {
        marginTop:20,
        paddingBottom:10,
        backgroundColor:reverse?'white':'rgba(0,0,0,0.4)',
        color:reverse?'black':'white'
        
    } 
    return (
        <div className="col card rounded-pill"  style={FeedbackItemStyle}>
            {children}
        </div>
    )
}
Card.defaultProps = {
    reverse :true
}

export default Card
