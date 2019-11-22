import React from 'react';
import { reduxForm } from 'redux-form';

import { apiInstance } from '../../config/env.js';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: props.note,
        };
    }

    handleSubmit(event) {
      event.preventDefault();
      const { id, lightbox_id } = this.props;
      apiInstance.put(`/lightbox/${lightbox_id}/${id}`, {
          note: this.state.note,
      })
      .then((response) => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleChange(event) {
        this.setState({note: event.target.value});
    }

    render() {
        return (
            <div style={this.styles.container} id={`note-${this.props.id}`}>
            <form onSubmit={this.handleSubmit} style={this.styles.form}>
            <textarea style={this.styles.textarea} name="note" onChange={(e) => this.handleChange(e) } placeholder="Note..." value={ this.state.note } />
            { this.props.editable ? (<button style={this.styles.button} onClick={(e) => this.handleSubmit(e)} type="submit">Save</button>) : null }
            </form>
            </div>
        );
    }

    styles = {
        container: {
            display: 'none',
            position: 'absolute',
            top: '60px',
            opacity: '70%',
            width: '100%',
            height: '50%',
            zIndex: '1',
        },
        form : {
            width: '100%',
            height: '100%',
        },
        textarea: {
            width: '100%',
            height: '80%',
            minHeight: '80px',
            resize: 'none',
            boxSizing: 'border-box',
        },
        button: {
            width: '50%',
            height: '20%',
            position: 'absolute',
            bottom: '0px',
            left: '25%',
            color: '#F58F4D',
            fontSize: '14px',
            fontWeight: 'bold',
            backgroundColor: 'white',
            border: '1px #F58F4D solid',
            cursor: 'pointer',

            ':hover': {
                color: 'white',
                 backgroundColor: '#F58F4D',
            }
        },
    }
}

export default reduxForm({ form: 'login' })(NoteForm);