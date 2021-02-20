
import {Meta, Story} from "@storybook/react/types-6-0";
import React from "react";
import AppWithRedux from "./AppWithRedux";
import {ReduxStoreProviderDecorator} from "../stories/decorators/ReduxStoreproviderDecorator";

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta;



const Template: Story = (args) => <AppWithRedux {...args}/>



export const AppWithReduxExample = Template.bind({})

AppWithReduxExample.args = {}