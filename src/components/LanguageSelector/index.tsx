import { ChangeEvent } from 'react';

import languages from '../../data/languages.json';

type LanguageSelectorProps = {
  selectedLanguage: any,
  onLanguageChanged: (newLanguage: any) => void,
};

export default function LanguageSelector({ selectedLanguage, onLanguageChanged }: LanguageSelectorProps): JSX.Element {
  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = languages.find((language) => language.id === event.target.value);
    onLanguageChanged(newLanguage);
  }

  return (
    <div className="languageSelector">
      <label htmlFor="languageSelect">Language: </label>
      <select id="languageSelect" value={selectedLanguage?.id} onChange={handleChangeLanguage} >
        {
          languages.map(language => (
            <option key={language.id} value={language.id}>{language.name}</option>
          ))
        }
      </select>
    </div>
  );
}
