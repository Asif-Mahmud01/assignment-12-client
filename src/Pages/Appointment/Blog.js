import React from 'react';

const Blog = () => {
    return (
        <div className='grid gap-5'>
            <h2>There are four main types of state you need to properly manage in your React apps:<br></br>
                1. Local state <br></br>
                2. Global state<br></br>
                3. Server state<br></br>
                4. URL state
            </h2><br></br>

            <h2>
                How does prototypical inheritance work?<br></br>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.<br></br> It is a method by which an object can inherit the properties and methods of another object.<br></br> Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
            </h2><br></br>

            <h2>
                What is a unit test? Why should we write unit tests?<br></br>
                The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br></br> Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be <br></br> more difficult to find in later testing stages.
            </h2><br></br>

            <h2>React vs. Angular vs. Vue?</h2>    

                <h2>
                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript.
                </h2>
                <h2>
                    React often requires extra modules and components, which keeps the core library small, but means there is extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn not require extras like React often does, though it does have a steeper learning curve for its core compared to React.
                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript. <br></br>

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                </h2>

            <h2>
                A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.
                It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
            </h2>
        </div>
    );
};

export default Blog;