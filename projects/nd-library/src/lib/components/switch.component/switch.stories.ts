import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {NdLibraryModule} from '../../nd-library-module';
import {expect, spyOn, within} from 'storybook/test';
import {SwitchComponent} from './switch.component';


const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  parameters: {
    docs: {
      description: {
        component:
          `
The **Switch** component provides a consistent way to toggle a boolean state in the app.

- **Label** defines the text associated with the switch.

- **Checked** determines whether the switch is on or off.

- **Disabled** prevents interaction.

- **Emits** toggled whenever the user changes the switch state (unless disabled).

Use this component to allow users to enable or disable features, settings, or preferences in a clear and accessible way.
        `
        ,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [NdLibraryModule]
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
    subLabel: {control: 'text'},
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large']
    },
    disabled: {control: 'boolean'},
    checked: {control: 'boolean'},
    trackColor: {control: 'color'},
    thumbColor: {control: 'color'},
  }
};

export default meta;
type Story = StoryObj<SwitchComponent>;

const setupCanvas = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const ndswitch = canvas.getByRole('switch');
  console.log(ndswitch);
  return {canvas, ndswitch}
}



export const Default: Story = {
  args: {
    label: 'New Switch',
    subLabel: 'Sublabelly',
    size: 'small',
    disabled: false,
    checked: false,
  },
  play: async ({canvasElement}) => {
    const {ndswitch} = setupCanvas(canvasElement);

   const label = ndswitch?.querySelector('.label')?.textContent?.trim() ?? '';
   const subLabel = ndswitch?.querySelector('.subLabel')?.textContent?.trim() ?? '';
    expect(label).toBe('New Switch');
    expect(subLabel).toBe('Sublabelly');
  }


}
export const ToggleOn: Story = {}
export const Disabled: Story = {}
export const Small: Story = {}
export const Medium: Story = {}
export const Large: Story = {}


