//Logout Function
export default function handleLogout() {
    localStorage.removeItem("token");
    window.location.reload();
}