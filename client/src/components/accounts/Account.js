import { Card } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';
import Moment from 'react-moment';
const Account = () => (
  <AccountConsumer>
    { value => (
        <Card>
          <Card.Content>
            <Card.Header>{value.username}</Card.Header>
            <Card.Meta>
              Date Joined: 
              <Moment format="MM/DD/YYYY">
                {value.created_at}
              </Moment>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
            <p>
              Membership Level: {value.membership}
            </p>
          </Card.Content>
        </Card>
    )}
  </AccountConsumer>
)
export default Account;