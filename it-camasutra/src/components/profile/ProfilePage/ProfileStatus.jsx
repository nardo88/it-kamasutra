import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render(){
        return (
            <div className="wrapper">
                {
                    // если editMode содержит true
                    this.state.editMode 
                    // то отрисовываем input
                    ? <input onBlur={this.deActivateEditMode.bind(this)} autoFocus value={this.props.status} type="text"/> 
                    // иначе отрисовываем span
                    : <span onDoubleClick={this.activateEditMode.bind(this)  } className="statusText">{this.props.status}</span>
                }
                

                
            </div>
        )
    }
}

export default ProfileStatus