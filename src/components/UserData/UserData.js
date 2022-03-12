function UserData(props) {
  console.log(props);
  const { username, userJobTitle, tools } = props;
  return (
    <>
      <small>Child Component Starts</small>
      <h2>Hello {username}</h2>
      <p>Title : {userJobTitle}</p>
      <ul>
        {tools.map((tool) => {
          return <li>{tool}</li>;
        })}
      </ul>
      <small>Child Component Ends</small>
      <br />
    </>
  );
}

export default UserData;
