type UserListProps = {
  userList: string,
  onUserListChanged: (newUserList: string) => void,
};

export default function UserList({ userList, onUserListChanged }: UserListProps): JSX.Element {
  return (
    <div className="userList">
      <label htmlFor="userListTextArea">User List: </label>
      <textarea
        id="userListTextArea"
        onChange={(event) => onUserListChanged(event.target.value)}
        value={userList}
        rows={10}
      ></textarea>
    </div>
  );
}
