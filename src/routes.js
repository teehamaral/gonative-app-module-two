import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

// Screens
import List from 'screens/list';
import OpenIssues from 'screens/issues/open';
import ClosedIssues from 'screens/issues/closed';
import AllIssues from 'screens/issues/all';

const createNavigator = () => StackNavigator({
  List: { screen: List },
  Issues: {
    screen: TabNavigator({
      AllIssues: { screen: AllIssues },
      OpenIssues: { screen: OpenIssues },
      ClosedIssues: { screen: ClosedIssues },
    }),
  },
});

export default createNavigator;
