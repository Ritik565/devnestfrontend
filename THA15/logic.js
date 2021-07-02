const myfunction = () => {
    return React.createElement("h1", {}, 'HELLO World');

}
ReactDOM.render(React.createElement(myfunction), document.getElementById('root'));
