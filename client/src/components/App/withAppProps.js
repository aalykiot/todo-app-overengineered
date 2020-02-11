import withProps from 'utils/models/withProps';

import { getLoading as loading } from 'models/system/selectors';

const withAppProps = withProps({
  loading,
});

export default withAppProps;
