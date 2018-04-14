import React, { Component } from 'react';
import { ScrollView, Text, View, ListView, Button } from 'react-native';
import { connect } from 'react-redux';
import { fetchNotes } from './actions';
import NoteItem from './NoteItem';
import { Spinner } from './common/index';

class NotesList extends Component {
  
    componentWillMount() {
        this.props.fetchNotes();
    };
   
    _renderRow(note) {
        return <NoteItem note={note}/>
    }

    _renderNotes() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        } 

        if (this.props.notesAvailable)
            return (
                <ListView
                dataSource={this.props.dataSource}
                renderRow={this._renderRow}
                />
            )
            return (
                <Text>Start by adding notes!</Text>
            )
        };

    render() {
        return (
            <View>
                {this._renderNotes()}
            </View>
        );
    };
   
};


const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
  });

const mapStateToProps = state => {
    return {
        notesAvailable: state.note.notes !== {},
        loading: state.note.loading,
        dataSource: dataSource.cloneWithRows(state.note.notes)
    };
};


export default connect(mapStateToProps, { fetchNotes })(NotesList);