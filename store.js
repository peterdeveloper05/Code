// Redirect to login page if not logged in
if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'index.html';
}
