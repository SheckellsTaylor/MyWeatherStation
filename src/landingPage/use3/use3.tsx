import * as React from 'react';

interface IProps {
  notYetDefined?: string;
}

interface IState {
  noDefinition?: number;
}

class UseThree extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    notYetDefined: ""
  };

  public state: IState = {
    noDefinition: 0
  };
  /*
  example function 
  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };
  */

  public render() {
    return (
      <div>
        <div className='use3-container'>
        <p>This is the UseThree area.</p>
        </div>
      </div>
    );
  }
}

export default UseThree;