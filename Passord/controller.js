function logIn() {
    const username = model.login.usernameEntry;
    const password = model.login.passwordEntry;
    model.login.loggedInUser = null;
    for (let user of model.users) {
        if (user.name == username && user.password == password) {
            model.login.loggedInUser = username;
            model.login.error = '';
            break;
        }
    }
    if (model.login.loggedInUser == null);
    show();
}