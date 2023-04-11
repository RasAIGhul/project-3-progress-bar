import { html } from 'lit';
import '../src/project-3-progress-bar.js';

export default {
  title: 'Project3ProgressBar',
  component: 'project-3-progress-bar',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project-3-progress-bar
      style="--project-3-progress-bar-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project-3-progress-bar>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
