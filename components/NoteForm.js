import React, { Component } from 'react';
import { View } from 'react-native';
import { Input } from './common/index';
import { connect } from 'react-redux';
import { updateNote } from './actions';

class NoteForm extends Component {
    render() {
        return (
            <View>
                <Input 
                placeholder="title"
                value={this.props.title}
                onChangeText={value => this.props.updateNote({prop: 'title', value})}
                />
                <Input 
                placeholder="body"
                value={this.props.body}
                onChangeText={value => this.props.updateNote({prop: 'body', value})}
                />
            
            </View>
        )
    }
};

const mapStateToProps = (state) => {
    const { title, body } = state.note;
    return { title, body };
};

export default connect(mapStateToProps, { updateNote })(NoteForm);