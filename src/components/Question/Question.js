import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='question-container'>
            <h1 className='question-title'>Frequently Asked Questions</h1>
            <div className='question'>
                <h3>1. How does React Works?</h3>
                <h5>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
                    Returned React elements determine how the UI will look at the client end.</h5>
            </div>
            <div className='question'>
                <h3>2. What are the difference between state and props?</h3>
                <h5>Answer:
                    <br />
                    # Props are read only. Props can not be modified.
                    <br />
                    # State changes can be asynchronous. State can be modified using setState.
                    <br />
                    #Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    <br />
                    #The component where we change the state known as statefull component
                </h5>
            </div>
            <div className='question'>
                <h3>3. What are the uses of "useEffect()" excepts loading data from API?</h3>
                <h5>Answer: <br />
                    # Running on state change: validating input field.
                    <br />
                    # Running on state change: live filtering.
                    <br />
                    # Running on state change: trigger animation on new array value.
                    <br />
                    # Running on props change: update paragraph list on fetched API data update.
                    <br />
                    # Running on props change: updating fetched API data to get BTC updated price.
                    <br />
                    # Finally the most common use is running once on mount: fetch API data.
                </h5>
            </div>
        </div>
    );
};

export default Question;