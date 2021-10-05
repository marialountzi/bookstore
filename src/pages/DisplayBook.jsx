import React from "react";

class App extends React.Component {
    render() {
        return (
            <div>
                <u1>
                    {["mpla","lap"].map((TheSecretWorld) => {
                        return <li>{TheSecretWorld}</li>
                    })}
                </u1>
            </div>
        );
    }
}

export default App;