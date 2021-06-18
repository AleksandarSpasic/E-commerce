import { useIntl } from 'react-intl';

const FormatMessage = ({ children }) => useIntl().formatMessage(children);

export default FormatMessage;
