import React from 'react';

const Form = ({inputText, setInputText, apiKeys, setApiKeys}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitKeyHandler = (e) => {
        e.preventDefault();
        setApiKeys([
            ...apiKeys, { readKey: inputText, active: true, id: Math.random() * 1000 }
        ]);
        setInputText('');
    };

    return (
        <div>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" />
                <button type="submit" onClick={submitKeyHandler}>Add</button>
            </form>
        </div>
    )
}

export default Form;