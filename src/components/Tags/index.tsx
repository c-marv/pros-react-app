type TagsProps = {
  userList: string,
  language: any,
};

export default function Tags({ userList, language }: TagsProps): JSX.Element {
  return (
    <div className="tags">
      <label>Tags:</label>
      {
        userList.split('\n').map((user: string, index: number) => (
          user && <span key={index} className="tag">{language.greetings} {user}</span>
        ))
      }
    </div>
  );
}
