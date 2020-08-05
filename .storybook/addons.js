import '@storybook/addon-knobs/register';
import 'themeprovider-storybook/register';
import '@storybook/addon-actions/register';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';
import '@storybook/addon-docs/register';
import './style.css';
import theme from './theme';

addons.setConfig({
  theme,
});
