import {Meta, moduleMetadata, StoryObj} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {NdLibraryModule} from '../../nd-library-module';
import {expect, spyOn, within} from 'storybook/test';
import {getButtonLabel, getClasses, hasClass} from './button-test-utils';


const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component:
          `
The **Button** component provides a consistent way to trigger actions across the app.

- **Label** defines the button text.
- **Style** controls the visual appearance (solid, outline, or text).
- **Size** changes the scale (small, medium, large).
- **Disabled** prevents interaction.
- Emits **clicked** when pressed (unless disabled).

Use this component to create primary actions, secondary actions, or inline text-style actions depending on context.
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
    style: {
      control: {type: 'select'},
      options: ['solid', 'outline', 'text']
    },
    size: {
      control: {type: 'select'},
      options: ['small', 'medium', 'large']
    },
    disabled: {control: 'boolean'},
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

const setupCanvas = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  return {canvas, button};

}

export const Default: Story = {
  args: {
    label: 'Button',
    style: 'text',
  },
  play: async ({canvasElement}) => {
    const {button} = setupCanvas(canvasElement);
    let clicked = false;

    // Verify Label
    const label = getButtonLabel(button);
    expect(label).toBe('Button');

    // Verify Click Event
    button.addEventListener('click', () => clicked = true);
    button.click();
    expect(clicked).toBe(true);
  }
};
export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
  play: async ({canvasElement}) => {
    const {button} = setupCanvas(canvasElement);
    let clicked = false;

    // Verify Click Event
    button.addEventListener('click', () => clicked = true);
    button.click();
    expect(clicked).toBe(false);
  }
};

export const Outline: Story = {
  args: {
    label: 'Button',
    style: 'outline',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--outline')).toBe(true);

  }
};

export const Solid: Story = {
  args: {
    label: 'Button',
    style: 'solid',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--solid')).toBe(true);
  }
};
export const Text_Only: Story = {
  args: {
    label: 'Button',
    style: 'text',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--text')).toBe(true);
  }
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--large')).toBe(true);
  }
};

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--medium')).toBe(true);
  }
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
  play: async ({canvasElement}) => {
    expect(hasClass(setupCanvas(canvasElement).button, 'nd-button--small')).toBe(true);
  }
};
