import withProps from '../../utils/models/withProps';

import { addTodo } from '../../models/todos/actions';

const withHeaderProps = withProps(undefined, { addTodo });

export default withHeaderProps;
