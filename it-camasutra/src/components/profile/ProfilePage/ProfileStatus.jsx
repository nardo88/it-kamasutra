import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.changeStatus(this.state.status)
    }

    statusOnChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
        
    }

    render(){
        return (
            <div className="wrapper">
                {
                    // если editMode содержит true
                    this.state.editMode 
                    // то отрисовываем input
                    ? <input onChange={this.statusOnChange} onBlur={this.deActivateEditMode.bind(this)} autoFocus value={this.state.status} type="text"/> 
                    // иначе отрисовываем span
                    : <span onDoubleClick={this.activateEditMode.bind(this)  } className="statusText">{ !this.props.status ? 'статуса нет' : this.props.status}</span>
                }
                

                
            </div>
        )
    }
}

export default ProfileStatus