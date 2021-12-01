import React, { useState } from 'react';
import './App.css';
import LanguageSelector from './components/LanguageSelector';
import Tags from './components/Tags';
import UserList from './components/UserList';

function App(): JSX.Element {
  const [userList, setUserList] = useState<string>('');
  const [language, setLanguage] = useState<any>({ id: 'en', name: 'English', greetings: 'Hi, ' });
  return (
    <div className="container">
      <div className="form">
        <UserList userList={userList} onUserListChanged={(newUserList) => setUserList(newUserList)} />
        <LanguageSelector selectedLanguage={language} onLanguageChanged={(newLanguage) => setLanguage(newLanguage)} />
        <Tags userList={userList} language={language} />
      </div>
    </div>
  );
}

export default App;
