import withProps from 'utils/models/withProps';

import { getErrors as errors } from 'models/system/selectors';

const withErrorListProps = withProps({
  errors,
});

export default withErrorListProps;
