import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='question'>
            <h2><span>Question: </span>When should we use context API?</h2>
            <h2><span>Answer: </span>We should use the Context API in React when we need to share data between multiple components at different levels of the component tree, such as managing themes, authentication, or language selection. It simplifies code and makes it easier to manage the state of your application.</h2>
            <h2><span>Question: </span>What is custom hook in react?</h2>
            <h2><span>Answer: </span>A custom hook in React is a function that allows you to extract logic and reuse it across multiple components. It lets you reuse stateful logic, side effects, and more without the need to rewrite code or pass data through props. Custom hooks follow a naming convention of using the prefix use.</h2>
            <h2><span>Question: </span>What is useRef?</h2>
            <h2><span>Answer: </span>useRef is a hook in React that creates a mutable object that persists across re-renders of a component. It can be used to store any mutable value or access the properties and methods of a DOM node.</h2>
            <h2><span>Question: </span>What is useMemo?</h2>
            <h2><span>Answer: </span>useMemo is a hook in React that memoizes the result of a function, so that it is only recalculated when the input values change. It helps optimize performance by reducing unnecessary re-renders of components.</h2>
        </div>
    );
};

export default Blog;