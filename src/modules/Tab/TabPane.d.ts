import * as React from 'react';

export interface TabPaneProps {
  [key: string]: any;

  /** An element type to render as (string or function). */
  as?: any;

  /** A tab can be activated, and visible on the page. */
  active?: boolean;

  /** Primary content. */
  children?: React.ReactNode;

  /** Additional classes. */
  className?: string;

  /** A Tab.Pane can display a loading indicator. */
  loading?: boolean;
}

declare const TabPane: React.StatelessComponent<TabPaneProps>;

export default TabPane;
