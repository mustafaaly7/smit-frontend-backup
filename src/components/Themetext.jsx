function Text({ text, className, style }) {
    const defaultStyle = { color: '#44a1dc', ...style }; 
    return <p className={className} style={defaultStyle}>{text}</p>;
}

export default Text;