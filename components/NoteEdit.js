import _ from 'lodash';
import React, { Component } from 'react';
import NoteForm from './NoteForm';
import { View, Text, Button, Modal } from 'react-native';
import { updateNote, editNote, deleteNote } from './actions';
import { Spinner } from './common/index';
import { connect } from 'react-redux';

class NoteEdit extends Component {
    state = {
        modalVisible: false,
        deleted: false
      };

    componentWillMount() {
        _.each(this.props.note, (value, prop) => {
            this.props.editNote({ prop, value });
        });
    }

    onSavePress() {
        // const { title, body } = this.props;
        // this.props.updateNote({ })
        _.each(this.props.note, (value, prop) => {
            this.props.updateNote({ prop, value });
        });
    };

    onDeletePress() {
        this.setState({modalVisible: !this.state.modalVisible});
    };

    onDeleteConfirm() {
        this.props.deleteNote(this.props.note);
        this.setState({modalVisible: !this.state.modalVisible});
    };

    renderContent() {
        if (this.props.loading) {
            return <Spinner size="large"/>
            }
            
            return (
                <View>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible} 
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                        }}>
                        <Text style={{ fontSize: 22, textAlign: 'center'}}>Are you sure you want to delete this note?</Text>
                        <Button title="Delete Note" onPress={this.onDeleteConfirm.bind(this)}> Delete </Button>
                        <Button title="Keep Note" onPress={() => this.setState({modalVisible: !this.state.modalVisible})}> Delete </Button>
                    </Modal>
                    <NoteForm {...this.props} />
                    <Button title="Save" onPress={this.onSavePress.bind(this)}>
                        Save
                    </Button>
                    <Button title="Delete" onPress={this.onDeletePress.bind(this)}>
                        Delete
                    </Button>
                </View>
            )
        };


    render() {
        return (
            <View>
                {this.renderContent()}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { title, body, loading } = state.note;
    return { title, body, loading };
};

export default connect(mapStateToProps, { updateNote, editNote, deleteNote })(NoteEdit);