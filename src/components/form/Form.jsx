

function Form({buttonName, handleSubmit, handleChange, usernameValue, emailValue, passwordValue, signUp}) {


    return (
        <form onSubmit={handleSubmit}>
            {signUp && <input type="text" name="username" value={usernameValue} onChange={handleChange} placeholder="Gebruikersnaam"/>}
            <input type="email" name="email" value={emailValue} onChange={handleChange} placeholder="e-mailadres"/>
            <input type="password" name="password" value={passwordValue} onChange={handleChange} placeholder="wachtwoord"/>
            <button type="onsubmit">{buttonName} </button>
        </form>
    );
}


export default Form;