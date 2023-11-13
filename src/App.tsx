import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from './redux/Slice/userSlice';

function App() {
  const dispatch = useDispatch()
  const user= useSelector(state=>state.user)
  console.log(user)

  return (
    <>
      <button onClick={()=>dispatch(fetchUser())}>redux</button>
      {user.loading && 'loading......'}
      {user.error && 'error'}
      {user.data.results[0].name.title}
      {user.data.results[0].email}
      <img src={user.data.results[0].picture.large} alt="" />
      </>
  );
}

export default App
