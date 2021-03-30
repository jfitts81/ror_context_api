import { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';
const AccountForm = ({ updateAccount }) => {
  const [username, setUserName] = useState("")
  const [membership, setMembership] = useState("")
  // const [user, setUser] = useState({ username: "", membership: ""})
  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { username, membership }
    updateAccount(1, user)
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="username"
        value={username}
        onChange={(e, { value }) => setUserName(value)}
        label="Username"
        type="text"
      />
      <Form.Select 
        name="membership"
        value={membership}
        onChange={(e, { value}) => setMembership(value)}
        label="Memberships Levels"
        options={membershipOpts}
      />
      <Form.Button>Save</Form.Button>
    </Form>
  )
}
const ConnectedAccountForm = (props) => (
  <AccountConsumer>
    { value => (
      <AccountForm 
        {...props}
        {...value}
      />
    )}
  </AccountConsumer>
)
const membershipOpts = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
]
export default ConnectedAccountForm;