import React from 'react';
import cx from 'classnames';
import Divider from '@material-ui/core/Divider';
import {Icon} from 'flwww';
import PreviewerLayoutSelector from '../PreviewerLayoutSelector';
import DeviceManagerContainer from '../../containers/DeviceManagerContainer';
import QuickFilterDevicesContainer from '../../containers/QuickFilterDevicesContainer';
import DevicesIcon from '../icons/Devices';

import styles from './styles.css';
import commonStyles from '../common.styles.css';
import DevicesOverviewContainer from '../../containers/DevicesOverviewContainer';

export default function DeviceDrawer(props) {
  return (
    <div>
      <DevicesOverviewContainer />
      <PreviewerLayoutSelector
        value={props.browser.previewer.layout}
        onChange={val => props.setPreviewLayout(val.value)}
      />
      <QuickFilterDevicesContainer />
    </div>
  );
}
