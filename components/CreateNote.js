import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { createNote, updateNote } from './actions';
import { Spinner } from './common/index';
import NoteForm from './NoteForm';

class CreateNote extends Component {

    renderButton() {
        if (this.props.loading) {
            return <Spinner />
        }

        return <Button title="Save" onPress={this.onButtonPress.bind(this)}>Save</Button>
    };

    onButtonPress() {
        const { title, body } = this.props;
        this.props.createNote({ title, body });
    };

    render() {
    return (
        <View>
            <NoteForm  {...this.props} />
            {this.renderButton()}
        </View>
        );
    };
};


const mapStateToProps = state => {
    return {
        title: state.note.title,
        body: state.note.body,
        loading: state.note.loading
    };
};

export default connect(mapStateToProps, { createNote, updateNote }) (CreateNote);