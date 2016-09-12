//import React from 'react';
//import ReactDOM from 'react-dom';

var dropdownStyle = {
    position: 'relative',
    display: 'inline-block'
};

var dropdownContentStyle = {
    visible: {
        display: 'none',
        position: 'absolute',
        zIndex: 1
    },
    invisible: {
        display: 'block',
        position: 'absolute',
        zIndex: 1
    }
}

class NewFileDropdownItem extends React.Component {
    render() {
        return (<li>{"New"}</li>);
    }
}

class FileDropdownMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.style}>
                <ul>
                    <li>{"New"}</li>
                    <li>{"Load"}</li>
                    <li>{"Save"}</li>
                    <li>{"Save As"}</li>
                </ul>
            </div>
        );
    }
}

class ToolButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            enabled: true,
            hovered: false
        };
    }
    toggleHover() {
        this.setState({hovered: !this.state.hovered});
    }
    render() {
        if (this.state.hovered === true) {
            return (
                <div style={dropdownStyle} onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                    {this.state.text}
                    <FileDropdownMenu style={dropdownContentStyle.visible} />
                </div>
            );
        } else {
            return (
                <div style={dropdownStyle} onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                    {this.state.text}
                    <FileDropdownMenu style={dropdownContentStyle.invisible} />
                </div>
            );
        }
    }
}

class TopBar extends React.Component {
    constructor() {
        super();
        this.state = {
            enabled: true
        };
    }
    render() {
        return (
            <div>
                <div className="btn-group">
                    <ToolButton text={"File"}/>
                    <ToolButton text={"Pen"}/>
                    <ToolButton text={"Color"}/>
                </div>
            </div>
        );
    }
}

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

class Canvas extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 800, 600);
        ctx.fillRect(0, 0, 800, 600);
    }
    render() {
        return (
            <canvas ref="canvas" width={800} height={600}/>
        );
    }
}

class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <TopBar />
                <Canvas />
            </div>
        );
    }
}

ReactDOM.render(
    <MainComponent />,
    document.getElementById('mainContainer')
);
