import {action} from "@storybook/addon-actions";

import React from "react";
import EditableSpan, {EditableSpanPropsType} from "./EditableSpan";

import {Meta, Story} from "@storybook/react/types-6-0";




export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'change value'
        },
        value: {
            defaultValue: 'ASDD'
        }
    },
    args: {}
} as Meta;



const Template: Story<any> = (args) => <EditableSpan {...args}/>



export const EditableSpanExample = Template.bind({})

EditableSpanExample.args = {
    value: 'ASDD',
    onChange: action('Value EditableSpan changed')

}