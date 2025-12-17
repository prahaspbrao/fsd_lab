import React, { Component } from 'react';

class CityLifecycle extends Component {
  // 1. MOUNTING PHASE: Constructor
  // Initializes the component's state.
  constructor(props) {
    super(props);
    this.state = {
      city: "Mysore",
      color: "Blue"
    };
    console.log("1. Constructor: State initialized");
  }

  // 2. MOUNTING & UPDATING PHASE: getDerivedStateFromProps
  // Invoked right before calling the render method.
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps: Syncing props to state if needed");
    return null; // Returns null if no changes are required
  }

  // 3. MOUNTING PHASE: componentDidMount
  // Invoked immediately after the component is inserted into the DOM.
  // We use this to trigger the state change (Mysore -> Bangalore) after 2 seconds.
  componentDidMount() {
    console.log("4. componentDidMount: Component mounted");
    
    // Requirement: Change city name after 2 seconds
    setTimeout(() => {
      console.log("--- Triggering State Change ---");
      this.setState({ city: "Bangalore" });
    }, 2000);
  }

  // 4. UPDATING PHASE: shouldComponentUpdate
  // Determines if the component should re-render.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("5. shouldComponentUpdate: Should component update?");
    return true; // Return true to proceed with the update
  }

  // 5. UPDATING PHASE: getSnapshotBeforeUpdate
  // Called right before the DOM is updated.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("7. getSnapshotBeforeUpdate: Pre-update snapshot saved");
    return { prevCity: prevState.city };
  }

  // 6. UPDATING PHASE: componentDidUpdate
  // Called immediately after updating occurs.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`8. componentDidUpdate: City changed from ${snapshot.prevCity} to ${this.state.city}`);
  }

  // 3. & 6. RENDER METHOD (Mounting & Updating)
  render() {
    console.log("3/6. Render: UI rendering...");
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Class Component Lifecycle</h1>
        <h2>Current City: <span style={{ color: "red" }}>{this.state.city}</span></h2>
        <p>Check the Console (F12) to see the lifecycle method logs.</p>
      </div>
    );
  }
}

export default CityLifecycle;