import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import store from './DummyStore.js'
import Header from './Header.js'
import FolderList from './FolderList'
import Notes from './Notes.js'
import Contents from './Contents'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store,
    }
  }

  


  render() {
  return (
    <div>
      <header>
        <Route
          path = '/' 
          component={Header}
          />

      </header>

      <aside>
        <Route  
          exact path='/'
          render={() => <FolderList folders={this.state.store.folders}/>}
          />

        <Route 
          exact path = '/folder/:folderId'
          render={() =>
          <FolderList folders={this.state.store.folders}/>}
          />

        <Route 
          exact path = '/note/:noteId'
          render={(routeProps) => {
            const {noteId} = routeProps.match.params;
            const note = this.state.store.notes.find(note => note.id === noteId);
            const folder = this.state.store.folders.filter(folder => folder.id === note.folderId);
          return <FolderList folders={folder}/>}}
          />
      </aside>

      <main>
        <Route 
          exact path = '/'
          render={() => <Notes notes={this.state.store.notes}/>}
          />
        
        <Route 
          exact path = '/folder/:folderId' 
          render={(routeProps) =>
          <Notes notes={this.state.store.notes.filter(note=> note.folderId === routeProps.match.params.folderId)}/>}
          />

        <Route 
          exact path = '/note/:noteId'
          render= {(routeProps) =>
          <Notes notes={this.state.store.notes.filter(note => note.id === routeProps.match.params.noteId)}/>}
          />

        <Route
          exact path = '/note/:noteId'
          render={(routeProps) => {
            const note = this.state.store.notes.find(note => note.id === routeProps.match.params.noteId);
            return <Contents content = {note.content}/>}
          }
          />

      </main>
      
    </div>
    );
  }
}
