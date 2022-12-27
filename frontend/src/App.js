import UserSignupPage from './pages/UserSignupPage/UserSignupPage';

import * as apiCalls from './api/apiCalls';

const actions = {
  postSignup: apiCalls.signup
}

function App() {
  return (
    <UserSignupPage actions={actions} />
  );
}

export default App;
