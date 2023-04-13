import { Story, Meta } from '@storybook/react/types-6-0';
import EnhancedTable, { TableData } from './index';
import Container from '@mui/material/Container/Container';


export default {
  title: 'Components/EnhancedTable',
  component: EnhancedTable,
  argsTypes : {}
} as Meta;

const Template: Story = (args) => <EnhancedTable {...args} />;
export const Default = Template.bind({});
Default.args = {
  data: [
    { id: 1, name: 'Contract 1', type: 'Type A', perpayment: '$10', termlength: '1 year', payment: '$120' },
    { id: 2, name: 'Contract 2', type: 'Type B', perpayment: '$20', termlength: '2 years', payment: '$480' },
    { id: 3, name: 'Contract 3', type: 'Type C', perpayment: '$15', termlength: '3 years', payment: '$540' },
  ] as TableData[],
};




